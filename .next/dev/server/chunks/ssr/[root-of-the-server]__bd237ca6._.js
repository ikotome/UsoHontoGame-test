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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
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
"[project]/src/server/application/use-cases/session/CreateSession.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CreateSession use case
// Business logic for creating a new user session
__turbopack_context__.s([
    "CreateSession",
    ()=>CreateSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$SessionId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/SessionId.ts [app-rsc] (ecmascript)");
;
;
;
class CreateSession {
    sessionRepository;
    constructor(sessionRepository){
        this.sessionRepository = sessionRepository;
    }
    /**
   * Executes the use case to create a new session
   * @returns SessionDto with newly created session data
   */ async execute() {
        // Generate unique session ID using nanoid
        const sessionIdValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])();
        const sessionId = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$SessionId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SessionId"](sessionIdValue);
        // Create session entity without nickname (will be set later)
        const session = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Session"](sessionId, null, new Date());
        // Save to repository
        await this.sessionRepository.create(session);
        // Return DTO
        return this.toDto(session);
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
"[project]/src/server/application/use-cases/session/SetNickname.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// SetNickname use case
// Business logic for setting/updating a user's nickname
__turbopack_context__.s([
    "SetNickname",
    ()=>SetNickname
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$Nickname$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/Nickname.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$SessionId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/SessionId.ts [app-rsc] (ecmascript)");
;
;
class SetNickname {
    sessionRepository;
    constructor(sessionRepository){
        this.sessionRepository = sessionRepository;
    }
    /**
   * Executes the use case to set a nickname
   * @param sessionIdValue The session ID string
   * @param nicknameValue The nickname string
   * @returns SessionDto with updated nickname if successful, null otherwise
   */ async execute(sessionIdValue, nicknameValue) {
        try {
            // Validate inputs
            const sessionId = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$SessionId$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SessionId"](sessionIdValue);
            const nickname = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$Nickname$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Nickname"](nicknameValue);
            // Find session
            const session = await this.sessionRepository.findById(sessionId);
            if (!session) {
                return null;
            }
            // Update nickname
            session.setNickname(nickname);
            // Save to repository
            await this.sessionRepository.update(session);
            // Return DTO
            return this.toDto(session);
        } catch  {
            // Invalid session ID or nickname format
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
"[project]/src/app/actions/session.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"000ea510807fcb1bee1be0122913cdc0805c78c695":"validateSessionAction","001316990a5dc89dfcef340577ced0f43093906f3f":"createSessionAction","4093f5723c4c7cf22205d590c1794ca412ea5e7f50":"setNicknameAction"},"",""] */ __turbopack_context__.s([
    "createSessionAction",
    ()=>createSessionAction,
    "setNicknameAction",
    ()=>setNicknameAction,
    "validateSessionAction",
    ()=>validateSessionAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
// Server Actions for session management
// Provides server-side functions for session operations
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$session$2f$CreateSession$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/application/use-cases/session/CreateSession.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$session$2f$SetNickname$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/application/use-cases/session/SetNickname.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$session$2f$ValidateSession$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/application/use-cases/session/ValidateSession.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$Nickname$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/Nickname.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$di$2f$SessionServiceContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/di/SessionServiceContainer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$CookieSessionRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/repositories/CookieSessionRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
// Create singleton repository instance
const sessionRepository = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$CookieSessionRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CookieSessionRepository"]();
async function createSessionAction() {
    try {
        const useCase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$session$2f$CreateSession$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CreateSession"](sessionRepository);
        const session = await useCase.execute();
        return {
            success: true,
            sessionId: session.sessionId
        };
    } catch  {
        return {
            success: false,
            error: {
                code: 'SESSION_CREATION_FAILED',
                message: 'Failed to create session'
            }
        };
    }
}
async function setNicknameAction(nickname) {
    try {
        const createSessionUseCase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$session$2f$CreateSession$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CreateSession"](sessionRepository);
        const session = await createSessionUseCase.execute();
        // Execute use case
        const useCase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$session$2f$SetNickname$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SetNickname"](sessionRepository);
        const result = await useCase.execute(session.sessionId, nickname);
        if (!result) {
            return {
                success: false,
                error: {
                    code: 'NICKNAME_UPDATE_FAILED',
                    message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('errors.unexpectedError')
                }
            };
        }
        return {
            success: true,
            nickname: result.nickname ?? ''
        };
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$Nickname$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EmptyNicknameError"]) {
            return {
                success: false,
                error: {
                    code: 'EMPTY_NICKNAME',
                    message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('validation.nickname.empty')
                }
            };
        }
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$Nickname$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NicknameTooLongError"]) {
            return {
                success: false,
                error: {
                    code: 'NICKNAME_TOO_LONG',
                    message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('validation.nickname.tooLong')
                }
            };
        }
        return {
            success: false,
            error: {
                code: 'NICKNAME_UPDATE_FAILED',
                message: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])('errors.unexpectedError')
            }
        };
    }
}
async function validateSessionAction() {
    try {
        // Get session service
        const sessionService = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$di$2f$SessionServiceContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SessionServiceContainer"].getSessionService();
        const sessionId = await sessionService.getCurrentSessionId();
        if (!sessionId) {
            return {
                valid: false,
                sessionId: null,
                nickname: null,
                hasNickname: false
            };
        }
        // Validate session
        const useCase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$session$2f$ValidateSession$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidateSession"](sessionRepository);
        const session = await useCase.execute(sessionId);
        if (!session) {
            return {
                valid: false,
                sessionId: null,
                nickname: null,
                hasNickname: false
            };
        }
        return {
            valid: true,
            sessionId: session.sessionId,
            nickname: session.nickname,
            hasNickname: session.nickname !== null
        };
    } catch  {
        return {
            valid: false,
            sessionId: null,
            nickname: null,
            hasNickname: false
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createSessionAction,
    setNicknameAction,
    validateSessionAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSessionAction, "001316990a5dc89dfcef340577ced0f43093906f3f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setNicknameAction, "4093f5723c4c7cf22205d590c1794ca412ea5e7f50", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(validateSessionAction, "000ea510807fcb1bee1be0122913cdc0805c78c695", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/session.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/i18n/server.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/i18n/storage-server.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$storage$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/storage-server.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/session.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/i18n/server.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/i18n/storage-server.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000ea510807fcb1bee1be0122913cdc0805c78c695",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateSessionAction"],
    "001316990a5dc89dfcef340577ced0f43093906f3f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSessionAction"],
    "004744ca3659f84bada2a1af49c2c77623fa210a71",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentLanguage"],
    "00eb21139ed24c2245250f9238ea8e808eac762ef7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$storage$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStoredLanguageCookie"],
    "401b5811330bb8d9e6a4ddc9d29c681ceaffcd2a97",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$storage$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setStoredLanguageCookie"],
    "4093f5723c4c7cf22205d590c1794ca412ea5e7f50",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setNicknameAction"],
    "40e4a3d613f33b31c59aafd1c21416164ee4558d0a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$i18n$2f$storage$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/session.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/i18n/server.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/lib/i18n/storage-server.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$storage$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/storage-server.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bd237ca6._.js.map