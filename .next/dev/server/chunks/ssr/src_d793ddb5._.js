module.exports = [
"[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useLanguage Hook
 * Feature: 008-i18n-support / US1
 *
 * Custom hook to access language context
 */ __turbopack_context__.s([
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$LanguageProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/LanguageProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$LanguageProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageContext"]);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
}),
"[project]/src/components/domain/game/ActiveGameCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ActiveGameCard Component
 * Feature: 005-top-active-games (User Story 2 & 3)
 * Feature: 001-lie-detection-answers (Answer submission navigation)
 * Feature: 006-results-dashboard (Dashboard navigation)
 * Feature: 007-game-closure (Status badge and closed game handling)
 *
 * Displays a single active game with:
 * - Game title
 * - Game status badge ('出題中' or '締切')
 * - Player count (current / limit)
 * - Formatted creation time
 * - Action buttons:
 *   - Answer submission button (all users, disabled for closed games)
 *   - Dashboard/Results button (conditional):
 *     - '出題中' (active): Links to dashboard with text "ダッシュボード"
 *     - '締切' (closed): Links to results with text "結果を見る"
 */ __turbopack_context__.s([
    "ActiveGameCard",
    ()=>ActiveGameCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ActiveGameCard({ game, currentSessionId: _currentSessionId }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const playerCountText = game.playerLimit ? `${game.playerCount} / ${game.playerLimit}人` : `${game.playerCount}人`;
    // Check if game is closed by comparing with the actual status value, not translated text
    const isClosed = game.status === '締切';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900",
                        children: game.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/ActiveGameCard.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `flex-shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${isClosed ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`,
                        children: isClosed ? t('game.status.closed') : t('game.status.active')
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/ActiveGameCard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/domain/game/ActiveGameCard.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-sm text-gray-600 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: playerCountText
                        }, void 0, false, {
                            fileName: "[project]/src/components/domain/game/ActiveGameCard.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/ActiveGameCard.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                        dateTime: game.createdAt,
                        className: "text-gray-500",
                        children: game.formattedCreatedAt
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/ActiveGameCard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/domain/game/ActiveGameCard.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    isClosed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: true,
                        className: "flex-1 rounded-md bg-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-500 cursor-not-allowed",
                        "aria-label": t('game.gameClosed'),
                        children: t('answer.submitAnswer')
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/ActiveGameCard.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/games/${game.id}/answer`,
                        className: "flex-1 rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        children: t('answer.submitAnswer')
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/ActiveGameCard.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: isClosed ? `/games/${game.id}/results` : `/games/${game.id}/dashboard`,
                        className: "flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                        children: isClosed ? t('results.viewResults') : t('navigation.dashboard')
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/ActiveGameCard.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/domain/game/ActiveGameCard.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/domain/game/ActiveGameCard.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/domain/game/ActiveGamesList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ActiveGamesList Component
 * Feature: 005-top-active-games (User Story 2)
 * Feature: 006-results-dashboard (Dashboard navigation support)
 *
 * Container component that renders a list of ActiveGameCard components
 * Handles layout and spacing for multiple game cards
 */ __turbopack_context__.s([
    "ActiveGamesList",
    ()=>ActiveGamesList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$ActiveGameCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/domain/game/ActiveGameCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function ActiveGamesList({ games, currentSessionId }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    if (games.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
        "aria-label": t('navigation.activeGames'),
        children: games.map((game)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$ActiveGameCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActiveGameCard"], {
                    game: game,
                    currentSessionId: currentSessionId
                }, void 0, false, {
                    fileName: "[project]/src/components/domain/game/ActiveGamesList.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, game.id, false, {
                fileName: "[project]/src/components/domain/game/ActiveGamesList.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/domain/game/ActiveGamesList.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/design-system/classNames.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * classNames Utility
 * Feature: 009-apple-hig-ui-redesign
 * Utility for combining CSS class names conditionally
 */ /** Type for class name values */ __turbopack_context__.s([
    "classNames",
    ()=>classNames
]);
function classNames(...classes) {
    return classes.filter((cls)=>{
        // Filter out falsy values: undefined, null, false, empty string
        // Keep truthy values: strings, numbers (including 0 is filtered out)
        if (cls === undefined || cls === null || cls === false || cls === '') {
            return false;
        }
        // Filter out 0
        if (cls === 0) {
            return false;
        }
        return true;
    }).map((cls)=>String(cls).trim()).filter((cls)=>cls !== '').join(' ');
}
}),
"[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Button Component
 * Feature: 009-apple-hig-ui-redesign
 * Apple HIG-compliant button component with design system tokens
 */ __turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/design-system/classNames.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function Button({ children, variant = 'primary', size = 'md', className, disabled, loading = false, fullWidth = false, leftIcon, rightIcon, hideTextOnLoading = false, type = 'button', ...props }, ref) {
    const isDisabled = disabled || loading;
    // Base styles using design tokens
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('btn-base', 'inline-flex items-center justify-center gap-2', 'font-medium transition-all duration-200 ease-out', 'focus:outline-none focus:ring-2 focus:ring-offset-2', 'disabled:opacity-50 disabled:cursor-not-allowed', 'active:transform active:scale-95');
    // Variant styles
    const variantStyles = {
        primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('btn-primary', 'bg-blue-600 text-white', 'hover:bg-blue-700', 'focus:ring-blue-500', 'disabled:hover:bg-blue-600'),
        secondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('btn-secondary', 'bg-gray-200 text-gray-900', 'hover:bg-gray-300', 'focus:ring-gray-500', 'disabled:hover:bg-gray-200'),
        tertiary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('btn-tertiary', 'bg-transparent text-blue-600 border border-blue-600', 'hover:bg-blue-50', 'focus:ring-blue-500', 'disabled:hover:bg-transparent'),
        destructive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('btn-destructive', 'bg-red-600 text-white', 'hover:bg-red-700', 'focus:ring-red-500', 'disabled:hover:bg-red-600'),
        ghost: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('btn-ghost', 'bg-transparent text-gray-700', 'hover:bg-gray-100', 'focus:ring-gray-500', 'disabled:hover:bg-transparent')
    };
    // Size styles
    const sizeStyles = {
        sm: 'btn-sm px-3 py-1.5 text-sm rounded-md min-h-[32px]',
        md: 'btn-md px-4 py-2 text-base rounded-lg min-h-[44px]',
        lg: 'btn-lg px-6 py-3 text-lg rounded-lg min-h-[52px]'
    };
    // Additional state styles
    const stateStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(loading && 'btn-loading', isDisabled && 'btn-disabled', fullWidth && 'btn-full-width w-full');
    const buttonClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(baseStyles, variantStyles[variant], sizeStyles[size], stateStyles, className);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        type: type,
        className: buttonClassName,
        disabled: isDisabled,
        "aria-disabled": isDisabled,
        "aria-busy": loading,
        ...props,
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "btn-spinner animate-spin",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Button.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Button.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Button.tsx",
                    lineNumber: 161,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, this),
            leftIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "btn-icon-left",
                children: leftIcon
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 183,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "btn-content",
                style: {
                    visibility: loading && hideTextOnLoading ? 'hidden' : 'visible'
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            rightIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "btn-icon-right",
                children: rightIcon
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 192,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
});
}),
"[project]/src/components/ui/Input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Input Component
 * Feature: 009-apple-hig-ui-redesign
 * Apple HIG-compliant input field with variants and states
 */ __turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/design-system/classNames.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function Input({ label, helperText, error = false, errorMessage, size = 'md', variant = 'default', type = 'text', leftIcon, rightIcon, className, id, disabled = false, required = false, readOnly = false, 'aria-label': ariaLabel, 'aria-describedby': ariaDescribedBy, ...props }, ref) {
    const randomId = Math.random().toString(36).substr(2, 9);
    const inputId = id || `input-${randomId}`;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error && errorMessage ? `${inputId}-error` : undefined;
    const describedBy = errorId || helperId || ariaDescribedBy;
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('input-base', 'w-full', 'rounded-md', 'border', 'transition-colors duration-200', 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0', 'dark:bg-gray-800 dark:text-white');
    const sizeStyles = {
        sm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('input-sm', 'px-3 py-1.5 text-sm'),
        md: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('input-md', 'px-4 py-2 text-base'),
        lg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('input-lg', 'px-5 py-3 text-lg')
    };
    const variantStyles = {
        default: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('input-default', 'bg-white', 'border-gray-300 dark:border-gray-600', 'hover:border-gray-400 dark:hover:border-gray-500'),
        filled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('input-filled', 'bg-gray-100 dark:bg-gray-700', 'border-transparent', 'hover:bg-gray-200 dark:hover:bg-gray-600'),
        outlined: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])('input-outlined', 'bg-transparent', 'border-2 border-gray-400 dark:border-gray-500', 'hover:border-gray-600 dark:hover:border-gray-400')
    };
    const stateStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(error && 'input-error border-red-500 focus:ring-red-500', disabled && 'input-disabled bg-gray-100 dark:bg-gray-900 cursor-not-allowed opacity-60');
    const iconPaddingStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(leftIcon && 'pl-10', rightIcon && 'pr-10');
    const inputClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2d$system$2f$classNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])(baseStyles, sizeStyles[size], variantStyles[variant], stateStyles, iconPaddingStyles, className);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "input-wrapper w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: "input-label block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500 ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Input.tsx",
                        lineNumber: 118,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "input-container relative",
                children: [
                    leftIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "input-left-icon absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500",
                        children: leftIcon
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Input.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: ref,
                        id: inputId,
                        type: type,
                        className: inputClassName,
                        disabled: disabled,
                        required: required,
                        readOnly: readOnly,
                        "aria-label": ariaLabel,
                        "aria-invalid": error,
                        "aria-describedby": describedBy,
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Input.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    rightIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "input-right-icon absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500",
                        children: rightIcon
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Input.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            helperText && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: helperId,
                className: "input-helper-text mt-2 text-sm text-gray-500 dark:text-gray-400",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this),
            error && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: errorId,
                className: "input-error-text mt-2 text-sm text-red-600 dark:text-red-400",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Input.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
});
}),
"[project]/src/app/actions/data:c6ce13 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4093f5723c4c7cf22205d590c1794ca412ea5e7f50":"setNicknameAction"},"src/app/actions/session.ts",""] */ __turbopack_context__.s([
    "setNicknameAction",
    ()=>setNicknameAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var setNicknameAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4093f5723c4c7cf22205d590c1794ca412ea5e7f50", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "setNicknameAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2Vzc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbi8vIFNlcnZlciBBY3Rpb25zIGZvciBzZXNzaW9uIG1hbmFnZW1lbnRcbi8vIFByb3ZpZGVzIHNlcnZlci1zaWRlIGZ1bmN0aW9ucyBmb3Igc2Vzc2lvbiBvcGVyYXRpb25zXG5cbmltcG9ydCB7IHQgfSBmcm9tICdAL2xpYi9pMThuL3NlcnZlcic7XG5pbXBvcnQgeyBDcmVhdGVTZXNzaW9uIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL3Nlc3Npb24vQ3JlYXRlU2Vzc2lvbic7XG5pbXBvcnQgeyBTZXROaWNrbmFtZSB9IGZyb20gJ0Avc2VydmVyL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9zZXNzaW9uL1NldE5pY2tuYW1lJztcbmltcG9ydCB7IFZhbGlkYXRlU2Vzc2lvbiB9IGZyb20gJ0Avc2VydmVyL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9zZXNzaW9uL1ZhbGlkYXRlU2Vzc2lvbic7XG5pbXBvcnQgeyBFbXB0eU5pY2tuYW1lRXJyb3IsIE5pY2tuYW1lVG9vTG9uZ0Vycm9yIH0gZnJvbSAnQC9zZXJ2ZXIvZG9tYWluL3ZhbHVlLW9iamVjdHMvTmlja25hbWUnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2VDb250YWluZXIgfSBmcm9tICdAL3NlcnZlci9pbmZyYXN0cnVjdHVyZS9kaS9TZXNzaW9uU2VydmljZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBDb29raWVTZXNzaW9uUmVwb3NpdG9yeSB9IGZyb20gJ0Avc2VydmVyL2luZnJhc3RydWN0dXJlL3JlcG9zaXRvcmllcy9Db29raWVTZXNzaW9uUmVwb3NpdG9yeSc7XG5cbi8vIENyZWF0ZSBzaW5nbGV0b24gcmVwb3NpdG9yeSBpbnN0YW5jZVxuY29uc3Qgc2Vzc2lvblJlcG9zaXRvcnkgPSBuZXcgQ29va2llU2Vzc2lvblJlcG9zaXRvcnkoKTtcblxuLyoqXG4gKiBSZXN1bHQgdHlwZSBmb3IgY3JlYXRlU2Vzc2lvbkFjdGlvblxuICovXG5leHBvcnQgdHlwZSBDcmVhdGVTZXNzaW9uUmVzdWx0ID1cbiAgfCB7IHN1Y2Nlc3M6IHRydWU7IHNlc3Npb25JZDogc3RyaW5nIH1cbiAgfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcjogeyBjb2RlOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9IH07XG5cbi8qKlxuICogUmVzdWx0IHR5cGUgZm9yIHNldE5pY2tuYW1lQWN0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIFNldE5pY2tuYW1lUmVzdWx0ID1cbiAgfCB7IHN1Y2Nlc3M6IHRydWU7IG5pY2tuYW1lOiBzdHJpbmcgfVxuICB8IHsgc3VjY2VzczogZmFsc2U7IGVycm9yOiB7IGNvZGU6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH0gfTtcblxuLyoqXG4gKiBSZXN1bHQgdHlwZSBmb3IgdmFsaWRhdGVTZXNzaW9uQWN0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIFZhbGlkYXRlU2Vzc2lvblJlc3VsdCA9IHtcbiAgdmFsaWQ6IGJvb2xlYW47XG4gIHNlc3Npb25JZDogc3RyaW5nIHwgbnVsbDtcbiAgbmlja25hbWU6IHN0cmluZyB8IG51bGw7XG4gIGhhc05pY2tuYW1lOiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHNlc3Npb24gd2l0aCBhIHVuaXF1ZSBzZXNzaW9uIElEXG4gKiBTdG9yZXMgc2Vzc2lvbiBJRCBpbiBIVFRQLW9ubHkgY29va2llXG4gKiBAcmV0dXJucyBTZXNzaW9uIElEIGFuZCBzdWNjZXNzIHN0YXR1c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbkFjdGlvbigpOiBQcm9taXNlPENyZWF0ZVNlc3Npb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IENyZWF0ZVNlc3Npb24oc2Vzc2lvblJlcG9zaXRvcnkpO1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uLnNlc3Npb25JZCxcbiAgICB9O1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjoge1xuICAgICAgICBjb2RlOiAnU0VTU0lPTl9DUkVBVElPTl9GQUlMRUQnLFxuICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGNyZWF0ZSBzZXNzaW9uJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNldHMgb3IgdXBkYXRlcyB0aGUgbmlja25hbWUgZm9yIHRoZSBjdXJyZW50IHNlc3Npb25cbiAqIEBwYXJhbSBuaWNrbmFtZSBUaGUgbmlja25hbWUgdG8gc2V0ICgxLTUwIGNoYXJhY3RlcnMpXG4gKiBAcmV0dXJucyBTdWNjZXNzIHN0YXR1cyBhbmQgbmlja25hbWVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldE5pY2tuYW1lQWN0aW9uKG5pY2tuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFNldE5pY2tuYW1lUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY3JlYXRlU2Vzc2lvblVzZUNhc2UgPSBuZXcgQ3JlYXRlU2Vzc2lvbihzZXNzaW9uUmVwb3NpdG9yeSk7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGNyZWF0ZVNlc3Npb25Vc2VDYXNlLmV4ZWN1dGUoKTtcblxuICAgIC8vIEV4ZWN1dGUgdXNlIGNhc2VcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IFNldE5pY2tuYW1lKHNlc3Npb25SZXBvc2l0b3J5KTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoc2Vzc2lvbi5zZXNzaW9uSWQsIG5pY2tuYW1lKTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBjb2RlOiAnTklDS05BTUVfVVBEQVRFX0ZBSUxFRCcsXG4gICAgICAgICAgbWVzc2FnZTogYXdhaXQgdCgnZXJyb3JzLnVuZXhwZWN0ZWRFcnJvcicpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG5pY2tuYW1lOiByZXN1bHQubmlja25hbWUgPz8gJycsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFbXB0eU5pY2tuYW1lRXJyb3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIGNvZGU6ICdFTVBUWV9OSUNLTkFNRScsXG4gICAgICAgICAgbWVzc2FnZTogYXdhaXQgdCgndmFsaWRhdGlvbi5uaWNrbmFtZS5lbXB0eScpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBOaWNrbmFtZVRvb0xvbmdFcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgY29kZTogJ05JQ0tOQU1FX1RPT19MT05HJyxcbiAgICAgICAgICBtZXNzYWdlOiBhd2FpdCB0KCd2YWxpZGF0aW9uLm5pY2tuYW1lLnRvb0xvbmcnKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IHtcbiAgICAgICAgY29kZTogJ05JQ0tOQU1FX1VQREFURV9GQUlMRUQnLFxuICAgICAgICBtZXNzYWdlOiBhd2FpdCB0KCdlcnJvcnMudW5leHBlY3RlZEVycm9yJyksXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgdGhlIGN1cnJlbnQgc2Vzc2lvbiBmcm9tIGNvb2tpZXNcbiAqIEByZXR1cm5zIFNlc3Npb24gdmFsaWRpdHkgc3RhdHVzIGFuZCBkYXRhXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVNlc3Npb25BY3Rpb24oKTogUHJvbWlzZTxWYWxpZGF0ZVNlc3Npb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICAvLyBHZXQgc2Vzc2lvbiBzZXJ2aWNlXG4gICAgY29uc3Qgc2Vzc2lvblNlcnZpY2UgPSBTZXNzaW9uU2VydmljZUNvbnRhaW5lci5nZXRTZXNzaW9uU2VydmljZSgpO1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IGF3YWl0IHNlc3Npb25TZXJ2aWNlLmdldEN1cnJlbnRTZXNzaW9uSWQoKTtcblxuICAgIGlmICghc2Vzc2lvbklkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgIHNlc3Npb25JZDogbnVsbCxcbiAgICAgICAgbmlja25hbWU6IG51bGwsXG4gICAgICAgIGhhc05pY2tuYW1lOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgc2Vzc2lvblxuICAgIGNvbnN0IHVzZUNhc2UgPSBuZXcgVmFsaWRhdGVTZXNzaW9uKHNlc3Npb25SZXBvc2l0b3J5KTtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgdXNlQ2FzZS5leGVjdXRlKHNlc3Npb25JZCk7XG5cbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgc2Vzc2lvbklkOiBudWxsLFxuICAgICAgICBuaWNrbmFtZTogbnVsbCxcbiAgICAgICAgaGFzTmlja25hbWU6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICBzZXNzaW9uSWQ6IHNlc3Npb24uc2Vzc2lvbklkLFxuICAgICAgbmlja25hbWU6IHNlc3Npb24ubmlja25hbWUsXG4gICAgICBoYXNOaWNrbmFtZTogc2Vzc2lvbi5uaWNrbmFtZSAhPT0gbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgc2Vzc2lvbklkOiBudWxsLFxuICAgICAgbmlja25hbWU6IG51bGwsXG4gICAgICBoYXNOaWNrbmFtZTogZmFsc2UsXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxU0FzRXNCIn0=
}),
"[project]/src/components/domain/session/hooks/useNicknameForm.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNicknameForm",
    ()=>useNicknameForm
]);
// useNicknameForm hook
// Custom hook for nickname form logic (follows constitution Principle III)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$c6ce13__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:c6ce13 [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
function useNicknameForm() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const handleChange = (value)=>{
        setNickname(value);
        // Clear error when user starts typing
        if (error) {
            setError(null);
        }
    };
    const handleSubmit = async ()=>{
        // Client-side validation
        if (!nickname.trim()) {
            setError(t('validation.nickname.empty'));
            return;
        }
        // Server action with transition for UI updates
        startTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$c6ce13__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["setNicknameAction"])(nickname);
            if (!result.success) {
                setError(result.error.message);
            } else {
                // Success - page will re-render with new nickname from cookies
                // Force a page reload to show the updated state
                window.location.reload();
            }
        });
    };
    return {
        nickname,
        error,
        isSubmitting: isPending,
        handleChange,
        handleSubmit
    };
}
}),
"[project]/src/components/domain/session/NicknameInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NicknameInput",
    ()=>NicknameInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// NicknameInput component
// Pure presentational component for nickname input form
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$session$2f$hooks$2f$useNicknameForm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/domain/session/hooks/useNicknameForm.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function NicknameInput() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { nickname, error, isSubmitting, handleChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$session$2f$hooks$2f$useNicknameForm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNicknameForm"])();
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        handleSubmit();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-xl font-semibold text-gray-900",
                children: t('session.enterNickname')
            }, void 0, false, {
                fileName: "[project]/src/components/domain/session/NicknameInput.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-6 text-sm text-gray-600",
                children: t('session.enterNickname')
            }, void 0, false, {
                fileName: "[project]/src/components/domain/session/NicknameInput.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleFormSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        type: "text",
                        label: t('form.presenter.nickname.label'),
                        placeholder: t('form.presenter.nickname.example'),
                        value: nickname,
                        onChange: (e)=>handleChange(e.target.value),
                        error: error ?? undefined,
                        disabled: isSubmitting,
                        maxLength: 50,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/session/NicknameInput.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        variant: "primary",
                        size: "lg",
                        className: "w-full",
                        disabled: isSubmitting,
                        children: isSubmitting ? t('status.labels.loading') : t('common.submit')
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/session/NicknameInput.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/domain/session/NicknameInput.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/domain/session/NicknameInput.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/EmptyState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * EmptyState Component
 * Feature: 005-top-active-games
 *
 * Displays a friendly message when no data is available
 * Reusable across different contexts (no games, no results, etc.)
 */ __turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function EmptyState({ message, subMessage, action, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("output", {
        className: "flex flex-col items-center justify-center py-12 px-4",
        "aria-live": "polite",
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/ui/EmptyState.tsx",
                lineNumber: 25,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-medium text-gray-900 text-center mb-2",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/ui/EmptyState.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            subMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 text-center mb-4",
                children: subMessage
            }, void 0, false, {
                fileName: "[project]/src/components/ui/EmptyState.tsx",
                lineNumber: 29,
                columnNumber: 22
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: action
            }, void 0, false, {
                fileName: "[project]/src/components/ui/EmptyState.tsx",
                lineNumber: 31,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/EmptyState.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/LanguageSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * LanguageSwitcher Component
 * Feature: 008-i18n-support / US1
 *
 * UI component for switching between Japanese and English
 */ __turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
'use client';
;
;
function LanguageSwitcher({ className = '' }) {
    const { language, toggleLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    // Show the opposite language (what user can switch TO)
    const label = language === 'ja' ? 'EN' : '日本語';
    const ariaLabel = language === 'ja' ? 'Switch to English' : 'Switch to Japanese';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggleLanguage,
        className: `rounded px-3 py-1.5 text-sm font-medium transition-colors hover:bg-gray-100 ${className}`,
        "aria-label": ariaLabel,
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/ui/LanguageSwitcher.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Header Component
 * Feature: 008-i18n-support / US1
 *
 * Application header with language switcher
 */ __turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LanguageSwitcher.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "border-b border-gray-200 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg font-semibold text-gray-900",
                    children: "ウソホントゲーム"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Header.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                    fileName: "[project]/src/components/ui/Header.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Header.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Header.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/pages/TopPage/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TOP Page Components
// Feature: 001-session-top-page, 005-top-active-games, 008-i18n-support
// Presentational components for the home/landing page
__turbopack_context__.s([
    "TopPage",
    ()=>TopPage,
    "TopPageNicknameSetup",
    ()=>TopPageNicknameSetup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$ActiveGamesList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/domain/game/ActiveGamesList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$session$2f$NicknameInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/domain/session/NicknameInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EmptyState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function TopPageNicknameSetup() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/components/pages/TopPage/index.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-[calc(100vh-56px)] items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$session$2f$NicknameInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NicknameInput"], {}, void 0, false, {
                    fileName: "[project]/src/components/pages/TopPage/index.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/TopPage/index.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/TopPage/index.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
function TopPage({ nickname, games, currentSessionId }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const hasGames = games && games.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/components/pages/TopPage/index.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 flex items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: [
                                    t('session.welcome'),
                                    ", ",
                                    nickname,
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/TopPage/index.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/TopPage/index.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-gray-800",
                                children: t('game.activeGames')
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/TopPage/index.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/TopPage/index.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        hasGames ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$ActiveGamesList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActiveGamesList"], {
                            games: games,
                            currentSessionId: currentSessionId
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/TopPage/index.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyState"], {
                            message: t('emptyState.noActiveGames'),
                            subMessage: t('emptyState.waitForGames')
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/TopPage/index.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/TopPage/index.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/TopPage/index.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/TopPage/index.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/pages/TopPage/hooks/useActiveGames.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useActiveGames Hook
 * Feature: 005-top-active-games (User Story 4)
 *
 * Custom hook for fetching active games with auto-refresh capability
 * Uses React Query for caching, background refetching, and optimistic updates
 */ __turbopack_context__.s([
    "useActiveGames",
    ()=>useActiveGames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
'use client';
;
function useActiveGames(options = {}) {
    const { refetchInterval = 30000, limit = 20 } = options;
    const { data, isLoading, isFetching, error, refetch: queryRefetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'activeGames',
            {
                limit
            }
        ],
        queryFn: async ()=>{
            // Fetch from API endpoint instead of server action
            const params = new URLSearchParams();
            if (limit) params.append('limit', limit.toString());
            const response = await fetch(`/api/games/active?${params.toString()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin'
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.details || error.error || 'Failed to fetch active games');
            }
            const result = await response.json();
            return {
                games: result.games,
                hasMore: result.hasMore,
                nextCursor: result.nextCursor,
                total: result.total
            };
        },
        refetchInterval,
        refetchIntervalInBackground: true,
        staleTime: 30000,
        gcTime: 5 * 60 * 1000,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true
    });
    const refetch = async ()=>{
        await queryRefetch();
    };
    return {
        games: data?.games ?? [],
        isLoading,
        isFetching,
        error: error,
        refetch,
        hasMore: data?.hasMore ?? false,
        total: data?.total ?? 0
    };
}
}),
"[project]/src/components/pages/TopPage/TopPageWithData.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TopPageWithData - Client Component Wrapper
 * Feature: 005-top-active-games (User Story 4)
 * Feature: 006-results-dashboard (Dashboard authorization support)
 *
 * Wraps TopPage with auto-refresh functionality using React Query
 * Handles loading states and error states
 */ __turbopack_context__.s([
    "TopPageWithData",
    ()=>TopPageWithData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EmptyState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$TopPage$2f$hooks$2f$useActiveGames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/TopPage/hooks/useActiveGames.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$TopPage$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/TopPage/index.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function TopPageWithData({ nickname, currentSessionId }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { games, isLoading, isFetching, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$TopPage$2f$hooks$2f$useActiveGames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActiveGames"])();
    // Show loading skeleton only on initial load
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900",
                            children: [
                                t('session.welcome'),
                                ", ",
                                nickname,
                                "!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-gray-800",
                            children: t('game.activeGames')
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
                        children: [
                            1,
                            2,
                            3
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-pulse rounded-lg border border-gray-200 bg-white p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-6 bg-gray-200 rounded mb-4 w-3/4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 bg-gray-200 rounded w-20"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 bg-gray-200 rounded w-16"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    // Show error state with retry option
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900",
                            children: [
                                t('session.welcome'),
                                ", ",
                                nickname,
                                "!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyState"], {
                        message: t('action.game.fetch.error'),
                        subMessage: t('errors.unexpectedError'),
                        action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>refetch(),
                            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                            children: t('status.labels.retry')
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                            lineNumber: 76,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this);
    }
    // Show loading indicator during background refresh
    const loadingIndicator = isFetching && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 right-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "animate-spin h-4 w-4 text-white",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "aria-label": t('status.labels.updating'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                            children: t('status.labels.updating')
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: t('results.updating')
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            loadingIndicator,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$TopPage$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TopPage"], {
                nickname: nickname,
                games: games,
                currentSessionId: currentSessionId
            }, void 0, false, {
                fileName: "[project]/src/components/pages/TopPage/TopPageWithData.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_d793ddb5._.js.map