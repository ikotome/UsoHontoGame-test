import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { AddPresenterWithEpisodes } from '@/server/application/use-cases/games/AddPresenterWithEpisodes';
import { CloseGame } from '@/server/application/use-cases/games/CloseGame';
import { CreateGame } from '@/server/application/use-cases/games/CreateGame';
import { StartAcceptingResponses } from '@/server/application/use-cases/games/StartAcceptingResponses';
import { ValidateStatusTransition } from '@/server/application/use-cases/games/ValidateStatusTransition';
import type { IGameRepository } from '@/server/domain/repositories/IGameRepository';
import { GameId } from '@/server/domain/value-objects/GameId';
import { createGameRepository } from '@/server/infrastructure/repositories';

describe.only('Status Transition Integration', () => {
  let repository: IGameRepository;
  let gameId: string;
  const sessionId = 'test-session-123';

  beforeEach(async () => {
    // Use in-memory repository for testing
    process.env.REPOSITORY_TYPE = 'memory';
    repository = createGameRepository();

    // Clear any existing data
    const inMemoryRepo = repository as any;
    if (inMemoryRepo.clear) {
      inMemoryRepo.clear();
    }

    // Create a test game
    const createGame = new CreateGame(repository);
    const gameResult = await createGame.execute({
      creatorId: sessionId,
      name: 'Test Game',
      playerLimit: 10,
    });

    gameId = gameResult.id;
    
    // Debug: Verify game was created
    const createdGame = await repository.findById(new GameId(gameId));
    if (!createdGame) {
      throw new Error(`Failed to create test game with ID: ${gameId}`);
    }
    console.log(`Test game created with ID: ${gameId}`);
  });

  afterEach(async () => {
    // Clear in-memory repository data between tests
    if (process.env.REPOSITORY_TYPE === 'memory') {
      const inMemoryRepo = repository as any;
      if (inMemoryRepo.clear) {
        inMemoryRepo.clear();
      }
    }
    delete process.env.REPOSITORY_TYPE;
  });

  describe('Start Game Flow (準備中 → 出題中)', () => {
    it.only('should successfully start game with complete presenter', async () => {
      // Arrange: Add a complete presenter with 3 episodes (1 lie)
      const addPresenter = new AddPresenterWithEpisodes(repository);
      const presenterResult = await addPresenter.execute({
        gameId,
        nickname: 'Test Presenter',
        episodes: [
          { text: 'Truth 1', isLie: false },
          { text: 'Truth 2', isLie: false },
          { text: 'Lie', isLie: true },
        ],
        sessionId,
      });
      
      console.log('Presenter result:', presenterResult);

      // Debug: Check if presenters were added
      const presenters = await repository.findPresentersByGameId(gameId);
      console.log(`Found ${presenters.length} presenters for game ${gameId}`);

      // Act: Validate and start the game
      const validateUseCase = new ValidateStatusTransition(repository);
      const validationResult = await validateUseCase.execute(gameId, '出題中', sessionId);

      console.log('Validation result:', JSON.stringify(validationResult, null, 2));
      expect(validationResult.canTransition).toBe(true);
      expect(validationResult.errors).toHaveLength(0);

      const startUseCase = new StartAcceptingResponses(repository);
      const result = await startUseCase.execute({ gameId });

      // Assert: Game status should be updated
      expect(result.success).toBe(true);

      const game = await repository.findById(new GameId(gameId));
      expect(game?.status.value).toBe('出題中');
    });

    it('should fail to start game without presenters', async () => {
      // Act: Try to start game without any presenters
      const validateUseCase = new ValidateStatusTransition(repository);
      const validationResult = await validateUseCase.execute(gameId, '出題中', sessionId);

      // Assert: Validation should fail
      expect(validationResult.canTransition).toBe(false);
      expect(validationResult.errors).toHaveLength(1);
      expect(validationResult.errors[0].code).toBe('NO_PRESENTERS');
      expect(validationResult.errors[0].message).toBe('ゲームを開始するには出題者が必要です');
    });

    it('should fail to start game with incomplete presenter (missing episodes)', async () => {
      // Arrange: Add presenter without episodes
      const { Presenter } = await import('@/server/domain/entities/Presenter');
      try {
        const presenter = Presenter.createIncomplete({
          id: 'presenter-1',
          gameId,
          nickname: 'Incomplete Presenter',
          episodes: [], // No episodes
          createdAt: new Date(),
        });
        await repository.addPresenter(presenter);
        console.log('Successfully added incomplete presenter');
      } catch (error) {
        console.log('Failed to create incomplete presenter:', error.message);
        throw error;
      }

      // Act: Try to start the game
      const validateUseCase = new ValidateStatusTransition(repository);
      const validationResult = await validateUseCase.execute(gameId, '出題中', sessionId);

      // Assert: Validation should fail
      expect(validationResult.canTransition).toBe(false);
      expect(validationResult.errors).toHaveLength(1);
      expect(validationResult.errors[0].code).toBe('INCOMPLETE_PRESENTER');
      expect(validationResult.errors[0].message).toContain('Incomplete Presenter');
    });

    it('should fail to start game with presenter having no lies', async () => {
      // Arrange: Add presenter with 3 episodes but no lies
      const { Presenter } = await import('@/server/domain/entities/Presenter');
      const { Episode } = await import('@/server/domain/entities/Episode');
      
      const episodes = [
        Episode.create({
          id: 'episode-1',
          presenterId: 'presenter-2',
          text: 'Truth 1',
          isLie: false,
          createdAt: new Date(),
        }),
        Episode.create({
          id: 'episode-2', 
          presenterId: 'presenter-2',
          text: 'Truth 2',
          isLie: false,
          createdAt: new Date(),
        }),
        Episode.create({
          id: 'episode-3',
          presenterId: 'presenter-2', 
          text: 'Truth 3',
          isLie: false,
          createdAt: new Date(),
        }),
      ];

      const presenter = Presenter.createIncomplete({
        id: 'presenter-2',
        gameId,
        nickname: 'No Lie Presenter',
        episodes,
        createdAt: new Date(),
      });
      
      await repository.addPresenter(presenter);
      for (const episode of episodes) {
        await repository.addEpisode(episode);
      }

      // Act: Try to start the game
      const validateUseCase = new ValidateStatusTransition(repository);
      const validationResult = await validateUseCase.execute(gameId, '出題中', sessionId);

      // Assert: Validation should fail
      expect(validationResult.canTransition).toBe(false);
      expect(validationResult.errors).toHaveLength(1);
      expect(validationResult.errors[0].code).toBe('INVALID_LIE_COUNT');
      expect(validationResult.errors[0].message).toContain('ウソを1つ選択');
    });

    it('should fail to start game with unauthorized session', async () => {
      // Arrange: Add complete presenter
      const addPresenter = new AddPresenterWithEpisodes(repository);
      await addPresenter.execute({
        gameId,
        nickname: 'Test Presenter',
        episodes: [
          { text: 'Truth 1', isLie: false },
          { text: 'Truth 2', isLie: false },
          { text: 'Lie', isLie: true },
        ],
        sessionId,
      });

      // Act: Try to start game with different session
      const validateUseCase = new ValidateStatusTransition(repository);
      const validationResult = await validateUseCase.execute(gameId, '出題中', 'different-session');

      // Assert: Validation should fail
      expect(validationResult.canTransition).toBe(false);
      expect(validationResult.errors).toHaveLength(1);
      expect(validationResult.errors[0].code).toBe('UNAUTHORIZED');
      expect(validationResult.errors[0].message).toBe('このゲームを変更する権限がありません');
    });
  });

  describe('Close Game Flow (出題中 → 締切)', () => {
    beforeEach(async () => {
      // Setup: Start with a game in 出題中 status
      const addPresenter = new AddPresenterWithEpisodes(repository);
      await addPresenter.execute({
        gameId,
        nickname: 'Test Presenter',
        episodes: [
          { text: 'Truth 1', isLie: false },
          { text: 'Truth 2', isLie: false },
          { text: 'Lie', isLie: true },
        ],
        sessionId,
      });

      const startUseCase = new StartAcceptingResponses(repository);
      await startUseCase.execute({ gameId });
    });

    it('should successfully close game from accepting responses status', async () => {
      // Act: Validate and close the game
      const validateUseCase = new ValidateStatusTransition(repository);
      const validationResult = await validateUseCase.execute(gameId, '締切', sessionId);

      expect(validationResult.canTransition).toBe(true);
      expect(validationResult.errors).toHaveLength(0);

      const closeUseCase = new CloseGame(repository);
      const result = await closeUseCase.execute({ gameId });

      // Assert: Game status should be updated
      expect(result.success).toBe(true);

      const game = await repository.findById(new GameId(gameId));
      expect(game?.status.value).toBe('締切');
    });

    it('should fail to close game with unauthorized session', async () => {
      // Act: Try to close game with different session
      const validateUseCase = new ValidateStatusTransition(repository);
      const validationResult = await validateUseCase.execute(gameId, '締切', 'different-session');

      // Assert: Validation should fail
      expect(validationResult.canTransition).toBe(false);
      expect(validationResult.errors).toHaveLength(1);
      expect(validationResult.errors[0].code).toBe('UNAUTHORIZED');
    });
  });

  describe('Invalid Transitions', () => {
    it('should fail to transition closed game', async () => {
      // Arrange: Set up a closed game
      const addPresenter = new AddPresenterWithEpisodes(repository);
      await addPresenter.execute({
        gameId,
        nickname: 'Test Presenter',
        episodes: [
          { text: 'Truth 1', isLie: false },
          { text: 'Truth 2', isLie: false },
          { text: 'Lie', isLie: true },
        ],
        sessionId,
      });

      const startUseCase = new StartAcceptingResponses(repository);
      await startUseCase.execute({ gameId });

      const closeUseCase = new CloseGame(repository);
      await closeUseCase.execute({ gameId });

      // Act: Try to transition closed game
      const validateUseCase = new ValidateStatusTransition(repository);
      const validationResult = await validateUseCase.execute(gameId, '出題中', sessionId);

      // Assert: Should fail
      expect(validationResult.canTransition).toBe(false);
      expect(validationResult.errors).toHaveLength(1);
      expect(validationResult.errors[0].code).toBe('GAME_ALREADY_CLOSED');
      expect(validationResult.errors[0].message).toBe('締切状態のゲームは変更できません');
    });
  });

  describe('Full Game Lifecycle', () => {
    it('should complete full status transition lifecycle', async () => {
      // Step 1: Game starts in 準備中
      let game = await repository.findById(new GameId(gameId));
      expect(game?.status.value).toBe('準備中');

      // Step 2: Add complete presenter
      const addPresenter = new AddPresenterWithEpisodes(repository);
      await addPresenter.execute({
        gameId,
        nickname: 'Complete Presenter',
        episodes: [
          { text: 'I once ate 10 pizzas in one sitting', isLie: false },
          { text: 'I have traveled to 50 countries', isLie: true },
          { text: 'I can speak 3 languages fluently', isLie: false },
        ],
        sessionId,
      });

      // Step 3: Transition to 出題中
      const startUseCase = new StartAcceptingResponses(repository);
      await startUseCase.execute({ gameId });

      game = await repository.findById(new GameId(gameId));
      expect(game?.status.value).toBe('出題中');

      // Step 4: Transition to 締切
      const closeUseCase = new CloseGame(repository);
      await closeUseCase.execute({ gameId });

      game = await repository.findById(new GameId(gameId));
      expect(game?.status.value).toBe('締切');

      // Step 5: Verify no further transitions are possible
      const validateUseCase = new ValidateStatusTransition(repository);
      const validationResult = await validateUseCase.execute(gameId, '出題中', sessionId);

      expect(validationResult.canTransition).toBe(false);
      expect(validationResult.errors[0].code).toBe('GAME_ALREADY_CLOSED');
    });
  });
});
