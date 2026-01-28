module.exports = [
"[project]/src/lib/i18n/constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * i18n Constants
 * Feature: 008-i18n-support
 */ __turbopack_context__.s([
    "DEFAULT_LANGUAGE",
    ()=>DEFAULT_LANGUAGE,
    "LANGUAGE_COOKIE_KEY",
    ()=>LANGUAGE_COOKIE_KEY,
    "LANGUAGE_STORAGE_KEY",
    ()=>LANGUAGE_STORAGE_KEY,
    "LOCALE_MAP",
    ()=>LOCALE_MAP,
    "SUPPORTED_LANGUAGES",
    ()=>SUPPORTED_LANGUAGES
]);
const DEFAULT_LANGUAGE = 'ja';
const SUPPORTED_LANGUAGES = [
    'ja',
    'en'
];
const LANGUAGE_STORAGE_KEY = 'uso-honto-language';
const LANGUAGE_COOKIE_KEY = 'uso-honto-language';
const LOCALE_MAP = {
    ja: 'ja-JP',
    en: 'en-US'
};
}),
"[project]/src/lib/i18n/storage-server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Storage Persistence Utilities (Server-Side)
 * Feature: 008-i18n-support / US2
 *
 * Handles reading and writing language preference to cookies (server-side only)
 * Uses Next.js cookies() API which can only be used in Server Components and Server Actions
 */ /* __next_internal_action_entry_do_not_use__ [{"00eb21139ed24c2245250f9238ea8e808eac762ef7":"getStoredLanguageCookie","401b5811330bb8d9e6a4ddc9d29c681ceaffcd2a97":"setStoredLanguageCookie"},"",""] */ __turbopack_context__.s([
    "getStoredLanguageCookie",
    ()=>getStoredLanguageCookie,
    "setStoredLanguageCookie",
    ()=>setStoredLanguageCookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getStoredLanguageCookie() {
    try {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        const stored = cookieStore.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LANGUAGE_COOKIE_KEY"])?.value;
        if (!stored) {
            return null;
        }
        // Validate that stored value is a supported language
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"].includes(stored)) {
            return stored;
        }
        return null;
    } catch (error) {
        // Cookie access might fail in certain contexts
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('Failed to read language from cookie:', error);
        }
        return null;
    }
}
async function setStoredLanguageCookie(language) {
    try {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LANGUAGE_COOKIE_KEY"], language, {
            maxAge: 365 * 24 * 60 * 60,
            path: '/',
            sameSite: 'lax',
            secure: ("TURBOPACK compile-time value", "development") === 'production'
        });
    } catch (error) {
        // Cookie access might fail in certain contexts
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('Failed to save language to cookie:', error);
        }
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getStoredLanguageCookie,
    setStoredLanguageCookie
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStoredLanguageCookie, "00eb21139ed24c2245250f9238ea8e808eac762ef7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setStoredLanguageCookie, "401b5811330bb8d9e6a4ddc9d29c681ceaffcd2a97", null);
}),
"[project]/src/lib/i18n/translations/en.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * English Translations
 * Feature: 008-i18n-support
 */ __turbopack_context__.s([
    "en",
    ()=>en
]);
const en = {
    common: {
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        create: 'Create',
        back: 'Back',
        next: 'Next',
        loading: 'Loading...',
        submit: 'Submit',
        close: 'Close',
        confirm: 'Confirm',
        yes: 'Yes',
        no: 'No',
        checkmark: 'Checkmark',
        reset: 'Reset'
    },
    navigation: {
        home: 'Home',
        games: 'Games',
        gameList: 'Game List',
        createGame: 'Create Game',
        joinGame: 'Join Game',
        settings: 'Settings',
        language: 'Language',
        dashboard: 'Dashboard',
        activeGames: 'Active Games'
    },
    game: {
        title: 'Two Truths and a Lie',
        createGame: 'Create Game',
        editGame: 'Edit Game',
        editSettings: 'Edit Settings',
        deleteGame: 'Delete Game',
        dangerZone: 'Danger Zone',
        deleteWarning: 'Deleting a game will also delete all related presenters and episodes. This action cannot be undone.',
        createHelp: 'Created games start in "Preparing" status. After adding presenters and registering episodes, you can change it to "Active".',
        playerLimit: 'Player Limit',
        playerLimitDescription: 'Maximum number of players allowed in the game',
        status: {
            preparing: 'Preparing',
            active: 'Active',
            closed: 'Closed'
        },
        presenter: 'Presenter',
        presenters: 'Presenters',
        episode: 'Episode',
        episodes: 'Episodes',
        truth: 'Truth',
        lie: 'Lie',
        noGames: 'No games',
        gameNotFound: 'Game not found',
        startGame: 'Start Game',
        endGame: 'End Game',
        activeGames: 'Active Games',
        gameManagement: 'Game Management',
        gameManagementDescription: 'View and manage your created games',
        newGame: 'Create New Game',
        gameDetails: 'Game Details',
        gameTitle: 'Game Title',
        createdAt: 'Created At',
        players: 'Players',
        participants: 'Participants',
        participantList: 'Participant List',
        join: 'Join',
        availableSlots: 'Available Slots',
        startAccepting: 'Start Accepting',
        gameClosed: 'Game Closed',
        createdGames: 'Created Games',
        availableGames: 'Available Games'
    },
    session: {
        nickname: 'Nickname',
        enterNickname: 'Enter nickname',
        join: 'Join',
        leave: 'Leave',
        participants: 'Participants',
        noParticipants: 'No participants',
        welcome: 'Welcome'
    },
    answer: {
        answerGame: 'Answer Game',
        submitAnswer: 'Submit Answer',
        selectLie: 'Select the lie',
        yourAnswer: 'Your Answer',
        correct: 'Correct',
        incorrect: 'Incorrect',
        alreadySubmitted: 'Already submitted',
        answerSubmitted: 'Answer submitted',
        answerForm: 'Answer Form',
        detectLieTitle: 'Detect the Lie',
        detectLieDescription: 'Select the lie from the 3 episodes of each presenter.',
        selectAllEpisodes: 'Please select an answer for all presenters',
        ready: 'Ready to Submit'
    },
    results: {
        results: 'Results',
        finalResults: 'Final Results',
        calculatingResults: 'Calculating results...',
        responseStatus: 'Response Status',
        responseStatusDashboard: 'Response Status Dashboard',
        responseStatusDescription: 'Track participant submission status in real-time',
        loadingResponseStatus: 'Loading response status...',
        autoUpdating: 'Auto-updating',
        manualRefresh: 'Manual Refresh',
        updating: 'Updating...',
        lastUpdated: 'Last Updated',
        gameEnded: 'Game Ended',
        gameEndedDescription: 'This game has been closed. Below is the final response status.',
        creatorOnly: 'This feature is only available to game creators.',
        requiresActiveOrClosed: 'Dashboard is only available for active or closed games.',
        statistics: 'Statistics',
        score: 'Score',
        ranking: 'Ranking',
        winner: 'Winner',
        points: 'Points',
        correctAnswers: 'Correct Answers',
        totalQuestions: 'Total Questions',
        totalParticipants: 'Total Participants',
        highestScore: 'Highest Score',
        averageScore: 'Average Score',
        medianScore: 'Median Score',
        congratulations: 'Congratulations!',
        tieWinner: 'Tie Winner!',
        tieMessage: '{count} players tied for first place!',
        detectSuccess: 'Successfully detected the lie!',
        correctCount: 'Correct Count',
        showDetails: 'Show Details',
        noAnswers: 'No answers',
        pending: 'Pending',
        submitted: 'Submitted',
        allSubmitted: 'All participants submitted',
        viewResults: 'View Results'
    },
    errors: {
        required: 'This field is required',
        invalid: 'Invalid value',
        notFound: 'Not found',
        pageNotFound: 'Page Not Found',
        pageNotFoundDescription: 'The page you are looking for does not exist, or may have been moved or deleted.',
        serverError: 'Server error occurred',
        networkError: 'Network error occurred',
        unauthorized: 'Authentication required',
        forbidden: 'Access denied',
        validationFailed: 'Validation failed',
        unexpectedError: 'Unexpected error occurred',
        errorOccurred: 'An error occurred',
        responseStatusFetchError: 'Response Status Fetch Error'
    },
    messages: {
        saved: 'Saved',
        deleted: 'Deleted',
        created: 'Created',
        updated: 'Updated',
        copied: 'Copied',
        success: 'Success'
    },
    emptyState: {
        noData: 'No data',
        noResults: 'No results',
        noGamesFound: 'No games found',
        noActiveGames: 'No active games at the moment',
        waitForGames: 'Please wait for new games to start',
        noGames: 'No games',
        createFirstGame: "Let's create your first game",
        noAvailableGames: 'No available games'
    },
    validation: {
        required: 'Required',
        invalid: 'Invalid value',
        tooLong: 'Too long',
        tooShort: 'Too short',
        outOfRange: 'Out of range',
        notInteger: 'Must be an integer',
        game: {
            name: {
                tooLong: 'Game name must be 100 characters or less'
            },
            playerLimit: {
                range: 'Player limit must be between 1 and 100',
                belowCurrent: 'Cannot set limit below current participant count',
                notInteger: 'Player limit must be an integer',
                tooLow: 'Player limit must be at least 1',
                tooHigh: 'Player limit must be 100 or less'
            }
        },
        nickname: {
            empty: 'Please enter a nickname',
            tooLong: 'Nickname must be 50 characters or less'
        },
        episode: {
            empty: 'Please enter episode content',
            tooLong: 'Episode must be 500 characters or less',
            count: 'Please enter exactly 3 episodes',
            lieCount: 'Select exactly 1 lie episode',
            needOneLie: 'Please select one lie episode',
            onlyOneLie: 'You can only select one lie episode'
        },
        presenter: {
            alreadyComplete: 'This presenter has already completed episode registration',
            notFound: 'Presenter not found'
        },
        answer: {
            noSelections: 'Please select an answer',
            incomplete: 'Please answer for all presenters'
        }
    },
    form: {
        game: {
            name: {
                label: 'Game Name',
                placeholder: 'Game ID shown if empty',
                description: 'Name of the game (optional)',
                optional: 'Optional'
            },
            playerLimit: {
                label: 'Player Limit',
                description: 'Maximum number of players allowed',
                currentPlayers: 'Current players: {count}',
                availableSlots: 'Available slots: {count}'
            },
            status: {
                label: 'Status'
            },
            availableSlots: {
                label: 'Available Slots'
            },
            createdAt: {
                label: 'Created At'
            },
            updatedAt: {
                label: 'Updated At'
            }
        },
        presenter: {
            nickname: {
                label: 'Presenter Name',
                placeholder: 'Enter nickname',
                example: 'Example: John'
            }
        },
        episode: {
            content: {
                label: 'Episode Content',
                placeholder: 'Enter your episode'
            },
            isLie: {
                label: 'This is a lie'
            }
        },
        answer: {
            selectEpisodes: "Select one lie from each presenter's episodes",
            selectLieEpisode: 'Select the episode you think is a lie'
        }
    },
    status: {
        transition: {
            preparing: {
                toActive: 'Start Game'
            },
            active: {
                toClosed: 'Close Game'
            }
        },
        labels: {
            preparing: 'Preparing',
            active: 'Active',
            closed: 'Closed',
            starting: 'Starting...',
            closing: 'Closing...',
            updating: 'Updating...',
            loading: 'Loading...',
            success: 'Success',
            error: 'Error',
            retry: 'Retry',
            completed: 'Completed',
            complete: 'Complete',
            incomplete: 'Incomplete'
        },
        messages: {
            gameStarted: 'Game started',
            gameClosed: 'Game closed',
            statusUpdated: 'Status updated',
            cannotEdit: 'Cannot edit active or closed games'
        }
    },
    presenter: {
        add: 'Add',
        addPresenter: 'Add Presenter',
        presenterManagement: 'Presenter Management',
        presenterManagementDescription: 'Manage presenters and episodes. Register 3 episodes (2 truths and 1 lie) for each presenter.',
        registerPresenterAndEpisodes: 'Register Presenter and Episodes',
        goToPresenterPage: 'Go to Presenter Management',
        presenterList: 'Presenter List',
        registeredPresenters: 'Registered Presenters',
        noPresenter: 'No presenters',
        presenterNotFound: 'Presenter not found',
        episodeCount: 'Episode Count',
        registrationStatus: 'Registration Status',
        registered: 'Registered',
        episodesComplete: 'Episodes Complete',
        episodesIncomplete: 'Episodes Incomplete',
        deletePresenter: 'Delete Presenter',
        confirmDelete: 'Are you sure you want to delete this presenter?',
        addEpisode: 'Add Episode',
        presenterAdded: 'Presenter added',
        presenterDeleted: 'Presenter deleted',
        presenterDeleteFailed: 'Failed to delete presenter',
        noPresenters: 'No presenters',
        presenterEpisodes: "{name}'s Episodes",
        management: 'Presenter Management'
    },
    episode: {
        addEpisode: 'Add Episode',
        episodeContent: 'Episode Content',
        episodeList: 'Episode List',
        noEpisodes: 'No episodes',
        selectThree: 'Select 3 episodes',
        remaining: '{count} remaining',
        canAddMore: 'You can add {count} more',
        alreadyComplete: 'Episode registration is complete',
        lieEpisode: 'Lie Episode',
        truthEpisode: 'Truth Episode',
        markAsLie: 'Mark as lie',
        alreadyHasLie: 'A lie episode is already selected',
        episodeAdded: 'Episode added',
        episodeFailed: 'Failed to add episode',
        episodeManagementDescription: 'Manage presenter episodes',
        registered: 'Registered',
        remainingCount: '{count} remaining',
        characterCount: '{count} characters'
    },
    action: {
        game: {
            create: {
                success: 'Game created successfully',
                error: 'Failed to create game'
            },
            update: {
                success: 'Game updated successfully',
                error: 'Failed to update game'
            },
            delete: {
                success: 'Game deleted successfully',
                error: 'Failed to delete game',
                confirm: 'Are you sure you want to delete this game?',
                confirmActive: 'Delete active game? All participant data will be removed.',
                confirmClosed: 'Delete closed game? All results data will be removed.'
            },
            start: {
                success: 'Game started successfully',
                error: 'Failed to start game',
                confirm: 'Are you sure you want to start this game?'
            },
            close: {
                success: 'Game closed successfully',
                error: 'Failed to close game',
                confirm: 'Are you sure you want to close this game? Participants will no longer be able to answer.'
            },
            fetch: {
                error: 'Failed to fetch game information'
            }
        },
        presenter: {
            add: {
                success: 'Presenter added successfully',
                error: 'Failed to add presenter'
            },
            delete: {
                error: 'Failed to delete presenter'
            }
        },
        episode: {
            add: {
                error: 'Failed to add episode'
            }
        },
        answer: {
            submit: {
                success: 'Answer submitted successfully',
                error: 'Failed to submit answer'
            }
        },
        session: {
            notFound: 'Session not found',
            required: 'Session information required',
            unauthorized: 'You do not have permission to perform this action'
        }
    },
    toast: {
        success: 'Success',
        successIcon: 'Success Icon',
        successNotification: 'Success Notification',
        error: 'Error',
        errorIcon: 'Error Icon',
        errorNotification: 'Error Notification',
        warning: 'Warning',
        warningIcon: 'Warning Icon',
        warningNotification: 'Warning Notification',
        info: 'Info',
        infoIcon: 'Info Icon',
        infoNotification: 'Info Notification',
        close: 'Close',
        closeIcon: 'Close Icon',
        notificationArea: 'Notification Area'
    },
    accessibility: {
        statusChanged: 'Status changed from {oldStatus} to {newStatus}',
        errorOccurred: 'Error occurred: {error}',
        operationSucceeded: 'Operation succeeded: {message}',
        detailedUpdate: 'Detailed update: {message}'
    }
};
}),
"[project]/src/lib/i18n/translations/ja.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Japanese Translations
 * Feature: 008-i18n-support
 */ __turbopack_context__.s([
    "ja",
    ()=>ja
]);
const ja = {
    common: {
        save: '保存',
        cancel: 'キャンセル',
        delete: '削除',
        edit: '編集',
        create: '作成',
        back: '戻る',
        next: '次へ',
        loading: '読み込み中...',
        submit: '送信',
        close: '閉じる',
        confirm: '確認',
        yes: 'はい',
        no: 'いいえ',
        checkmark: 'チェックマーク',
        reset: 'リセット'
    },
    navigation: {
        home: 'ホーム',
        games: 'ゲーム',
        gameList: 'ゲーム一覧',
        createGame: 'ゲーム作成',
        joinGame: 'ゲーム参加ページへ',
        settings: '設定',
        language: '言語',
        dashboard: 'ダッシュボード',
        activeGames: '出題中のゲーム'
    },
    game: {
        title: 'ウソホントゲーム',
        createGame: 'ゲームを作成',
        editGame: 'ゲームを編集',
        editSettings: '設定を変更',
        deleteGame: 'ゲームを削除',
        dangerZone: '危険な操作',
        deleteWarning: 'ゲームを削除すると、関連するプレゼンターとエピソードもすべて削除されます。この操作は取り消せません。',
        createHelp: '作成されたゲームは「準備中」ステータスで開始されます。プレゼンターを追加してエピソードを登録後、「出題中」に変更できます。',
        playerLimit: 'プレイヤー上限',
        playerLimitDescription: 'ゲームに参加できる最大人数',
        status: {
            preparing: '準備中',
            active: '出題中',
            closed: '締切'
        },
        presenter: 'プレゼンター',
        presenters: 'プレゼンター',
        episode: 'エピソード',
        episodes: 'エピソード',
        truth: '本当',
        lie: 'ウソ',
        noGames: 'ゲームがありません',
        gameNotFound: 'ゲームが見つかりません',
        startGame: 'ゲーム開始',
        endGame: 'ゲーム終了',
        activeGames: '出題中のゲーム',
        gameManagement: 'ゲーム管理',
        gameManagementDescription: '作成したゲームの一覧を確認・管理できます',
        newGame: '新しいゲームを作成',
        gameDetails: 'ゲーム詳細',
        gameTitle: 'ゲームタイトル',
        createdAt: '作成日時',
        players: 'プレイヤー',
        participants: '参加者',
        participantList: '参加者一覧',
        join: '参加する',
        availableSlots: '空き枠',
        startAccepting: '出題を開始',
        gameClosed: 'ゲーム締切',
        createdGames: '作成したゲーム',
        availableGames: '参加可能なゲーム'
    },
    session: {
        nickname: 'ニックネーム',
        enterNickname: 'ニックネームを入力',
        join: '参加',
        leave: '退出',
        participants: '参加者',
        noParticipants: '参加者がいません',
        welcome: 'ようこそ'
    },
    answer: {
        answerGame: 'ゲームに回答',
        submitAnswer: '回答を送信',
        selectLie: 'ウソを選択してください',
        yourAnswer: 'あなたの回答',
        correct: '正解',
        incorrect: '不正解',
        alreadySubmitted: 'すでに回答済みです',
        answerSubmitted: '回答を送信しました',
        answerForm: '回答フォーム',
        detectLieTitle: 'ウソを見抜いてください',
        detectLieDescription: '各プレゼンターの3つのエピソードの中から、ウソのエピソードを1つ選んでください。',
        selectAllEpisodes: 'すべてのプレゼンターの回答を選択してください',
        ready: '回答準備完了'
    },
    results: {
        results: '結果',
        finalResults: '最終結果',
        calculatingResults: '結果を集計中...',
        responseStatus: '回答状況',
        responseStatusDashboard: '回答状況ダッシュボード',
        responseStatusDescription: '参加者の回答送信状況をリアルタイムで確認できます',
        loadingResponseStatus: '回答状況を読み込み中...',
        autoUpdating: '自動更新中',
        manualRefresh: '手動更新',
        updating: '更新中...',
        lastUpdated: '最終更新',
        gameEnded: 'ゲーム終了',
        gameEndedDescription: 'このゲームは締め切られました。以下は最終的な回答状況です。',
        creatorOnly: 'この機能はゲーム作成者のみが利用できます。',
        requiresActiveOrClosed: 'ダッシュボードは出題中または締切のゲームでのみ利用できます。',
        statistics: '統計情報',
        score: 'スコア',
        ranking: 'ランキング',
        winner: '優勝',
        points: 'ポイント',
        correctAnswers: '正解数',
        totalQuestions: '全問題数',
        totalParticipants: '参加者数',
        highestScore: '最高得点',
        averageScore: '平均得点',
        medianScore: '中央値',
        congratulations: 'おめでとうございます！',
        tieWinner: '同点優勝！',
        tieMessage: '{count}人が同点で優勝しました！',
        detectSuccess: 'ウソを見抜くことに成功しました！',
        correctCount: '正解数',
        showDetails: '詳細を表示',
        noAnswers: '回答がありません',
        pending: '未回答',
        submitted: '回答済み',
        allSubmitted: 'すべての参加者が回答しました',
        viewResults: '結果を見る'
    },
    errors: {
        required: '必須項目です',
        invalid: '無効な値です',
        notFound: '見つかりませんでした',
        pageNotFound: 'ページが見つかりません',
        pageNotFoundDescription: 'お探しのページは存在しないか、移動または削除された可能性があります。',
        serverError: 'サーバーエラーが発生しました',
        networkError: 'ネットワークエラーが発生しました',
        unauthorized: '認証が必要です',
        forbidden: 'アクセスが拒否されました',
        validationFailed: '入力内容に誤りがあります',
        unexpectedError: '予期しないエラーが発生しました',
        errorOccurred: 'エラーが発生しました',
        responseStatusFetchError: '回答状況の取得エラー'
    },
    messages: {
        saved: '保存しました',
        deleted: '削除しました',
        created: '作成しました',
        updated: '更新しました',
        copied: 'コピーしました',
        success: '成功しました'
    },
    emptyState: {
        noData: 'データがありません',
        noResults: '結果がありません',
        noGamesFound: 'ゲームが見つかりませんでした',
        noActiveGames: '現在、出題中のゲームはありません',
        waitForGames: '新しいゲームが開始されるまでお待ちください',
        noGames: 'ゲームがありません',
        createFirstGame: '最初のゲームを作成しましょう',
        noAvailableGames: '参加可能なゲームがありません'
    },
    validation: {
        required: '必須項目です',
        invalid: '無効な値です',
        tooLong: '文字数が多すぎます',
        tooShort: '文字数が不足しています',
        outOfRange: '範囲外の値です',
        notInteger: '整数で入力してください',
        game: {
            name: {
                tooLong: 'ゲーム名は100文字以内で入力してください'
            },
            playerLimit: {
                range: '参加人数は1〜100人の範囲で指定してください',
                belowCurrent: '現在の参加者数より少ない値は設定できません',
                notInteger: '参加人数は整数で入力してください',
                tooLow: '参加人数は1人以上で設定してください',
                tooHigh: '参加人数は100人以下で設定してください'
            }
        },
        nickname: {
            empty: 'ニックネームを入力してください',
            tooLong: 'ニックネームは50文字以内で入力してください'
        },
        episode: {
            empty: 'エピソード内容を入力してください',
            tooLong: 'エピソードは500文字以内で入力してください',
            count: 'エピソードは3つ入力してください',
            lieCount: 'ウソのエピソードは1つだけ選択してください',
            needOneLie: 'ウソのエピソードを1つ選択してください',
            onlyOneLie: 'ウソのエピソードは1つだけ選択できます'
        },
        presenter: {
            alreadyComplete: 'このプレゼンターは既にエピソード登録が完了しています',
            notFound: 'プレゼンターが見つかりません'
        },
        answer: {
            noSelections: '回答を選択してください',
            incomplete: 'すべてのプレゼンターの回答を選択してください'
        }
    },
    form: {
        game: {
            name: {
                label: 'ゲーム名',
                placeholder: '未入力の場合はゲームIDが表示されます',
                description: 'ゲームの名前（任意）',
                optional: '任意'
            },
            playerLimit: {
                label: '参加人数上限',
                description: 'ゲームに参加できる最大人数',
                currentPlayers: '現在の参加者: {count}人',
                availableSlots: '空き枠: {count}人'
            },
            status: {
                label: 'ステータス'
            },
            availableSlots: {
                label: '空き枠'
            },
            createdAt: {
                label: '作成日時'
            },
            updatedAt: {
                label: '更新日時'
            }
        },
        presenter: {
            nickname: {
                label: 'プレゼンター名',
                placeholder: 'ニックネームを入力',
                example: '例: 太郎'
            }
        },
        episode: {
            content: {
                label: 'エピソード内容',
                placeholder: 'エピソードを入力してください'
            },
            isLie: {
                label: 'これはウソです'
            }
        },
        answer: {
            selectEpisodes: '各プレゼンターのエピソードからウソを1つ選んでください',
            selectLieEpisode: 'ウソだと思うエピソードを選択'
        }
    },
    status: {
        transition: {
            preparing: {
                toActive: 'ゲームを開始'
            },
            active: {
                toClosed: 'ゲームを締め切る'
            }
        },
        labels: {
            preparing: '準備中',
            active: '出題中',
            closed: '締切',
            starting: '開始中...',
            closing: '締切中...',
            updating: '更新中...',
            loading: '読み込み中...',
            success: '成功',
            error: 'エラー',
            retry: '再試行',
            completed: '完了',
            complete: '完了',
            incomplete: '未完了'
        },
        messages: {
            gameStarted: 'ゲームを開始しました',
            gameClosed: 'ゲームを締め切りました',
            statusUpdated: 'ステータスを更新しました',
            cannotEdit: '出題中または締切済みのゲームは編集できません'
        }
    },
    presenter: {
        add: '追加',
        addPresenter: 'プレゼンターを追加',
        presenterManagement: 'プレゼンター管理',
        presenterManagementDescription: 'プレゼンターとエピソードを管理します。各プレゼンターに3つのエピソード（2つのホント、1つのウソ）を登録してください。',
        registerPresenterAndEpisodes: 'プレゼンターとエピソードを登録',
        goToPresenterPage: 'プレゼンター管理ページへ',
        presenterList: 'プレゼンター一覧',
        registeredPresenters: '登録済みプレゼンター',
        noPresenter: 'プレゼンターがいません',
        presenterNotFound: 'プレゼンターが見つかりません',
        episodeCount: 'エピソード数',
        registrationStatus: '登録状況',
        registered: '登録済み',
        episodesComplete: 'エピソード登録完了',
        episodesIncomplete: 'エピソード未登録',
        deletePresenter: 'プレゼンターを削除',
        confirmDelete: '本当にこのプレゼンターを削除しますか？',
        addEpisode: 'エピソードを追加',
        presenterAdded: 'プレゼンターを追加しました',
        presenterDeleted: 'プレゼンターを削除しました',
        presenterDeleteFailed: 'プレゼンターの削除に失敗しました',
        noPresenters: 'プレゼンターがいません',
        presenterEpisodes: '{name}のエピソード',
        management: 'プレゼンター管理'
    },
    episode: {
        addEpisode: 'エピソードを追加',
        episodeContent: 'エピソード内容',
        episodeList: 'エピソード一覧',
        noEpisodes: 'エピソードがありません',
        selectThree: '3つのエピソードを選択',
        remaining: '残り {count} 個',
        canAddMore: 'あと {count} 個追加できます',
        alreadyComplete: 'エピソード登録は完了しています',
        lieEpisode: 'ウソのエピソード',
        truthEpisode: '本当のエピソード',
        markAsLie: 'ウソとしてマーク',
        alreadyHasLie: '既にウソのエピソードが選択されています',
        episodeAdded: 'エピソードを追加しました',
        episodeFailed: 'エピソードの追加に失敗しました',
        episodeManagementDescription: 'プレゼンターのエピソードを管理します',
        registered: '登録済み',
        remainingCount: 'あと{count}個',
        characterCount: '{count}文字'
    },
    action: {
        game: {
            create: {
                success: 'ゲームを作成しました',
                error: 'ゲームの作成に失敗しました'
            },
            update: {
                success: 'ゲームを更新しました',
                error: 'ゲームの更新に失敗しました'
            },
            delete: {
                success: 'ゲームを削除しました',
                error: 'ゲームの削除に失敗しました',
                confirm: '本当にこのゲームを削除しますか？',
                confirmActive: '出題中のゲームを削除しますか？参加者のデータも削除されます。',
                confirmClosed: '締切済みのゲームを削除しますか？結果データも削除されます。'
            },
            start: {
                success: 'ゲームを開始しました',
                error: 'ゲームの開始に失敗しました',
                confirm: '本当にゲームを開始しますか？'
            },
            close: {
                success: 'ゲームを締め切りました',
                error: 'ゲームの締切に失敗しました',
                confirm: '本当にゲームを締め切りますか？締切後は参加者が回答できなくなります。'
            },
            fetch: {
                error: 'ゲーム情報の取得に失敗しました'
            }
        },
        presenter: {
            add: {
                success: 'プレゼンターを追加しました',
                error: 'プレゼンターの追加に失敗しました'
            },
            delete: {
                error: 'プレゼンターの削除に失敗しました'
            }
        },
        episode: {
            add: {
                error: 'エピソードの追加に失敗しました'
            }
        },
        answer: {
            submit: {
                success: '回答を送信しました',
                error: '回答の送信に失敗しました'
            }
        },
        session: {
            notFound: 'セッションが見つかりません',
            required: 'セッション情報が必要です',
            unauthorized: 'この操作を行う権限がありません'
        }
    },
    toast: {
        success: '成功',
        successIcon: '成功アイコン',
        successNotification: '成功通知',
        error: 'エラー',
        errorIcon: 'エラーアイコン',
        errorNotification: 'エラー通知',
        warning: '警告',
        warningIcon: '警告アイコン',
        warningNotification: '警告通知',
        info: '情報',
        infoIcon: '情報アイコン',
        infoNotification: '情報通知',
        close: '閉じる',
        closeIcon: '閉じるアイコン',
        notificationArea: '通知エリア'
    },
    accessibility: {
        statusChanged: 'ステータスが{oldStatus}から{newStatus}に変更されました',
        errorOccurred: 'エラーが発生しました: {error}',
        operationSucceeded: '操作が成功しました: {message}',
        detailedUpdate: '詳細更新: {message}'
    }
};
}),
"[project]/src/lib/i18n/translations/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Translations Index
 * Feature: 008-i18n-support
 *
 * Central export for all translation objects
 */ __turbopack_context__.s([
    "translations",
    ()=>translations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$en$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/translations/en.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$ja$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/translations/ja.ts [app-rsc] (ecmascript)");
;
;
const translations = {
    ja: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$ja$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ja"],
    en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$en$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["en"]
};
}),
"[project]/src/lib/i18n/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * i18n Utilities
 * Feature: 008-i18n-support
 *
 * Helper functions for translation, formatting, and locale operations
 */ __turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "formatNumber",
    ()=>formatNumber,
    "getTranslation",
    ()=>getTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/translations/index.ts [app-rsc] (ecmascript)");
