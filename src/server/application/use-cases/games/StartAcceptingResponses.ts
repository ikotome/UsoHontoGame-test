// StartAcceptingResponses Use Case
// Feature: 002-game-preparation
// Transitions game from 準備中 to 出題中 with presenter validation

import { NotFoundError } from '@/server/domain/errors/NotFoundError';
import { ValidationError } from '@/server/domain/errors/ValidationError';
import type { IGameRepository } from '@/server/domain/repositories/IGameRepository';
import { GameId } from '@/server/domain/value-objects/GameId';

export interface StartAcceptingResponsesInput {
  gameId: string;
}

export interface StartAcceptingResponsesOutput {
  success: boolean;
}

/**
 * StartAcceptingResponses Use Case
 * Transitions a game from 準備中 to 出題中 status
 * Validates that game has at least one complete presenter before transitioning
 */
export class StartAcceptingResponses {
  constructor(private gameRepository: IGameRepository) {}

  async execute(input: StartAcceptingResponsesInput): Promise<StartAcceptingResponsesOutput> {
    const { gameId } = input;

    // Find game
    const game = await this.gameRepository.findById(new GameId(gameId));
    if (!game) {
      throw new NotFoundError(`Game ${gameId} not found`);
    }

    // Validate: Game must have at least one complete presenter
    // A complete presenter has exactly 3 episodes with exactly 1 lie
    const presenters = await this.gameRepository.findPresentersByGameId(gameId);

    if (presenters.length === 0) {
      throw new ValidationError('ゲームを開始するには、少なくとも1人のプレゼンターが必要です');
    }

    // Check that ALL presenters are complete
    // Per spec: Each presenter must have exactly 3 episodes with exactly 1 lie
    for (const presenter of presenters) {
      const episodes = await this.gameRepository.findEpisodesByPresenterId(presenter.id);

      // Each presenter must have exactly 3 episodes
      if (episodes.length !== 3) {
        throw new ValidationError(
          `出題者 ${presenter.nickname} のエピソードが不完全です（${episodes.length}/3個）`
        );
      }

      // Each presenter must have exactly 1 lie
      const lieCount = episodes.filter((ep) => ep.isLie).length;
      if (lieCount !== 1) {
        throw new ValidationError(
          `出題者 ${presenter.nickname} はウソを1つ選択する必要があります（現在${lieCount}個）`
        );
      }
    }

    // Transition status (will throw InvalidStatusTransitionError if not in 準備中)
    game.startAccepting();

    // Persist
    await this.gameRepository.update(game);

    return { success: true };
  }
}