;
;
function getTranslation(language, key) {
    // Split key into namespace and nested keys
    const keys = key.split('.');
    // Navigate to the translation value
    // biome-ignore lint/suspicious/noExplicitAny: Dynamic path navigation required
    let value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translations"][language];
    for (const k of keys){
        value = value?.[k];
    }
    // If translation found, return it
    if (typeof value === 'string') {
        return value;
    }
    // Fallback to Japanese if translation not found
    // biome-ignore lint/suspicious/noExplicitAny: Dynamic path navigation required
    let fallbackValue = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translations"][__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"]];
    for (const k of keys){
        fallbackValue = fallbackValue?.[k];
    }
    if (typeof fallbackValue === 'string') {
        // Log warning in development
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn(`Missing translation: ${language}.${key}`);
        }
        return fallbackValue;
    }
    // Last resort: return the key itself
    if ("TURBOPACK compile-time truthy", 1) {
        console.error(`Translation not found: ${key}`);
    }
    return key;
}
function formatDate(language, date, options) {
    const locale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCALE_MAP"][language];
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
}
function formatNumber(language, num, options) {
    const locale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCALE_MAP"][language];
    const formatter = new Intl.NumberFormat(locale, options);
    return formatter.format(num);
}
}),
"[project]/src/lib/i18n/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Server-Side i18n Utilities
 * Feature: 008-i18n-support
 *
 * Translation functions for Server Actions and Server Components
 * Uses cookies for language detection since React Context is unavailable on the server
 */ /* __next_internal_action_entry_do_not_use__ [{"004744ca3659f84bada2a1af49c2c77623fa210a71":"getCurrentLanguage","40e4a3d613f33b31c59aafd1c21416164ee4558d0a":"t"},"",""] */ __turbopack_context__.s([
    "getCurrentLanguage",
    ()=>getCurrentLanguage,
    "t",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$storage$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/storage-server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function t(key) {
    const language = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$storage$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStoredLanguageCookie"])() ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(language, key);
}
async function getCurrentLanguage() {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$storage$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStoredLanguageCookie"])() ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"];
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    t,
    getCurrentLanguage
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(t, "40e4a3d613f33b31c59aafd1c21416164ee4558d0a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCurrentLanguage, "004744ca3659f84bada2a1af49c2c77623fa210a71", null);
}),
"[project]/src/server/domain/value-objects/GameId.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// GameId value object
// Encapsulates game identifier with UUID validation
/**
 * Error thrown when GameId format is invalid
 */ __turbopack_context__.s([
    "GameId",
    ()=>GameId,
    "InvalidGameIdError",
    ()=>InvalidGameIdError
]);
class InvalidGameIdError extends Error {
    constructor(value){
        super(`Invalid game ID format: ${value}`);
        this.name = 'InvalidGameIdError';
    }
}
class GameId {
    _value;
    /**
   * Creates a new GameId
   * @param value The game ID string (must be valid UUID v4)
   * @throws InvalidGameIdError if format is invalid
   */ constructor(value){
        if (!this.validateFormat(value)) {
            throw new InvalidGameIdError(value);
        }
        this._value = value;
    }
    /**
   * Gets the game ID value
   */ get value() {
        return this._value;
    }
    /**
   * Validates the game ID format
   * @param value The value to validate
   * @returns true if valid UUID v4 format
   */ validateFormat(value) {
        // UUID v4 format: 8-4-4-4-12 hexadecimal characters
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return uuidRegex.test(value);
    }
    /**
   * Checks equality with another GameId
   * @param other The GameId to compare with
   * @returns true if values are equal
   */ equals(other) {
        return this._value === other._value;
    }
    /**
   * Returns string representation
   */ toString() {
        return this._value;
    }
    /**
   * Static factory for generating new game IDs
   */ static generate() {
        return new GameId(crypto.randomUUID());
    }
}
}),
"[project]/src/server/application/use-cases/answers/GetGameForAnswers.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Use Case: GetGameForAnswers
// Fetches game data for answer submission screen (hides isLie)
__turbopack_context__.s([
    "GetGameForAnswers",
    ()=>GetGameForAnswers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/GameId.ts [app-rsc] (ecmascript)");
;
;
class GetGameForAnswers {
    gameRepository;
    constructor(gameRepository){
        this.gameRepository = gameRepository;
    }
    async execute(gameId) {
        // Validate game ID
        if (!gameId || gameId.trim() === '') {
            return {
                success: false,
                error: {
                    code: 'INVALID_GAME_ID',
                    message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('errors.invalid')
                }
            };
        }
        // Fetch game
        let gameIdObj;
        try {
            gameIdObj = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GameId"](gameId);
        } catch  {
            // Invalid UUID format - treat as not found
            return {
                success: false,
                error: {
                    code: 'GAME_NOT_FOUND',
                    message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('game.gameNotFound')
                }
            };
        }
        const game = await this.gameRepository.findById(gameIdObj);
        if (!game) {
            return {
                success: false,
                error: {
                    code: 'GAME_NOT_FOUND',
                    message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('game.gameNotFound')
                }
            };
        }
        // Validate game status (reject closed games)
        if (game.status.toString() === '締切') {
            return {
                success: false,
                error: {
                    code: 'GAME_CLOSED',
                    message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('status.labels.closed')
                }
            };
        }
        // Return game data (without isLie)
        return {
            success: true,
            data: {
                id: game.id.toString(),
                name: game.name ?? '',
                status: game.status.toString(),
                maxPlayers: game.maxPlayers,
                currentPlayers: game.currentPlayers
            }
        };
    }
}
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/server/domain/entities/Answer.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Domain Entity: Answer
// Represents a participant's answer submission for a game
__turbopack_context__.s([
    "AnswerEntity",
    ()=>AnswerEntity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.js [app-rsc] (ecmascript) <locals>");
;
class AnswerEntity {
    props;
    constructor(props){
        this.props = props;
    }
    static create(input) {
        // Validate nickname length (1-20 characters)
        if (input.nickname.length < 1 || input.nickname.length > 20) {
            throw new Error('Nickname must be between 1 and 20 characters');
        }
        // Validate sessionId is not empty
        if (!input.sessionId || input.sessionId.trim() === '') {
            throw new Error('SessionId cannot be empty');
        }
        // Validate gameId is not empty
        if (!input.gameId || input.gameId.trim() === '') {
            throw new Error('GameId cannot be empty');
        }
        // Validate selections is not empty
        const selectionEntries = Object.entries(input.selections);
        if (selectionEntries.length === 0) {
            throw new Error('Selections cannot be empty');
        }
        // Convert selections object to Map
        const selectionsMap = new Map(selectionEntries);
        const now = new Date();
        return new AnswerEntity({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
            sessionId: input.sessionId,
            gameId: input.gameId,
            nickname: input.nickname,
            selections: selectionsMap,
            createdAt: now,
            updatedAt: now
        });
    }
    /**
   * Reconstruct an existing entity from persistence (preserves existing ID and timestamps)
   */ static reconstruct(props) {
        const selectionsMap = new Map(Object.entries(props.selections));
        return new AnswerEntity({
            id: props.id,
            sessionId: props.sessionId,
            gameId: props.gameId,
            nickname: props.nickname,
            selections: selectionsMap,
            createdAt: props.createdAt,
            updatedAt: props.updatedAt
        });
    }
    get id() {
        return this.props.id;
    }
    get sessionId() {
        return this.props.sessionId;
    }
    get gameId() {
        return this.props.gameId;
    }
    get nickname() {
        return this.props.nickname;
    }
    get selections() {
        return new Map(this.props.selections); // Return copy to prevent external mutation
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    toJSON() {
        return {
            id: this.props.id,
            sessionId: this.props.sessionId,
            gameId: this.props.gameId,
            nickname: this.props.nickname,
            selections: Object.fromEntries(this.props.selections),
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt
        };
    }
}
}),
"[project]/src/server/domain/entities/Participation.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Domain Entity: Participation
// Represents a participant's registration in a game
__turbopack_context__.s([
    "ParticipationEntity",
    ()=>ParticipationEntity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.js [app-rsc] (ecmascript) <locals>");
;
class ParticipationEntity {
    props;
    constructor(props){
        this.props = props;
    }
    static create(input) {
        // Validate nickname length (1-20 characters)
        if (input.nickname.length < 1 || input.nickname.length > 20) {
            throw new Error('Nickname must be between 1 and 20 characters');
        }
        // Validate sessionId is not empty
        if (!input.sessionId || input.sessionId.trim() === '') {
            throw new Error('SessionId cannot be empty');
        }
        // Validate gameId is not empty
        if (!input.gameId || input.gameId.trim() === '') {
            throw new Error('GameId cannot be empty');
        }
        return new ParticipationEntity({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
            sessionId: input.sessionId,
            gameId: input.gameId,
            nickname: input.nickname,
            joinedAt: new Date()
        });
    }
    get id() {
        return this.props.id;
    }
    get sessionId() {
        return this.props.sessionId;
    }
    get gameId() {
        return this.props.gameId;
    }
    get nickname() {
        return this.props.nickname;
    }
    get joinedAt() {
        return this.props.joinedAt;
    }
    toJSON() {
        return {
            id: this.props.id,
            sessionId: this.props.sessionId,
            gameId: this.props.gameId,
            nickname: this.props.nickname,
            joinedAt: this.props.joinedAt
        };
    }
}
}),
"[project]/src/server/application/use-cases/answers/SubmitAnswer.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Use Case: SubmitAnswer
// Handles answer submission with validation, participation tracking, and upsert
__turbopack_context__.s([
    "SubmitAnswer",
    ()=>SubmitAnswer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Answer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Answer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Participation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Participation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/GameId.ts [app-rsc] (ecmascript)");
;
;
;
;
class SubmitAnswer {
    answerRepository;
    participationRepository;
    gameRepository;
    constructor(answerRepository, participationRepository, gameRepository){
        this.answerRepository = answerRepository;
        this.participationRepository = participationRepository;
        this.gameRepository = gameRepository;
    }
    async execute(request) {
        // Validate selections
        if (!request.selections || Object.keys(request.selections).length === 0) {
            return {
                success: false,
                error: {
                    code: 'INVALID_SELECTIONS',
                    message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('validation.answer.noSelections')
                }
            };
        }
        // Fetch and validate game
        let gameId;
        try {
            gameId = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GameId"](request.gameId);
        } catch  {
            // Invalid UUID format - treat as not found
            return {
                success: false,
                error: {
                    code: 'GAME_NOT_FOUND',
                    message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('game.gameNotFound')
                }
            };
        }
        const game = await this.gameRepository.findById(gameId);
        if (!game) {
            return {
                success: false,
                error: {
                    code: 'GAME_NOT_FOUND',
                    message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('game.gameNotFound')
                }
            };
        }
        // Validate game status - must be in '出題中' (accepting responses)
        if (game.status.toString() === '準備中') {
            return {
                success: false,
                error: {
                    code: 'GAME_NOT_STARTED',
                    message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('status.labels.preparing')
                }
            };
        }
        if (game.status.toString() === '締切') {
            return {
                success: false,
                error: {
                    code: 'GAME_CLOSED',
                    message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('status.labels.closed')
                }
            };
        }
        // Validate that all presenters have selections
        const presenters = await this.gameRepository.findPresentersByGameId(request.gameId);
        const presenterIds = presenters.map((p)=>p.id);
        // Check if all presenters have a selection
        for (const presenterId of presenterIds){
            if (!request.selections[presenterId]) {
                return {
                    success: false,
                    error: {
                        code: 'INCOMPLETE_SELECTIONS',
                        message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('validation.answer.incomplete')
                    }
                };
            }
        }
        // Check if participant exists
        const participantExists = await this.participationRepository.exists(request.sessionId, request.gameId);
        // Check participant limit for new participants
        if (!participantExists) {
            const currentCount = await this.participationRepository.countByGameId(request.gameId);
            if (currentCount >= game.maxPlayers) {
                return {
                    success: false,
                    error: {
                        code: 'PARTICIPANT_LIMIT_REACHED',
                        message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('game.playerLimit')
                    }
                };
            }
            // Create participation record
            const participation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Participation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParticipationEntity"].create({
                sessionId: request.sessionId,
                gameId: request.gameId,
                nickname: request.nickname
            });
            await this.participationRepository.create(participation);
            // Update game's current player count
            game.addPlayer();
            await this.gameRepository.update(game);
        }
        // Check if answer already exists
        const existingAnswer = await this.answerRepository.findBySessionAndGame(request.sessionId, request.gameId);
        let answer;
        if (existingAnswer) {
            // Update existing answer (preserves ID)
            answer = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Answer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnswerEntity"].reconstruct({
                id: existingAnswer.id,
                sessionId: request.sessionId,
                gameId: request.gameId,
                nickname: request.nickname,
                selections: request.selections,
                createdAt: existingAnswer.createdAt,
                updatedAt: new Date()
            });
        } else {
            // Create new answer (generates new ID)
            answer = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Answer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnswerEntity"].create({
                sessionId: request.sessionId,
                gameId: request.gameId,
                nickname: request.nickname,
                selections: request.selections
            });
        }
        await this.answerRepository.upsert(answer);
        return {
            success: true,
            data: {
                answerId: answer.id,
                message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('answer.answerSubmitted')
            }
        };
    }
}
}),
"[project]/src/lib/constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Application constants
// Centralized configuration values for session management
/**
 * Cookie names used for session management
 */ __turbopack_context__.s([
    "COOKIE_CONFIG",
    ()=>COOKIE_CONFIG,
    "COOKIE_NAMES",
    ()=>COOKIE_NAMES,
    "VALIDATION",
    ()=>VALIDATION
]);
const COOKIE_NAMES = {
    /** Session ID cookie (HTTP-only, secure) */ SESSION_ID: 'sessionId',
    /** Nickname cookie (readable by client) */ NICKNAME: 'nickname'
};
const COOKIE_CONFIG = {
    /** Cookie max age in seconds (30 days) */ MAX_AGE: 30 * 24 * 60 * 60,
    /** Cookie path */ PATH: '/',
    /** Same-site policy */ SAME_SITE: 'lax'
};
const VALIDATION = {
    /** Maximum nickname length */ NICKNAME_MAX_LENGTH: 50,
    /** Minimum nickname length */ NICKNAME_MIN_LENGTH: 1,
    /** Session ID length (nanoid default) */ SESSION_ID_LENGTH: 21
};
}),
"[project]/src/server/domain/value-objects/SessionId.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// SessionId value object
// Encapsulates session identifier with validation
__turbopack_context__.s([
    "InvalidSessionIdError",
    ()=>InvalidSessionIdError,
    "SessionId",
    ()=>SessionId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
;
class InvalidSessionIdError extends Error {
    constructor(value){
        super(`Invalid session ID format: ${value}`);
        this.name = 'InvalidSessionIdError';
    }
}
class SessionId {
    _value;
    /**
   * Creates a new SessionId
   * @param value The session ID string (must be 21-char nanoid)
   * @throws InvalidSessionIdError if format is invalid
   */ constructor(value){
        if (!this.validateFormat(value)) {
            throw new InvalidSessionIdError(value);
        }
        this._value = value;
    }
    /**
   * Gets the session ID value
   */ get value() {
        return this._value;
    }
    /**
   * Validates the session ID format
   * @param value The value to validate
   * @returns true if valid nanoid format
   */ validateFormat(value) {
        // nanoid format: 21 characters, A-Z, a-z, 0-9, underscore, hyphen
        const nanoidRegex = /^[A-Za-z0-9_-]{21}$/;
        return nanoidRegex.test(value) && value.length === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VALIDATION"].SESSION_ID_LENGTH;
    }
    /**
   * Checks if this SessionId is valid
   * @returns true if valid
   */ isValid() {
        return this.validateFormat(this._value);
    }
    /**
   * Checks equality with another SessionId
   * @param other The SessionId to compare with
   * @returns true if values are equal
   */ equals(other) {
        return this._value === other._value;
    }
    /**
   * Returns string representation
   */ toString() {
        return this._value;
    }
}
}),
"[project]/src/server/application/use-cases/session/ValidateSession.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ValidateSession use case
// Business logic for validating an existing session
__turbopack_context__.s([
    "ValidateSession",
    ()=>ValidateSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$SessionId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/SessionId.ts [app-rsc] (ecmascript)");
;
class ValidateSession {
    sessionRepository;
    constructor(sessionRepository){
        this.sessionRepository = sessionRepository;
    }
    /**
   * Executes the use case to validate a session
   * @param sessionIdValue The session ID string to validate
   * @returns SessionDto if session exists, null otherwise
   */ async execute(sessionIdValue) {
        try {
            // Validate session ID format
            const sessionId = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$SessionId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SessionId"](sessionIdValue);
            // Find session in repository
            const session = await this.sessionRepository.findById(sessionId);
            if (!session) {
                return null;
            }
            // Return DTO
            return this.toDto(session);
        } catch  {
            // Invalid session ID format
            return null;
        }
    }
    /**
   * Converts Session entity to SessionDto
   * @param session The session entity
   * @returns SessionDto for presentation layer
   */ toDto(session) {
        return {
            sessionId: session.sessionId.value,
            nickname: session.nickname?.value ?? null,
            createdAt: session.createdAt.toISOString()
        };
    }
}
}),
"[project]/src/server/domain/schemas/answerSchemas.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Zod Schemas: Answer Validation
// Runtime validation schemas with error codes for i18n translation via translateZodError()
__turbopack_context__.s([
    "SubmitAnswerSchema",
    ()=>SubmitAnswerSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const SubmitAnswerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    gameId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'REQUIRED'),
    selections: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'REQUIRED'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'REQUIRED')).refine((selections)=>Object.keys(selections).length > 0, 'ANSWER_NO_SELECTIONS')
});
}),
"[project]/src/lib/cookies.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Cookie helper functions
// Utilities for working with cookies in Next.js
__turbopack_context__.s([
    "deleteCookie",
    ()=>deleteCookie,
    "getCookie",
    ()=>getCookie,
    "setCookie",
    ()=>setCookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
;
;
async function getCookie(name) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const cookie = cookieStore.get(name);
    return cookie?.value ?? null;
}
async function setCookie(name, value, options = {}) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set(name, value, {
        httpOnly: options.httpOnly ?? false,
        secure: options.secure ?? ("TURBOPACK compile-time value", "development") === 'production',
        sameSite: options.sameSite ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_CONFIG"].SAME_SITE,
        maxAge: options.maxAge ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_CONFIG"].MAX_AGE,
        path: options.path ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_CONFIG"].PATH
    });
}
async function deleteCookie(name) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete(name);
}
}),
"[project]/src/server/infrastructure/services/CookieSessionService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Cookie Session Service Implementation
// Infrastructure layer implementation of ISessionService using Next.js cookies
__turbopack_context__.s([
    "CookieSessionService",
    ()=>CookieSessionService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cookies.ts [app-rsc] (ecmascript)");
;
;
class CookieSessionService {
    /**
   * Get current session ID from cookies
   * @returns Session ID if exists, null if no session cookie
   */ async getCurrentSessionId() {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_NAMES"].SESSION_ID);
    }
    /**
   * Validate current session from cookies
   * @returns Validation result with session information
   */ async validateCurrentSession() {
        const sessionId = await this.getCurrentSessionId();
        return {
            valid: sessionId !== null,
            sessionId: sessionId
        };
    }
    /**
   * Require valid session - throws if no session
   * @returns Session ID
   * @throws Error if no valid session found
   */ async requireCurrentSession() {
        const sessionId = await this.getCurrentSessionId();
        if (!sessionId) {
            throw new Error('セッションが見つかりません。ログインし直してください。');
        }
        return sessionId;
    }
}
}),
"[project]/src/server/infrastructure/di/SessionServiceContainer.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Session Service Dependency Injection Container
// Provides session service instances with singleton pattern
__turbopack_context__.s([
    "SessionServiceContainer",
    ()=>SessionServiceContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$services$2f$CookieSessionService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/services/CookieSessionService.ts [app-rsc] (ecmascript)");
;
class SessionServiceContainer {
    static sessionService = null;
    /**
   * Gets session service instance (singleton)
   * Currently only supports Cookie-based implementation
   * Can be extended for other session storage mechanisms (JWT, Redis, etc.)
   */ static getSessionService() {
        if (!SessionServiceContainer.sessionService) {
            SessionServiceContainer.sessionService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$services$2f$CookieSessionService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CookieSessionService"]();
        }
        return SessionServiceContainer.sessionService;
    }
    /**
   * Reset singleton instance (for testing)
   * @internal
   */ static resetForTesting() {
        SessionServiceContainer.sessionService = null;
    }
    /**
   * Set custom session service (for testing)
   * @internal
   */ static setSessionService(service) {
        SessionServiceContainer.sessionService = service;
    }
}
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/@prisma/client/runtime/library [external] (@prisma/client/runtime/library, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@prisma/client/runtime/library");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/generated/prisma/internal/class.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * Please import the `PrismaClient` class from the `client.ts` file instead.
 */ __turbopack_context__.s([
    "getPrismaClientClass",
    ()=>getPrismaClientClass
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@prisma/client/runtime/library [external] (@prisma/client/runtime/library, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const config = {
    "generator": {
        "name": "client",
        "provider": {
            "fromEnvVar": null,
            "value": "prisma-client"
        },
        "output": {
            "value": "/Users/ookura.keisuke/repos/UsoHontoGame/src/generated/prisma",
            "fromEnvVar": null
        },
        "config": {
            "engineType": "library"
        },
        "binaryTargets": [
            {
                "fromEnvVar": null,
                "value": "darwin-arm64",
                "native": true
            }
        ],
        "previewFeatures": [],
        "sourceFilePath": "/Users/ookura.keisuke/repos/UsoHontoGame/prisma/schema.prisma",
        "isCustomOutput": true
    },
    "relativePath": "../../../prisma",
    "clientVersion": "6.19.0",
    "engineVersion": "2ba551f319ab1df4bc874a89965d8b3641056773",
    "datasourceNames": [
        "db"
    ],
    "activeProvider": "sqlite",
    "inlineDatasources": {
        "db": {
            "url": {
                "fromEnvVar": "DATABASE_URL",
                "value": null
            }
        }
    },
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"sqlite\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// Game Preparation Feature Models (002-game-preparation)\n\nmodel Game {\n  id             String          @id @default(uuid())\n  name           String? // Game display name (optional, max 100 chars, defaults to UUID display)\n  creatorId      String // Session ID of the moderator\n  maxPlayers     Int // Maximum number of players (1-100)\n  currentPlayers Int             @default(0) // Current number of registered players\n  status         String          @default(\"準備中\") // GameStatus: 準備中, 出題中, 締切\n  presenters     Presenter[] // 0-10 presenters\n  answers        Answer[] // Answer submissions (001-lie-detection-answers)\n  participations Participation[] // Participation tracking (001-lie-detection-answers)\n  createdAt      DateTime        @default(now())\n  updatedAt      DateTime        @updatedAt\n\n  @@index([creatorId])\n  @@index([status])\n}\n\nmodel Presenter {\n  id        String    @id @default(uuid())\n  gameId    String // Foreign key to Game\n  nickname  String // Session nickname (FR-003)\n  episodes  Episode[] // Exactly 3 episodes required (FR-004)\n  createdAt DateTime  @default(now())\n\n  game Game @relation(fields: [gameId], references: [id], onDelete: Cascade)\n\n  @@index([gameId])\n}\n\nmodel Episode {\n  id          String   @id @default(uuid())\n  presenterId String // Foreign key to Presenter\n  text        String // 1-1000 characters (Assumption 3, critical requirement)\n  isLie       Boolean // Truth/lie marker - confidential (FR-006)\n  createdAt   DateTime @default(now())\n\n  presenter Presenter @relation(fields: [presenterId], references: [id], onDelete: Cascade)\n\n  @@index([presenterId])\n}\n\n// Answer Submission Feature Models (001-lie-detection-answers)\n\nmodel Answer {\n  id         String   @id @default(uuid())\n  sessionId  String // Session cookie identifier\n  gameId     String // Foreign key to Game\n  nickname   String // Participant display name from session\n  selections Json // Map of presenterId to episodeId { \"presenterId\": \"episodeId\" }\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  game Game @relation(fields: [gameId], references: [id], onDelete: Cascade)\n\n  @@unique([sessionId, gameId]) // One answer per session per game\n  @@index([gameId])\n  @@index([sessionId])\n}\n\nmodel Participation {\n  id        String   @id @default(uuid())\n  sessionId String // Session cookie identifier\n  gameId    String // Foreign key to Game\n  nickname  String // Participant display name\n  joinedAt  DateTime @default(now())\n\n  game Game @relation(fields: [gameId], references: [id], onDelete: Cascade)\n\n  @@unique([sessionId, gameId]) // One participation record per session per game\n  @@index([gameId])\n}\n",
    "inlineSchemaHash": "310c232d2a2b6c29066cb8c0a1ab8e0882556f25b839da8fcd1c68f12ec7c26b",
    "copyEngine": true,
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "dirname": ""
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Game\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxPlayers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentPlayers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"準備中\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"presenters\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Presenter\",\"nativeType\":null,\"relationName\":\"GameToPresenter\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"answers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Answer\",\"nativeType\":null,\"relationName\":\"AnswerToGame\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"participations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Participation\",\"nativeType\":null,\"relationName\":\"GameToParticipation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Presenter\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"episodes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Episode\",\"nativeType\":null,\"relationName\":\"EpisodeToPresenter\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"nativeType\":null,\"relationName\":\"GameToPresenter\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Episode\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"presenterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isLie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"presenter\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Presenter\",\"nativeType\":null,\"relationName\":\"EpisodeToPresenter\",\"relationFromFields\":[\"presenterId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Answer\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selections\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"nativeType\":null,\"relationName\":\"AnswerToGame\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"sessionId\",\"gameId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"sessionId\",\"gameId\"]}],\"isGenerated\":false},\"Participation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"joinedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"nativeType\":null,\"relationName\":\"GameToParticipation\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"sessionId\",\"gameId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"sessionId\",\"gameId\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}");
config.engineWasm = undefined;
config.compilerWasm = undefined;
function getPrismaClientClass(dirname) {
    config.dirname = dirname;
    return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["getPrismaClient"](config);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/generated/prisma/internal/prismaNamespace.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * All exports from this file are wrapped under a `Prisma` namespace object in the client.ts file.
 * While this enables partial backward compatibility, it is not part of the stable public API.
 *
 * If you are looking for your Models, Enums, and Input Types, please import them from the respective
 * model files in the `model` directory!
 */ __turbopack_context__.s([
    "AnswerScalarFieldEnum",
    ()=>AnswerScalarFieldEnum,
    "AnyNull",
    ()=>AnyNull,
    "DbNull",
    ()=>DbNull,
    "Decimal",
    ()=>Decimal,
    "EpisodeScalarFieldEnum",
    ()=>EpisodeScalarFieldEnum,
    "GameScalarFieldEnum",
    ()=>GameScalarFieldEnum,
    "JsonNull",
    ()=>JsonNull,
    "JsonNullValueFilter",
    ()=>JsonNullValueFilter,
    "JsonNullValueInput",
    ()=>JsonNullValueInput,
    "ModelName",
    ()=>ModelName,
    "NullTypes",
    ()=>NullTypes,
    "NullsOrder",
    ()=>NullsOrder,
    "ParticipationScalarFieldEnum",
    ()=>ParticipationScalarFieldEnum,
    "PresenterScalarFieldEnum",
    ()=>PresenterScalarFieldEnum,
    "PrismaClientInitializationError",
    ()=>PrismaClientInitializationError,
    "PrismaClientKnownRequestError",
    ()=>PrismaClientKnownRequestError,
    "PrismaClientRustPanicError",
    ()=>PrismaClientRustPanicError,
    "PrismaClientUnknownRequestError",
    ()=>PrismaClientUnknownRequestError,
    "PrismaClientValidationError",
    ()=>PrismaClientValidationError,
    "QueryMode",
    ()=>QueryMode,
    "SortOrder",
    ()=>SortOrder,
    "Sql",
    ()=>Sql,
    "TransactionIsolationLevel",
    ()=>TransactionIsolationLevel,
    "defineExtension",
    ()=>defineExtension,
    "empty",
    ()=>empty,
    "getExtensionContext",
    ()=>getExtensionContext,
    "join",
    ()=>join,
    "prismaVersion",
    ()=>prismaVersion,
    "raw",
    ()=>raw,
    "sql",
    ()=>sql
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@prisma/client/runtime/library [external] (@prisma/client/runtime/library, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const PrismaClientKnownRequestError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["PrismaClientKnownRequestError"];
const PrismaClientUnknownRequestError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["PrismaClientUnknownRequestError"];
const PrismaClientRustPanicError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["PrismaClientRustPanicError"];
const PrismaClientInitializationError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["PrismaClientInitializationError"];
const PrismaClientValidationError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["PrismaClientValidationError"];
const sql = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["sqltag"];
const empty = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["empty"];
const join = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["join"];
const raw = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["raw"];
const Sql = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["Sql"];
const Decimal = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["Decimal"];
const getExtensionContext = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["Extensions"].getExtensionContext;
const prismaVersion = {
    client: "6.19.0",
    engine: "2ba551f319ab1df4bc874a89965d8b3641056773"
};
const NullTypes = {
    DbNull: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["objectEnumValues"].classes.DbNull,
    JsonNull: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["objectEnumValues"].classes.JsonNull,
    AnyNull: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["objectEnumValues"].classes.AnyNull
};
const DbNull = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["objectEnumValues"].instances.DbNull;
const JsonNull = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["objectEnumValues"].instances.JsonNull;
const AnyNull = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["objectEnumValues"].instances.AnyNull;
const ModelName = {
    Game: 'Game',
    Presenter: 'Presenter',
    Episode: 'Episode',
    Answer: 'Answer',
    Participation: 'Participation'
};
const TransactionIsolationLevel = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["makeStrictEnum"]({
    Serializable: 'Serializable'
});
const GameScalarFieldEnum = {
    id: 'id',
    name: 'name',
    creatorId: 'creatorId',
    maxPlayers: 'maxPlayers',
    currentPlayers: 'currentPlayers',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const PresenterScalarFieldEnum = {
    id: 'id',
    gameId: 'gameId',
    nickname: 'nickname',
    createdAt: 'createdAt'
};
const EpisodeScalarFieldEnum = {
    id: 'id',
    presenterId: 'presenterId',
    text: 'text',
    isLie: 'isLie',
    createdAt: 'createdAt'
};
const AnswerScalarFieldEnum = {
    id: 'id',
    sessionId: 'sessionId',
    gameId: 'gameId',
    nickname: 'nickname',
    selections: 'selections',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const ParticipationScalarFieldEnum = {
    id: 'id',
    sessionId: 'sessionId',
    gameId: 'gameId',
    nickname: 'nickname',
    joinedAt: 'joinedAt'
};
const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
const JsonNullValueInput = {
    JsonNull: JsonNull
};
const NullsOrder = {
    first: 'first',
    last: 'last'
};
const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
const defineExtension = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$library__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$library$2c$__esm_import$29$__["Extensions"].defineExtension;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
* This file exports all enum related types from the schema.
*
* 🟢 You can import this file directly.
*/ // This file is empty because there are no enums in the schema.
__turbopack_context__.s([]);
;
}),
"[project]/src/generated/prisma/client.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 * If you're looking for something you can import in the client-side of your application, please refer to the `browser.ts` file instead.
 * 
 * 🟢 You can import this file directly.
 */ __turbopack_context__.s([
    "PrismaClient",
    ()=>PrismaClient
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$class$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/internal/class.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$prismaNamespace$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/internal/prismaNamespace.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$class$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$prismaNamespace$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$class$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$prismaNamespace$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("src/generated/prisma/client.ts")}`;
    }
};
;
;
;
globalThis['__dirname'] = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["dirname"]((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url));
;
;
;
;
const PrismaClient = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$class$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPrismaClientClass"](("TURBOPACK compile-time value", "/ROOT/src/generated/prisma"));
;
// file annotations for bundling tools to include these files
__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"](("TURBOPACK compile-time value", "/ROOT/src/generated/prisma"), "libquery_engine-darwin-arm64.dylib.node");
__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"](__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["cwd"](), "src/generated/prisma/libquery_engine-darwin-arm64.dylib.node");
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/server/infrastructure/repositories/PrismaAnswerRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Infrastructure: Prisma Answer Repository
// Implements IAnswerRepository interface using Prisma ORM
__turbopack_context__.s([
    "PrismaAnswerRepository",
    ()=>PrismaAnswerRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Answer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Answer.ts [app-rsc] (ecmascript)");
;
class PrismaAnswerRepository {
    prisma;
    constructor(prisma){
        this.prisma = prisma;
    }
    async upsert(answer) {
        const json = answer.toJSON();
        await this.prisma.answer.upsert({
            where: {
                sessionId_gameId: {
                    sessionId: json.sessionId,
                    gameId: json.gameId
                }
            },
            update: {
                nickname: json.nickname,
                selections: json.selections,
                updatedAt: json.updatedAt
            },
            create: {
                id: json.id,
                sessionId: json.sessionId,
                gameId: json.gameId,
                nickname: json.nickname,
                selections: json.selections,
                createdAt: json.createdAt,
                updatedAt: json.updatedAt
            }
        });
    }
    async findBySessionAndGame(sessionId, gameId) {
        const answer = await this.prisma.answer.findUnique({
            where: {
                sessionId_gameId: {
                    sessionId,
                    gameId
                }
            }
        });
        if (!answer) {
            return null;
        }
        return this.toDomain(answer);
    }
    async findByGameId(gameId) {
        const answers = await this.prisma.answer.findMany({
            where: {
                gameId
            }
        });
        return answers.map((answer)=>this.toDomain(answer));
    }
    async delete(sessionId, gameId) {
        await this.prisma.answer.deleteMany({
            where: {
                sessionId,
                gameId
            }
        });
    }
    async findSelectionsByAnswer(answerId) {
        const answer = await this.prisma.answer.findUnique({
            where: {
                id: answerId
            }
        });
        if (!answer) {
            return [];
        }
        // Parse selections from JSON
        const selections = typeof answer.selections === 'string' ? JSON.parse(answer.selections) : answer.selections;
        // Convert selections object to array of {presenterId, episodeId}
        return Object.entries(selections).map(([presenterId, episodeId])=>({
                presenterId,
                episodeId
            }));
    }
    toDomain(answer) {
        // Parse selections from JSON (Prisma stores as JSON, need to convert to object)
        const selections = typeof answer.selections === 'string' ? JSON.parse(answer.selections) : answer.selections;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Answer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnswerEntity"].reconstruct({
            id: answer.id,
            sessionId: answer.sessionId,
            gameId: answer.gameId,
            nickname: answer.nickname,
            selections: selections,
            createdAt: answer.createdAt,
            updatedAt: answer.updatedAt
        });
    }
}
}),
"[project]/src/server/domain/errors/ValidationError.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Domain Validation Error
// Feature: 002-game-preparation
// Thrown when domain validation rules are violated
__turbopack_context__.s([
    "ValidationError",
    ()=>ValidationError
]);
class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ValidationError';
        // Maintains proper stack trace for where error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ValidationError);
        }
    }
}
}),
"[project]/src/server/domain/entities/Episode.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Episode Entity
// Feature: 002-game-preparation
// Encapsulates episode data with validation (1-1000 chars, isLie boolean)
__turbopack_context__.s([
    "Episode",
    ()=>Episode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/errors/ValidationError.ts [app-rsc] (ecmascript)");
;
class Episode {
    _id;
    _presenterId;
    _text;
    _isLie;
    _createdAt;
    constructor(props){
        this._id = props.id;
        this._presenterId = props.presenterId;
        this._text = props.text;
        this._isLie = props.isLie;
        this._createdAt = props.createdAt;
    }
    /**
   * Creates a new Episode with validation
   * @param props Episode properties
   * @throws ValidationError if text length is invalid (must be 1-1000 characters)
   */ static create(props) {
        // Validate text length (Assumption 3: 1-1000 characters)
        if (props.text.trim().length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"]('Episode text cannot be empty');
        }
        if (props.text.length > 1000) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"]('Episode text cannot exceed 1000 characters');
        }
        return new Episode(props);
    }
    /**
   * Gets the episode ID
   */ get id() {
        return this._id;
    }
    /**
   * Gets the presenter ID who created this episode
   */ get presenterId() {
        return this._presenterId;
    }
    /**
   * Gets the episode text content
   */ get text() {
        return this._text;
    }
    /**
   * Gets the truth/lie marker (FR-006 - confidential)
   */ get isLie() {
        return this._isLie;
    }
    /**
   * Gets the creation timestamp
   */ get createdAt() {
        return this._createdAt;
    }
    /**
   * Checks if this episode is the truth
   */ isTruth() {
        return !this._isLie;
    }
    /**
   * Checks equality with another Episode
   * @param other The Episode to compare with
   */ equals(other) {
        return this._id === other._id;
    }
    /**
   * Converts episode to plain object for persistence
   */ toObject() {
        return {
            id: this._id,
            presenterId: this._presenterId,
            text: this._text,
            isLie: this._isLie,
            createdAt: this._createdAt
        };
    }
}
}),
"[project]/src/server/domain/errors/InvalidStatusTransitionError.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Invalid Status Transition Error
// Feature: 002-game-preparation
// Thrown when attempting invalid game status transitions (準備中 → 出題中 → 締切)
__turbopack_context__.s([
    "InvalidStatusTransitionError",
    ()=>InvalidStatusTransitionError
]);
class InvalidStatusTransitionError extends Error {
    currentStatus;
    targetStatus;
    constructor(currentStatus, targetStatus, message){
        super(message || `Cannot transition from ${currentStatus} to ${targetStatus}`), this.currentStatus = currentStatus, this.targetStatus = targetStatus;
        this.name = 'InvalidStatusTransitionError';
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidStatusTransitionError);
        }
    }
}
}),
"[project]/src/server/domain/value-objects/GameStatus.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// GameStatus value object
// Encapsulates game status with type safety
__turbopack_context__.s([
    "GameStatus",
    ()=>GameStatus,
    "InvalidGameStatusError",
    ()=>InvalidGameStatusError
]);
class InvalidGameStatusError extends Error {
    constructor(value){
        super(`Invalid game status: ${value}`);
        this.name = 'InvalidGameStatusError';
    }
}
class GameStatus {
    _value;
    /**
   * Creates a new GameStatus
   * @param value The status value
   * @throws InvalidGameStatusError if value is invalid
   */ constructor(value){
        if (!this.isValid(value)) {
            throw new InvalidGameStatusError(value);
        }
        this._value = value;
    }
    /**
   * Gets the status value
   */ get value() {
        return this._value;
    }
    /**
   * Validates the status value
   * @param value The value to validate
   * @returns true if valid status
   */ isValid(value) {
        return [
            '準備中',
            '出題中',
            '締切'
        ].includes(value);
    }
    /**
   * Checks if game is accepting responses
   * @returns true if status is '出題中'
   */ isAcceptingResponses() {
        return this._value === '出題中';
    }
    /**
   * Checks if game is in preparation
   * @returns true if status is '準備中'
   */ isPreparation() {
        return this._value === '準備中';
    }
    /**
   * Checks if game is closed
   * @returns true if status is '締切'
   */ isClosed() {
        return this._value === '締切';
    }
    /**
   * Checks if game can be edited (FR-014)
   * @returns true if status is '準備中'
   */ canEdit() {
        return this._value === '準備中';
    }
    /**
   * Checks equality with another GameStatus
   * @param other The GameStatus to compare with
   * @returns true if values are equal
   */ equals(other) {
        return this._value === other._value;
    }
    /**
   * Static factory for preparation status
   */ static preparation() {
        return new GameStatus('準備中');
    }
    /**
   * Static factory for accepting responses status
   */ static acceptingResponses() {
        return new GameStatus('出題中');
    }
    /**
   * Static factory for closed status
   */ static closed() {
        return new GameStatus('締切');
    }
    /**
   * Returns string representation
   */ toString() {
        return this._value;
    }
}
}),
"[project]/src/server/domain/entities/Game.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Game entity
// Feature: 002-game-preparation
// Represents a game instance with status transitions and presenter management
__turbopack_context__.s([
    "EmptyGameNameError",
    ()=>EmptyGameNameError,
    "Game",
    ()=>Game,
    "InvalidPlayerCountError",
    ()=>InvalidPlayerCountError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$InvalidStatusTransitionError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/errors/InvalidStatusTransitionError.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/errors/ValidationError.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/GameStatus.ts [app-rsc] (ecmascript)");
;
;
;
class EmptyGameNameError extends Error {
    constructor(){
        super('Game name cannot be empty');
        this.name = 'EmptyGameNameError';
    }
}
class InvalidPlayerCountError extends Error {
    constructor(message){
        super(message);
        this.name = 'InvalidPlayerCountError';
    }
}
class Game {
    _id;
    _name;
    _status;
    _maxPlayers;
    _currentPlayers;
    _createdAt;
    _updatedAt;
    _creatorId;
    /**
   * Creates a new Game
   * @param id Unique game identifier
   * @param name Game display name (optional, max 100 chars, defaults to UUID for display)
   * @param status Current game status
   * @param maxPlayers Maximum number of players
   * @param currentPlayers Current number of registered players
   * @param createdAt When the game was created
   * @param updatedAt When the game was last updated
   * @param creatorId Session ID of the moderator who created the game
   */ constructor(id, name, status, maxPlayers, currentPlayers, createdAt, updatedAt, creatorId = ''){
        this._id = id;
        this._name = name;
        this._status = status;
        this._maxPlayers = maxPlayers;
        this._currentPlayers = currentPlayers;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
        this._creatorId = creatorId;
        this.validate();
    }
    /**
   * Gets the game ID
   */ get id() {
        return this._id;
    }
    /**
   * Gets the game name (optional)
   */ get name() {
        return this._name;
    }
    /**
   * Gets the display name (returns ID if name is null)
   */ get displayName() {
        return this._name || this._id.toString();
    }
    /**
   * Gets the game status
   */ get status() {
        return this._status;
    }
    /**
   * Gets the maximum number of players
   */ get maxPlayers() {
        return this._maxPlayers;
    }
    /**
   * Gets the current number of players
   */ get currentPlayers() {
        return this._currentPlayers;
    }
    /**
   * Gets the creation timestamp
   */ get createdAt() {
        return this._createdAt;
    }
    /**
   * Gets the last update timestamp
   */ get updatedAt() {
        return this._updatedAt;
    }
    /**
   * Gets the creator/moderator session ID
   */ get creatorId() {
        return this._creatorId;
    }
    /**
   * Gets the number of available slots (derived property)
   */ get availableSlots() {
        return this._maxPlayers - this._currentPlayers;
    }
    /**
   * Checks if game is accepting responses (derived property)
   */ get isAcceptingResponses() {
        return this._status.isAcceptingResponses();
    }
    /**
   * Validates game invariants
   * @throws EmptyGameNameError if name is provided but empty
   * @throws InvalidPlayerCountError if player counts are invalid
   */ validate() {
        // Validate name if provided (max 100 chars as per spec)
        if (this._name !== null) {
            if (this._name.trim() === '') {
                throw new EmptyGameNameError();
            }
            if (this._name.length > 100) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"]('Game name must be 100 characters or less');
            }
        }
        if (this._maxPlayers <= 0) {
            throw new InvalidPlayerCountError('Max players must be positive');
        }
        if (this._currentPlayers < 0) {
            throw new InvalidPlayerCountError('Current players cannot be negative');
        }
        if (this._currentPlayers > this._maxPlayers) {
            throw new InvalidPlayerCountError('Current players cannot exceed max players');
        }
    }
    /**
   * Updates the game status
   * @param status New status
   */ setStatus(status) {
        this._status = status;
        this._updatedAt = new Date();
    }
    /**
   * Increments the current player count
   */ addPlayer() {
        if (this._currentPlayers >= this._maxPlayers) {
            throw new InvalidPlayerCountError('Game is full');
        }
        this._currentPlayers++;
        this._updatedAt = new Date();
    }
    /**
   * Decrements the current player count
   */ removePlayer() {
        if (this._currentPlayers <= 0) {
            throw new InvalidPlayerCountError('No players to remove');
        }
        this._currentPlayers--;
        this._updatedAt = new Date();
    }
    /**
   * Updates the maximum player limit
   * Can only be done when in preparation status
   * New limit must be >= current players
   * @param newLimit New maximum player limit (1-100)
   * @throws ValidationError if limit is invalid or less than current players
   */ updatePlayerLimit(newLimit) {
        // Validate range
        if (newLimit < 1 || newLimit > 100) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"]('Player limit must be between 1 and 100');
        }
        // New limit must be >= current players
        if (newLimit < this._currentPlayers) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"](`New player limit (${newLimit}) cannot be less than current players (${this._currentPlayers})`);
        }
        this._maxPlayers = newLimit;
        this._updatedAt = new Date();
    }
    /**
   * Transitions game from 準備中 to 出題中 (FR-001)
   * @throws InvalidStatusTransitionError if not in 準備中 status
   */ startAccepting() {
        if (!this._status.isPreparation()) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$InvalidStatusTransitionError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidStatusTransitionError"](this._status.toString(), '出題中', 'Can only start accepting from 準備中 status');
        }
        this._status = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GameStatus"].acceptingResponses();
        this._updatedAt = new Date();
    }
    /**
   * Transitions game from 出題中 to 締切 (FR-001)
   * @throws InvalidStatusTransitionError if not in 出題中 status
   */ close() {
        if (!this._status.isAcceptingResponses()) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$InvalidStatusTransitionError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidStatusTransitionError"](this._status.toString(), '締切', 'Can only close from 出題中 status');
        }
        this._status = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GameStatus"].closed();
        this._updatedAt = new Date();
    }
    /**
   * Checks if game can be edited (FR-014)
   * Only games in 準備中 status can be edited
   */ canEdit() {
        return this._status.canEdit();
    }
}
}),
"[project]/src/server/domain/entities/Presenter.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Presenter Entity
// Feature: 002-game-preparation
// Encapsulates presenter data with episode validation (exactly 3 episodes required)
__turbopack_context__.s([
    "Presenter",
    ()=>Presenter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/errors/ValidationError.ts [app-rsc] (ecmascript)");
;
class Presenter {
    _id;
    _gameId;
    _nickname;
    _episodes;
    _createdAt;
    constructor(props){
        this._id = props.id;
        this._gameId = props.gameId;
        this._nickname = props.nickname;
        this._episodes = Object.freeze([
            ...props.episodes
        ]);
        this._createdAt = props.createdAt;
    }
    /**
   * Creates a new Presenter with validation
   * @param props Presenter properties
   * @throws ValidationError if nickname is empty or episodes don't meet requirements
   */ static create(props) {
        // Validate nickname
        if (props.nickname.trim().length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"]('Presenter nickname cannot be empty');
        }
        // Validate episode count (FR-004: exactly 3 episodes required)
        if (props.episodes.length !== 3) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"](`Presenter must have exactly 3 episodes (has ${props.episodes.length})`);
        }
        // Validate exactly one lie among episodes
        const lieCount = props.episodes.filter((ep)=>ep.isLie).length;
        if (lieCount !== 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"](`Presenter must have exactly 1 lie episode (has ${lieCount})`);
        }
        return new Presenter(props);
    }
    /**
   * Creates an incomplete Presenter without episode validation
   * Used during the initial presenter creation phase before episodes are added
   * @param props Presenter properties (episodes can be 0-2 initially)
   * @throws ValidationError if nickname is empty
   */ static createIncomplete(props) {
        // Validate nickname
        if (props.nickname.trim().length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"]('Presenter nickname cannot be empty');
        }
        // Allow any number of episodes (0-3) for incomplete presenters
        if (props.episodes.length > 3) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"](`Presenter cannot have more than 3 episodes (has ${props.episodes.length})`);
        }
        return new Presenter(props);
    }
    /**
   * Gets the presenter ID
   */ get id() {
        return this._id;
    }
    /**
   * Gets the game ID this presenter belongs to
   */ get gameId() {
        return this._gameId;
    }
    /**
   * Gets the presenter's nickname from session
   */ get nickname() {
        return this._nickname;
    }
    /**
   * Gets all episodes (read-only)
   */ get episodes() {
        return this._episodes;
    }
    /**
   * Gets the creation timestamp
   */ get createdAt() {
        return this._createdAt;
    }
    /**
   * Checks if presenter has completed all required episodes
   * Required: exactly 3 episodes with exactly 1 lie
   */ hasCompleteEpisodes() {
        if (this._episodes.length !== 3) {
            return false;
        }
        const lieCount = this._episodes.filter((ep)=>ep.isLie).length;
        return lieCount === 1;
    }
    /**
   * Gets the lie episode (confidential - FR-006)
   * @throws Error if presenter doesn't have complete episodes
   */ getLieEpisode() {
        if (!this.hasCompleteEpisodes()) {
            throw new Error('Presenter does not have complete episodes');
        }
        const lie = this._episodes.find((ep)=>ep.isLie);
        if (!lie) {
            throw new Error('Lie episode not found');
        }
        return lie;
    }
    /**
   * Gets the truth episodes
   */ getTruthEpisodes() {
        return this._episodes.filter((ep)=>!ep.isLie);
    }
    /**
   * Checks equality with another Presenter
   * @param other The Presenter to compare with
   */ equals(other) {
        return this._id === other._id;
    }
    /**
   * Converts presenter to plain object for persistence
   */ toObject() {
        return {
            id: this._id,
            gameId: this._gameId,
            nickname: this._nickname,
            episodes: [
                ...this._episodes
            ],
            createdAt: this._createdAt
        };
    }
}
}),
"[project]/src/server/infrastructure/repositories/PrismaGameRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// PrismaGameRepository
// Feature: 002-game-preparation
// Implementation of IGameRepository using Prisma ORM for SQLite persistence
__turbopack_context__.s([
    "PrismaGameRepository",
    ()=>PrismaGameRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Episode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Episode.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Game$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Game.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Presenter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Presenter.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/GameId.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/GameStatus.ts [app-rsc] (ecmascript)");
;
;
;
;
;
class PrismaGameRepository {
    prisma;
    constructor(prisma){
        this.prisma = prisma;
    }
    /**
   * Find all games
   */ async findAll() {
        const games = await this.prisma.game.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return games.map((game)=>this.toDomain(game));
    }
    /**
   * Find games by status
   * @param status Game status to filter by
   */ async findByStatus(status) {
        const games = await this.prisma.game.findMany({
            where: {
                status: status.toString()
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return games.map((game)=>this.toDomain(game));
    }
    /**
   * Find games by creator ID
   * @param creatorId Creator/moderator session ID
   */ async findByCreatorId(creatorId) {
        const games = await this.prisma.game.findMany({
            where: {
                creatorId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return games.map((game)=>this.toDomain(game));
    }
    /**
   * Find game by ID
   * @param id Game ID
   */ async findById(id) {
        const game = await this.prisma.game.findUnique({
            where: {
                id: id.value
            }
        });
        return game ? this.toDomain(game) : null;
    }
    /**
   * Create a new game
   * @param game Game entity to create
   */ async create(game) {
        await this.prisma.game.create({
            data: {
                id: game.id.value,
                name: game.name,
                creatorId: game.creatorId,
                status: game.status.toString(),
                maxPlayers: game.maxPlayers,
                currentPlayers: game.currentPlayers,
                createdAt: game.createdAt,
                updatedAt: game.updatedAt
            }
        });
    }
    /**
   * Update existing game
   * @param game Game entity with updated data
   */ async update(game) {
        await this.prisma.game.update({
            where: {
                id: game.id.value
            },
            data: {
                name: game.name,
                status: game.status.toString(),
                maxPlayers: game.maxPlayers,
                currentPlayers: game.currentPlayers,
                updatedAt: game.updatedAt
            }
        });
    }
    /**
   * Delete game
   * @param id Game ID to delete
   */ async delete(id) {
        await this.prisma.game.delete({
            where: {
                id: id.value
            }
        });
    }
    // Presenter operations
    /**
   * Find all presenters for a game
   * @param gameId Game ID to find presenters for
   */ async findPresentersByGameId(gameId) {
        const presenters = await this.prisma.presenter.findMany({
            where: {
                gameId
            },
            include: {
                episodes: {
                    orderBy: {
                        createdAt: 'asc'
                    }
                }
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        return presenters.map((presenter)=>this.presenterToDomain(presenter));
    }
    /**
   * Find a single presenter by ID
   * @param presenterId Presenter ID to search for
   */ async findPresenterById(presenterId) {
        const presenter = await this.prisma.presenter.findUnique({
            where: {
                id: presenterId
            },
            include: {
                episodes: {
                    orderBy: {
                        createdAt: 'asc'
                    }
                }
            }
        });
        return presenter ? this.presenterToDomain(presenter) : null;
    }
    /**
   * Add a presenter to a game
   * @param presenter Presenter entity to create
   */ async addPresenter(presenter) {
        const presenterData = {
            id: presenter.id,
            gameId: presenter.gameId,
            nickname: presenter.nickname,
            createdAt: presenter.createdAt
        };
        const episodesData = presenter.episodes.map((episode)=>({
                id: episode.id,
                presenterId: presenter.id,
                text: episode.text,
                isLie: episode.isLie,
                createdAt: episode.createdAt
            }));
        await this.prisma.$transaction(async (tx)=>{
            await tx.presenter.create({
                data: presenterData
            });
            if (episodesData.length > 0) {
                await tx.episode.createMany({
                    data: episodesData
                });
            }
        });
    }
    /**
   * Create a presenter with episodes in atomic operation (all-or-nothing)
   * @param presenter Presenter entity to create
   * @param episodes Array of exactly 3 Episode entities
   * @returns Created presenter with episodes for verification
   */ async createPresenterWithEpisodes(presenter, episodes) {
        const presenterData = {
            id: presenter.id,
            gameId: presenter.gameId,
            nickname: presenter.nickname,
            createdAt: presenter.createdAt
        };
        const episodesData = episodes.map((episode)=>({
                id: episode.id,
                presenterId: presenter.id,
                text: episode.text,
                isLie: episode.isLie,
                createdAt: episode.createdAt
            }));
        await this.prisma.$transaction(async (tx)=>{
            await tx.presenter.create({
                data: presenterData
            });
            await tx.episode.createMany({
                data: episodesData
            });
        });
        // Return the created presenter with episodes
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Presenter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Presenter"].create({
            id: presenter.id,
            gameId: presenter.gameId,
            nickname: presenter.nickname,
            episodes,
            createdAt: presenter.createdAt
        });
    }
    /**
   * Remove a presenter from a game (cascade deletes episodes)
   * @param presenterId Presenter ID to delete
   */ async removePresenter(presenterId) {
        // Delete presenter - cascade delete will handle episodes automatically
        await this.prisma.presenter.delete({
            where: {
                id: presenterId
            }
        });
    }
    // Episode operations
    /**
   * Find all episodes for a presenter
   * @param presenterId Presenter ID to find episodes for
   */ async findEpisodesByPresenterId(presenterId) {
        const episodes = await this.prisma.episode.findMany({
            where: {
                presenterId
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        return episodes.map((episode)=>this.episodeToDomain(episode));
    }
    /**
   * Add an episode to a presenter
   * @param episode Episode entity to create
   */ async addEpisode(episode) {
        await this.prisma.episode.create({
            data: {
                id: episode.id,
                presenterId: episode.presenterId,
                text: episode.text,
                isLie: episode.isLie,
                createdAt: episode.createdAt
            }
        });
    }
    /**
   * Remove an episode
   * @param episodeId Episode ID to delete
   */ async removeEpisode(episodeId) {
        await this.prisma.episode.delete({
            where: {
                id: episodeId
            }
        });
    }
    /**
   * Update an episode
   * @param episode Episode entity with updated data
   */ async updateEpisode(episode) {
        await this.prisma.episode.update({
            where: {
                id: episode.id
            },
            data: {
                text: episode.text,
                isLie: episode.isLie
            }
        });
    }
    /**
   * Maps Prisma presenter with episodes to domain entity
   */ presenterToDomain(prismaPresenter) {
        const episodes = prismaPresenter.episodes.map((episode)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Episode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Episode"].create({
                id: episode.id,
                presenterId: episode.presenterId,
                text: episode.text,
                isLie: episode.isLie,
                createdAt: episode.createdAt
            }));
        // Use createIncomplete to allow partial episode sets during creation
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Presenter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Presenter"].createIncomplete({
            id: prismaPresenter.id,
            gameId: prismaPresenter.gameId,
            nickname: prismaPresenter.nickname,
            episodes,
            createdAt: prismaPresenter.createdAt
        });
    }
    /**
   * Maps Prisma episode to domain entity
   */ episodeToDomain(prismaEpisode) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Episode$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Episode"].create({
            id: prismaEpisode.id,
            presenterId: prismaEpisode.presenterId,
            text: prismaEpisode.text,
            isLie: prismaEpisode.isLie,
            createdAt: prismaEpisode.createdAt
        });
    }
    /**
   * Find active games with pagination and player count
   * Feature: 005-top-active-games
   * Feature: 007-game-closure - Updated to include both '出題中' and '締切' games
   * Note: Uses actual participation count from database for accuracy
   */ async findActiveGamesWithPagination(params) {
        // Fetch games with actual participation count
        // Include both '出題中' and '締切' games for TOP page display
        // Feature 007: Display both active and closed games
        const games = await this.prisma.game.findMany({
            where: {
                status: {
                    in: [
                        '出題中',
                        '締切'
                    ]
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: params.limit,
            skip: params.skip,
            include: {
                _count: {
                    select: {
                        participations: true
                    }
                }
            }
        });
        // Get total count
        const total = await this.prisma.game.count({
            where: {
                status: {
                    in: [
                        '出題中',
                        '締切'
                    ]
                }
            }
        });
        // Map to expected format
        return {
            games: games.map((game)=>({
                    id: game.id,
                    title: game.name || 'Untitled Game',
                    createdAt: game.createdAt,
                    playerCount: game._count.participations,
                    playerLimit: game.maxPlayers,
                    creatorId: game.creatorId,
                    status: game.status
                })),
            total
        };
    }
    /**
   * Find games with status filter (active and/or closed)
   * Feature: 007-game-closure
   */ async findGamesWithStatusFilter(params) {
        // Determine status condition based on filter
        const statusCondition = params.statusFilter === 'すべて' ? {
            status: {
                in: [
                    '出題中',
                    '締切'
                ]
            }
        } : {
            status: params.statusFilter
        };
        // Fetch games with actual participation count
        const games = await this.prisma.game.findMany({
            where: statusCondition,
            orderBy: {
                createdAt: 'desc'
            },
            take: params.limit,
            skip: params.skip,
            include: {
                _count: {
                    select: {
                        participations: true
                    }
                }
            }
        });
        // Get total count
        const total = await this.prisma.game.count({
            where: statusCondition
        });
        // Map to expected format
        return {
            games: games.map((game)=>({
                    id: game.id,
                    title: game.name || 'Untitled Game',
                    createdAt: game.createdAt,
                    playerCount: game._count.participations,
                    playerLimit: game.maxPlayers,
                    creatorId: game.creatorId,
                    status: game.status
                })),
            total
        };
    }
    /**
   * Maps Prisma game model to domain entity
   */ toDomain(prismaGame) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Game$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Game"](new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GameId"](prismaGame.id), prismaGame.name, new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GameStatus"](prismaGame.status), prismaGame.maxPlayers, prismaGame.currentPlayers, prismaGame.createdAt, prismaGame.updatedAt, prismaGame.creatorId || '');
    }
}
}),
"[project]/src/server/infrastructure/repositories/PrismaParticipationRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Infrastructure: Prisma Participation Repository
// Implements IParticipationRepository interface using Prisma ORM
__turbopack_context__.s([
    "PrismaParticipationRepository",
    ()=>PrismaParticipationRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Participation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Participation.ts [app-rsc] (ecmascript)");
;
class PrismaParticipationRepository {
    prisma;
    constructor(prisma){
        this.prisma = prisma;
    }
    async create(participation) {
        const json = participation.toJSON();
        await this.prisma.participation.create({
            data: {
                id: json.id,
                sessionId: json.sessionId,
                gameId: json.gameId,
                nickname: json.nickname,
                joinedAt: json.joinedAt
            }
        });
    }
    async exists(sessionId, gameId) {
        const count = await this.prisma.participation.count({
            where: {
                sessionId,
                gameId
            }
        });
        return count > 0;
    }
    async countByGameId(gameId) {
        return await this.prisma.participation.count({
            where: {
                gameId
            }
        });
    }
    async findBySessionAndGame(sessionId, gameId) {
        const participation = await this.prisma.participation.findUnique({
            where: {
                sessionId_gameId: {
                    sessionId,
                    gameId
                }
            }
        });
        if (!participation) {
            return null;
        }
        return this.toDomain(participation);
    }
    toDomain(participation) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Participation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParticipationEntity"].create({
            sessionId: participation.sessionId,
            gameId: participation.gameId,
            nickname: participation.nickname
        });
    }
}
}),
"[project]/src/server/infrastructure/repositories/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// Repository Factory with Dependency Injection
// Feature: 002-game-preparation, 001-lie-detection-answers
// Provides repository instances using Prisma
__turbopack_context__.s([
    "closeRepositoryConnections",
    ()=>closeRepositoryConnections,
    "createAnswerRepository",
    ()=>createAnswerRepository,
    "createGameRepository",
    ()=>createGameRepository,
    "createParticipationRepository",
    ()=>createParticipationRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/generated/prisma/client.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$PrismaAnswerRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/repositories/PrismaAnswerRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$PrismaGameRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/repositories/PrismaGameRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$PrismaParticipationRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/repositories/PrismaParticipationRepository.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
/**
 * Singleton Prisma client instance
 */ let prismaClient = null;
/**
 * Gets Prisma client instance (singleton)
 */ function getPrismaClient() {
    if (!prismaClient) {
        prismaClient = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrismaClient"]();
    }
    return prismaClient;
}
function createGameRepository() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$PrismaGameRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaGameRepository"](getPrismaClient());
}
function createAnswerRepository() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$PrismaAnswerRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaAnswerRepository"](getPrismaClient());
}
function createParticipationRepository() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$PrismaParticipationRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaParticipationRepository"](getPrismaClient());
}
async function closeRepositoryConnections() {
    if (prismaClient) {
        await prismaClient.$disconnect();
        prismaClient = null;
    }
}
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/server/domain/entities/Session.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Session entity
// Represents a user's persistent identity across browser sessions
__turbopack_context__.s([
    "InvalidTimestampError",
    ()=>InvalidTimestampError,
    "Session",
    ()=>Session
]);
class InvalidTimestampError extends Error {
    constructor(){
        super('Session creation timestamp cannot be in the future');
        this.name = 'InvalidTimestampError';
    }
}
class Session {
    _sessionId;
    _nickname;
    _createdAt;
    /**
   * Creates a new Session
   * @param sessionId Unique session identifier
   * @param nickname User's display name (can be null initially)
   * @param createdAt When the session was created
   * @throws InvalidTimestampError if createdAt is in the future
   */ constructor(sessionId, nickname, createdAt){
        this._sessionId = sessionId;
        this._nickname = nickname;
        this._createdAt = createdAt;
        this.validate();
    }
    /**
   * Gets the session ID
   */ get sessionId() {
        return this._sessionId;
    }
    /**
   * Gets the nickname
   */ get nickname() {
        return this._nickname;
    }
    /**
   * Gets the creation timestamp
   */ get createdAt() {
        return this._createdAt;
    }
    /**
   * Sets or updates the nickname
   * @param nickname The new nickname
   */ setNickname(nickname) {
        this._nickname = nickname;
    }
    /**
   * Checks if session has a nickname set
   * @returns true if nickname exists
   */ hasNickname() {
        return this._nickname !== null;
    }
    /**
   * Validates session invariants
   * @throws InvalidTimestampError if createdAt is in the future
   */ validate() {
        const now = new Date();
        if (this._createdAt > now) {
            throw new InvalidTimestampError();
        }
    }
    /**
   * Creates a copy of the session with a new nickname
   * @param nickname The new nickname
   * @returns New Session instance with updated nickname
   */ withNickname(nickname) {
        return new Session(this._sessionId, nickname, this._createdAt);
    }
}
}),
"[project]/src/server/domain/value-objects/Nickname.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Nickname value object
// Encapsulates user nickname with validation
__turbopack_context__.s([
    "EmptyNicknameError",
    ()=>EmptyNicknameError,
    "Nickname",
    ()=>Nickname,
    "NicknameTooLongError",
    ()=>NicknameTooLongError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
;
class EmptyNicknameError extends Error {
    constructor(){
        super('Nickname cannot be empty or only whitespace');
        this.name = 'EmptyNicknameError';
    }
}
class NicknameTooLongError extends Error {
    constructor(length){
        super(`Nickname too long: ${length} characters (max: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VALIDATION"].NICKNAME_MAX_LENGTH})`);
        this.name = 'NicknameTooLongError';
    }
}
class Nickname {
    _value;
    /**
   * Creates a new Nickname
   * @param value The nickname string (trimmed, 1-50 characters)
   * @throws EmptyNicknameError if empty or only whitespace
   * @throws NicknameTooLongError if exceeds 50 characters
   */ constructor(value){
        const trimmed = value.trim();
        if (trimmed === '') {
            throw new EmptyNicknameError();
        }
        if (trimmed.length > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VALIDATION"].NICKNAME_MAX_LENGTH) {
            throw new NicknameTooLongError(trimmed.length);
        }
        this._value = trimmed;
    }
    /**
   * Gets the nickname value
   */ get value() {
        return this._value;
    }
    /**
   * Gets the length of the nickname
   */ get length() {
        return this._value.length;
    }
    /**
   * Checks if nickname is empty (should never be true after construction)
   * @returns false (nicknames are validated to be non-empty)
   */ isEmpty() {
        return this._value.trim() === '';
    }
    /**
   * Checks equality with another Nickname
   * @param other The Nickname to compare with
   * @returns true if values are equal
   */ equals(other) {
        return this._value === other._value;
    }
    /**
   * Returns string representation
   */ toString() {
        return this._value;
    }
}
}),
"[project]/src/server/infrastructure/repositories/CookieSessionRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CookieSessionRepository
// Implementation of ISessionRepository using Next.js cookies
__turbopack_context__.s([
    "CookieSessionRepository",
    ()=>CookieSessionRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$Nickname$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/Nickname.ts [app-rsc] (ecmascript)");
;
;
;
;
class CookieSessionRepository {
    /**
   * Creates a new session and stores it in cookies
   * @param session The session to create
   */ async create(session) {
        // Store session ID in HTTP-only cookie
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_NAMES"].SESSION_ID, session.sessionId.value, {
            httpOnly: true,
            secure: true
        });
        // Store nickname if exists (readable by client)
        if (session.nickname) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_NAMES"].NICKNAME, session.nickname.value, {
                httpOnly: false,
                secure: true
            });
        }
    }
    /**
   * Finds a session by its ID
   * @param sessionId The session ID to find
   * @returns Session if found, null otherwise
   */ async findById(sessionId) {
        const sessionIdValue = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_NAMES"].SESSION_ID);
        // Check if session ID matches
        if (!sessionIdValue || sessionIdValue !== sessionId.value) {
            return null;
        }
        // Get nickname if exists
        const nicknameValue = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_NAMES"].NICKNAME);
        const nickname = nicknameValue ? new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$Nickname$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Nickname"](nicknameValue) : null;
        // Create session entity
        // Note: We don't store createdAt in cookies, so we use current date
        // This is acceptable for MVP as we're not tracking session age
        const session = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Session"](sessionId, nickname, new Date());
        return session;
    }
    /**
   * Updates an existing session
   * @param session The session to update
   */ async update(session) {
        // Update session ID cookie (in case it changed, though unlikely)
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_NAMES"].SESSION_ID, session.sessionId.value, {
            httpOnly: true,
            secure: true
        });
        // Update nickname cookie
        if (session.nickname) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_NAMES"].NICKNAME, session.nickname.value, {
                httpOnly: false,
                secure: true
            });
        } else {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_NAMES"].NICKNAME);
        }
    }
    /**
   * Deletes a session
   * @param _sessionId The session ID to delete (unused - we delete all session cookies)
   */ async delete(_sessionId) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_NAMES"].SESSION_ID);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COOKIE_NAMES"].NICKNAME);
    }
}
}),
"[project]/src/app/actions/answers.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"400676409d2de73e43d7d5f1e43a4b145ae5d03e46":"submitAnswerAction","40e23bbbdba8c406777c6359b5833166248d1ed18c":"getGameForAnswersAction"},"",""] */ __turbopack_context__.s([
    "getGameForAnswersAction",
    ()=>getGameForAnswersAction,
    "submitAnswerAction",
    ()=>submitAnswerAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
// Answer Submission Server Actions
// Feature: 001-lie-detection-answers
// Server Actions with Zod validation for answer submission
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$answers$2f$GetGameForAnswers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/application/use-cases/answers/GetGameForAnswers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$answers$2f$SubmitAnswer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/application/use-cases/answers/SubmitAnswer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$session$2f$ValidateSession$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/application/use-cases/session/ValidateSession.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$schemas$2f$answerSchemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/schemas/answerSchemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$di$2f$SessionServiceContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/di/SessionServiceContainer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/server/infrastructure/repositories/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$CookieSessionRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/repositories/CookieSessionRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
// Create session repository instance for session validation
const sessionRepository = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$CookieSessionRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CookieSessionRepository"]();
async function getGameForAnswersAction(gameId) {
    const gameRepository = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createGameRepository"])();
    const useCase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$answers$2f$GetGameForAnswers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GetGameForAnswers"](gameRepository);
    return await useCase.execute(gameId);
}
async function submitAnswerAction(formData) {
    // Get session
    let sessionId;
    let nickname;
    try {
        const sessionService = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$di$2f$SessionServiceContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SessionServiceContainer"].getSessionService();
        sessionId = await sessionService.requireCurrentSession();
        // Use ValidateSession to get session data with nickname
        const validateUseCase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$session$2f$ValidateSession$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidateSession"](sessionRepository);
        const session = await validateUseCase.execute(sessionId);
        // Use nickname if available, otherwise use default name based on sessionId
        nickname = session?.nickname ?? `参加者_${sessionId.slice(0, 8)}`;
    } catch  {
        return {
            success: false,
            errors: {
                _form: [
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('action.session.notFound')
                ]
            }
        };
    }
    // Parse form data
    const gameId = formData.get('gameId');
    const selectionsRaw = formData.get('selections');
    let selections;
    try {
        selections = JSON.parse(selectionsRaw);
    } catch  {
        return {
            success: false,
            errors: {
                selections: [
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('errors.invalid')
                ]
            }
        };
    }
    // Validate input
    const validation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$schemas$2f$answerSchemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubmitAnswerSchema"].safeParse({
        gameId,
        selections
    });
    if (!validation.success) {
        const errors = {};
        for (const issue of validation.error.issues){
            const path = issue.path.join('.');
            if (!errors[path]) {
                errors[path] = [];
            }
            errors[path]?.push(issue.message);
        }
        return {
            success: false,
            errors
        };
    }
    // Execute use case
    const gameRepository = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createGameRepository"])();
    const answerRepository = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAnswerRepository"])();
    const participationRepository = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createParticipationRepository"])();
    const useCase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$answers$2f$SubmitAnswer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubmitAnswer"](answerRepository, participationRepository, gameRepository);
    const result = await useCase.execute({
        gameId,
        sessionId,
        nickname,
        selections
    });
    // Convert use case result to server action result
    if (result.success) {
        return {
            success: true,
            data: result.data
        };
    }
    // Map error codes to user-friendly messages
    return {
        success: false,
        errors: {
            _form: [
                result.error.message
            ]
        }
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getGameForAnswersAction,
    submitAnswerAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGameForAnswersAction, "40e23bbbdba8c406777c6359b5833166248d1ed18c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitAnswerAction, "400676409d2de73e43d7d5f1e43a4b145ae5d03e46", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/games/[id]/answer/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/answers.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$answers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/answers.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$answers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$answers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/games/[id]/answer/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/answers.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "400676409d2de73e43d7d5f1e43a4b145ae5d03e46",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$answers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitAnswerAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$games$2f5b$id$5d2f$answer$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$answers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/games/[id]/answer/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/answers.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$answers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/answers.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$games$2f5b$id$5d2f$answer$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$answers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$answers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$games$2f5b$id$5d2f$answer$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$answers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$answers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5a71c49b._.js.map