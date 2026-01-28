(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/LanguageProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useLanguage() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageContext"]);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/domain/answer/EpisodeSelector/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * EpisodeSelector Component
 * Feature: 001-lie-detection-answers
 * Renders episodes as selectable buttons with visual selection feedback
 */ __turbopack_context__.s([
    "EpisodeSelector",
    ()=>EpisodeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const EpisodeSelector = ({ episodes, selectedEpisodeId, onSelect, disabled = false })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    if (episodes.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-4 text-gray-500",
            children: t('episode.noEpisodes')
        }, void 0, false, {
            fileName: "[project]/src/components/domain/answer/EpisodeSelector/index.tsx",
            lineNumber: 33,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: episodes.map((episode)=>{
            const isSelected = episode.id === selectedEpisodeId;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>!disabled && onSelect(episode.id),
                disabled: disabled,
                "data-selected": isSelected,
                "aria-pressed": isSelected,
                className: `
							w-full text-left px-4 py-3 rounded-lg border-2 transition-all
							focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
							disabled:opacity-50 disabled:cursor-not-allowed
							${isSelected ? 'bg-blue-100 border-blue-500 text-blue-900 font-medium' : 'bg-white border-gray-300 text-gray-700 hover:border-blue-300 hover:bg-blue-50'}
						`,
                children: episode.text
            }, episode.id, false, {
                fileName: "[project]/src/components/domain/answer/EpisodeSelector/index.tsx",
                lineNumber: 42,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/domain/answer/EpisodeSelector/index.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EpisodeSelector, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = EpisodeSelector;
var _c;
__turbopack_context__.k.register(_c, "EpisodeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/domain/answer/PresenterEpisodeList/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PresenterEpisodeList Component
 * Feature: 001-lie-detection-answers
 * Renders all presenters with their episode selectors
 */ __turbopack_context__.s([
    "PresenterEpisodeList",
    ()=>PresenterEpisodeList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$answer$2f$EpisodeSelector$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/domain/answer/EpisodeSelector/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const PresenterEpisodeList = ({ presenters, selections, onSelectEpisode, disabled = false })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    if (presenters.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8 text-gray-500",
            children: t('presenter.noPresenters')
        }, void 0, false, {
            fileName: "[project]/src/components/domain/answer/PresenterEpisodeList/index.tsx",
            lineNumber: 36,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        "aria-label": t('presenter.presenterList'),
        className: "space-y-6",
        children: presenters.map((presenter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    "aria-label": t('presenter.presenterEpisodes').replace('{name}', presenter.name),
                    className: "border rounded-lg p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-4 text-gray-900",
                            children: presenter.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/domain/answer/PresenterEpisodeList/index.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$answer$2f$EpisodeSelector$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EpisodeSelector"], {
                            episodes: presenter.episodes,
                            selectedEpisodeId: selections[presenter.id] || null,
                            onSelect: (episodeId)=>onSelectEpisode(presenter.id, episodeId),
                            disabled: disabled
                        }, void 0, false, {
                            fileName: "[project]/src/components/domain/answer/PresenterEpisodeList/index.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/domain/answer/PresenterEpisodeList/index.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, presenter.id, false, {
                fileName: "[project]/src/components/domain/answer/PresenterEpisodeList/index.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/domain/answer/PresenterEpisodeList/index.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PresenterEpisodeList, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PresenterEpisodeList;
var _c;
__turbopack_context__.k.register(_c, "PresenterEpisodeList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/domain/answer/GameAnswerForm/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * GameAnswerForm Component
 * Feature: 001-lie-detection-answers
 * Main form for answer submission with validation and state management
 */ __turbopack_context__.s([
    "GameAnswerForm",
    ()=>GameAnswerForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$answer$2f$PresenterEpisodeList$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/domain/answer/PresenterEpisodeList/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const GameAnswerForm = ({ presenters, selections, isComplete, isSubmitting, error, successMessage, onSelectEpisode, onSubmit, onReset })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const hasSelections = Object.keys(selections).length > 0;
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!isComplete || isSubmitting) return;
        onSubmit();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        "aria-label": t('answer.answerForm'),
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-2",
                        children: t('answer.detectLieTitle')
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: t('answer.detectLieDescription')
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                className: "bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("output", {
                className: "bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg block",
                children: successMessage
            }, void 0, false, {
                fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$answer$2f$PresenterEpisodeList$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenterEpisodeList"], {
                presenters: presenters,
                selections: selections,
                onSelectEpisode: onSelectEpisode,
                disabled: isSubmitting
            }, void 0, false, {
                fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isComplete && hasSelections && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg",
                children: t('answer.selectAllEpisodes')
            }, void 0, false, {
                fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isComplete && !isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 mr-2",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                children: t('common.checkmark')
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    t('answer.ready')
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: !isComplete || isSubmitting,
                        className: `
						flex-1 px-6 py-3 rounded-lg font-semibold transition-all
						focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
						${!isComplete || isSubmitting ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'}
					`,
                        children: isSubmitting ? t('common.loading') : t('answer.submitAnswer')
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onReset,
                        disabled: !hasSelections || isSubmitting,
                        className: `
						px-6 py-3 rounded-lg font-semibold transition-all
						focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
						${!hasSelections || isSubmitting ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 border border-gray-300'}
					`,
                        children: t('common.reset')
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/domain/answer/GameAnswerForm/index.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GameAnswerForm, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = GameAnswerForm;
var _c;
__turbopack_context__.k.register(_c, "GameAnswerForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/LanguageSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function LanguageSwitcher({ className = '' }) {
    _s();
    const { language, toggleLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    // Show the opposite language (what user can switch TO)
    const label = language === 'ja' ? 'EN' : '日本語';
    const ariaLabel = language === 'ja' ? 'Switch to English' : 'Switch to Japanese';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(LanguageSwitcher, "YC70IEn/RTRwmtDMN3pFOOQWlgg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LanguageSwitcher.tsx [app-client] (ecmascript)");
'use client';
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "border-b border-gray-200 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg font-semibold text-gray-900",
                    children: "ウソホントゲーム"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Header.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
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
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:6fe395 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400676409d2de73e43d7d5f1e43a4b145ae5d03e46":"submitAnswerAction"},"src/app/actions/answers.ts",""] */ __turbopack_context__.s([
    "submitAnswerAction",
    ()=>submitAnswerAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var submitAnswerAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("400676409d2de73e43d7d5f1e43a4b145ae5d03e46", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitAnswerAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYW5zd2Vycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbi8vIEFuc3dlciBTdWJtaXNzaW9uIFNlcnZlciBBY3Rpb25zXG4vLyBGZWF0dXJlOiAwMDEtbGllLWRldGVjdGlvbi1hbnN3ZXJzXG4vLyBTZXJ2ZXIgQWN0aW9ucyB3aXRoIFpvZCB2YWxpZGF0aW9uIGZvciBhbnN3ZXIgc3VibWlzc2lvblxuXG5pbXBvcnQgeyB0IH0gZnJvbSAnQC9saWIvaTE4bi9zZXJ2ZXInO1xuaW1wb3J0IHR5cGUgeyBHZXRHYW1lRm9yQW5zd2Vyc1Jlc3BvbnNlIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2Fuc3dlcnMvR2V0R2FtZUZvckFuc3dlcnMnO1xuaW1wb3J0IHsgR2V0R2FtZUZvckFuc3dlcnMgfSBmcm9tICdAL3NlcnZlci9hcHBsaWNhdGlvbi91c2UtY2FzZXMvYW5zd2Vycy9HZXRHYW1lRm9yQW5zd2Vycyc7XG5pbXBvcnQgeyBTdWJtaXRBbnN3ZXIgfSBmcm9tICdAL3NlcnZlci9hcHBsaWNhdGlvbi91c2UtY2FzZXMvYW5zd2Vycy9TdWJtaXRBbnN3ZXInO1xuaW1wb3J0IHsgVmFsaWRhdGVTZXNzaW9uIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL3Nlc3Npb24vVmFsaWRhdGVTZXNzaW9uJztcbmltcG9ydCB7IFN1Ym1pdEFuc3dlclNjaGVtYSB9IGZyb20gJ0Avc2VydmVyL2RvbWFpbi9zY2hlbWFzL2Fuc3dlclNjaGVtYXMnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2VDb250YWluZXIgfSBmcm9tICdAL3NlcnZlci9pbmZyYXN0cnVjdHVyZS9kaS9TZXNzaW9uU2VydmljZUNvbnRhaW5lcic7XG5pbXBvcnQge1xuICBjcmVhdGVBbnN3ZXJSZXBvc2l0b3J5LFxuICBjcmVhdGVHYW1lUmVwb3NpdG9yeSxcbiAgY3JlYXRlUGFydGljaXBhdGlvblJlcG9zaXRvcnksXG59IGZyb20gJ0Avc2VydmVyL2luZnJhc3RydWN0dXJlL3JlcG9zaXRvcmllcyc7XG5pbXBvcnQgeyBDb29raWVTZXNzaW9uUmVwb3NpdG9yeSB9IGZyb20gJ0Avc2VydmVyL2luZnJhc3RydWN0dXJlL3JlcG9zaXRvcmllcy9Db29raWVTZXNzaW9uUmVwb3NpdG9yeSc7XG5cbi8vIENyZWF0ZSBzZXNzaW9uIHJlcG9zaXRvcnkgaW5zdGFuY2UgZm9yIHNlc3Npb24gdmFsaWRhdGlvblxuY29uc3Qgc2Vzc2lvblJlcG9zaXRvcnkgPSBuZXcgQ29va2llU2Vzc2lvblJlcG9zaXRvcnkoKTtcblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBHZXQgZ2FtZSBkYXRhIGZvciBhbnN3ZXIgc3VibWlzc2lvbiBwYWdlXG4gKiBAcGFyYW0gZ2FtZUlkIC0gR2FtZSBJRCB0byByZXRyaWV2ZVxuICogQHJldHVybnMgR2FtZSBkYXRhIG9yIGVycm9yIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHYW1lRm9yQW5zd2Vyc0FjdGlvbihnYW1lSWQ6IHN0cmluZyk6IFByb21pc2U8R2V0R2FtZUZvckFuc3dlcnNSZXNwb25zZT4ge1xuICBjb25zdCBnYW1lUmVwb3NpdG9yeSA9IGNyZWF0ZUdhbWVSZXBvc2l0b3J5KCk7XG4gIGNvbnN0IHVzZUNhc2UgPSBuZXcgR2V0R2FtZUZvckFuc3dlcnMoZ2FtZVJlcG9zaXRvcnkpO1xuXG4gIHJldHVybiBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoZ2FtZUlkKTtcbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBTdWJtaXQgYW5zd2VyXG4gKiBAcGFyYW0gZm9ybURhdGEgLSBGb3JtIGRhdGEgY29udGFpbmluZyBnYW1lSWQgYW5kIHNlbGVjdGlvbnNcbiAqIEByZXR1cm5zIFN1Y2Nlc3MgcmVzcG9uc2Ugd2l0aCBhbnN3ZXJJZCBvciB2YWxpZGF0aW9uIGVycm9yc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0QW5zd2VyQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8XG4gIHwgeyBzdWNjZXNzOiB0cnVlOyBkYXRhOiB7IGFuc3dlcklkOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9IH1cbiAgfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9XG4+IHtcbiAgLy8gR2V0IHNlc3Npb25cbiAgbGV0IHNlc3Npb25JZDogc3RyaW5nO1xuICBsZXQgbmlja25hbWU6IHN0cmluZztcblxuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb25TZXJ2aWNlID0gU2Vzc2lvblNlcnZpY2VDb250YWluZXIuZ2V0U2Vzc2lvblNlcnZpY2UoKTtcbiAgICBzZXNzaW9uSWQgPSBhd2FpdCBzZXNzaW9uU2VydmljZS5yZXF1aXJlQ3VycmVudFNlc3Npb24oKTtcblxuICAgIC8vIFVzZSBWYWxpZGF0ZVNlc3Npb24gdG8gZ2V0IHNlc3Npb24gZGF0YSB3aXRoIG5pY2tuYW1lXG4gICAgY29uc3QgdmFsaWRhdGVVc2VDYXNlID0gbmV3IFZhbGlkYXRlU2Vzc2lvbihzZXNzaW9uUmVwb3NpdG9yeSk7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHZhbGlkYXRlVXNlQ2FzZS5leGVjdXRlKHNlc3Npb25JZCk7XG5cbiAgICAvLyBVc2Ugbmlja25hbWUgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgdXNlIGRlZmF1bHQgbmFtZSBiYXNlZCBvbiBzZXNzaW9uSWRcbiAgICBuaWNrbmFtZSA9IHNlc3Npb24/Lm5pY2tuYW1lID8/IGDlj4LliqDogIVfJHtzZXNzaW9uSWQuc2xpY2UoMCwgOCl9YDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbYXdhaXQgdCgnYWN0aW9uLnNlc3Npb24ubm90Rm91bmQnKV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvLyBQYXJzZSBmb3JtIGRhdGFcbiAgY29uc3QgZ2FtZUlkID0gZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHNlbGVjdGlvbnNSYXcgPSBmb3JtRGF0YS5nZXQoJ3NlbGVjdGlvbnMnKSBhcyBzdHJpbmc7XG5cbiAgbGV0IHNlbGVjdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIHRyeSB7XG4gICAgc2VsZWN0aW9ucyA9IEpTT04ucGFyc2Uoc2VsZWN0aW9uc1Jhdyk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yczoge1xuICAgICAgICBzZWxlY3Rpb25zOiBbYXdhaXQgdCgnZXJyb3JzLmludmFsaWQnKV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBpbnB1dFxuICBjb25zdCB2YWxpZGF0aW9uID0gU3VibWl0QW5zd2VyU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgZ2FtZUlkLFxuICAgIHNlbGVjdGlvbnMsXG4gIH0pO1xuXG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc3QgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGlzc3VlIG9mIHZhbGlkYXRpb24uZXJyb3IuaXNzdWVzKSB7XG4gICAgICBjb25zdCBwYXRoID0gaXNzdWUucGF0aC5qb2luKCcuJyk7XG4gICAgICBpZiAoIWVycm9yc1twYXRoXSkge1xuICAgICAgICBlcnJvcnNbcGF0aF0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGVycm9yc1twYXRoXT8ucHVzaChpc3N1ZS5tZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzLFxuICAgIH07XG4gIH1cblxuICAvLyBFeGVjdXRlIHVzZSBjYXNlXG4gIGNvbnN0IGdhbWVSZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgY29uc3QgYW5zd2VyUmVwb3NpdG9yeSA9IGNyZWF0ZUFuc3dlclJlcG9zaXRvcnkoKTtcbiAgY29uc3QgcGFydGljaXBhdGlvblJlcG9zaXRvcnkgPSBjcmVhdGVQYXJ0aWNpcGF0aW9uUmVwb3NpdG9yeSgpO1xuXG4gIGNvbnN0IHVzZUNhc2UgPSBuZXcgU3VibWl0QW5zd2VyKGFuc3dlclJlcG9zaXRvcnksIHBhcnRpY2lwYXRpb25SZXBvc2l0b3J5LCBnYW1lUmVwb3NpdG9yeSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlQ2FzZS5leGVjdXRlKHtcbiAgICBnYW1lSWQsXG4gICAgc2Vzc2lvbklkLFxuICAgIG5pY2tuYW1lLFxuICAgIHNlbGVjdGlvbnMsXG4gIH0pO1xuXG4gIC8vIENvbnZlcnQgdXNlIGNhc2UgcmVzdWx0IHRvIHNlcnZlciBhY3Rpb24gcmVzdWx0XG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfTtcbiAgfVxuXG4gIC8vIE1hcCBlcnJvciBjb2RlcyB0byB1c2VyLWZyaWVuZGx5IG1lc3NhZ2VzXG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgZXJyb3JzOiB7XG4gICAgICBfZm9ybTogW3Jlc3VsdC5lcnJvci5tZXNzYWdlXSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0F3Q3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pages/AnswerSubmissionPage/hooks/useAnswerSubmission.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useAnswerSubmission Hook
 * Feature: 001-lie-detection-answers
 * Manages answer selection state, localStorage persistence, and submission
 */ __turbopack_context__.s([
    "useAnswerSubmission",
    ()=>useAnswerSubmission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6fe395__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:6fe395 [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useAnswerSubmission({ gameId, presenters, onSuccess, onError }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [selections, setSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const storageKey = `answer-${gameId}`;
    // Load selections from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnswerSubmission.useEffect": ()=>{
            try {
                const saved = localStorage.getItem(storageKey);
                if (saved) {
                    const parsed = JSON.parse(saved);
                    setSelections(parsed);
                }
            } catch (err) {
                // Handle corrupted localStorage data
                console.error('Failed to load selections from localStorage:', err);
            }
        }
    }["useAnswerSubmission.useEffect"], [
        storageKey
    ]);
    // Save selections to localStorage whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnswerSubmission.useEffect": ()=>{
            if (Object.keys(selections).length > 0) {
                localStorage.setItem(storageKey, JSON.stringify(selections));
            }
        }
    }["useAnswerSubmission.useEffect"], [
        selections,
        storageKey
    ]);
    // Select episode for a presenter
    const selectEpisode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnswerSubmission.useCallback[selectEpisode]": (presenterId, episodeId)=>{
            setSelections({
                "useAnswerSubmission.useCallback[selectEpisode]": (prev)=>({
                        ...prev,
                        [presenterId]: episodeId
                    })
            }["useAnswerSubmission.useCallback[selectEpisode]"]);
            // Clear errors when user makes changes
            setError(null);
            setSuccessMessage(null);
        }
    }["useAnswerSubmission.useCallback[selectEpisode]"], []);
    // Calculate if all presenters have selections
    const isComplete = presenters.length > 0 && presenters.every((presenter)=>selections[presenter.id] !== undefined);
    // Submit answer
    const submit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnswerSubmission.useCallback[submit]": async ()=>{
            setIsSubmitting(true);
            setError(null);
            setSuccessMessage(null);
            try {
                const formData = new FormData();
                formData.append('gameId', gameId);
                formData.append('selections', JSON.stringify(selections));
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6fe395__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitAnswerAction"])(formData);
                if (result.success) {
                    setSuccessMessage(result.data.message);
                    // Clear localStorage after successful submission
                    localStorage.removeItem(storageKey);
                    onSuccess?.();
                } else {
                    const errorMessage = result.errors._form?.[0] || result.errors.selections?.[0] || t('action.answer.submit.error');
                    setError(errorMessage);
                    onError?.(errorMessage);
                }
            } catch (_err) {
                const errorMessage = t('errors.unexpectedError');
                setError(errorMessage);
                onError?.(errorMessage);
            } finally{
                setIsSubmitting(false);
            }
        }
    }["useAnswerSubmission.useCallback[submit]"], [
        gameId,
        selections,
        storageKey,
        onSuccess,
        onError,
        t
    ]);
    // Reset selections and messages
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnswerSubmission.useCallback[reset]": ()=>{
            setSelections({});
            setError(null);
            setSuccessMessage(null);
            localStorage.removeItem(storageKey);
        }
    }["useAnswerSubmission.useCallback[reset]"], [
        storageKey
    ]);
    return {
        selections,
        selectEpisode,
        isComplete,
        isSubmitting,
        error,
        successMessage,
        submit,
        reset
    };
}
_s(useAnswerSubmission, "l1U53McIF1FPkGvhk2ZOGr0/Ji0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pages/AnswerSubmissionPage/hooks/useAnswerSubmissionPage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useAnswerSubmissionPage Hook
 * Feature: 001-lie-detection-answers
 * Wrapper hook that handles data fetching and coordinates with useAnswerSubmission
 */ __turbopack_context__.s([
    "useAnswerSubmissionPage",
    ()=>useAnswerSubmissionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$AnswerSubmissionPage$2f$hooks$2f$useAnswerSubmission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/AnswerSubmissionPage/hooks/useAnswerSubmission.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/**
 * Transform PresenterWithLieDto to Presenter format (excluding isLie flag)
 * This ensures participants cannot see which episodes are lies
 */ function transformPresenter(dto) {
    return {
        id: dto.id,
        name: dto.nickname,
        episodes: dto.episodes.map((episode)=>({
                id: episode.id,
                text: episode.text
            }))
    };
}
function useAnswerSubmissionPage({ gameId }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [presenters, setPresenters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fetchError, setFetchError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch presenters on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnswerSubmissionPage.useEffect": ()=>{
            let isMounted = true;
            async function fetchPresenters() {
                try {
                    setIsLoading(true);
                    setFetchError(null);
                    // Fetch from API endpoint instead of server action
                    const response = await fetch(`/api/games/${gameId}/presenters`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        credentials: 'same-origin'
                    });
                    if (!isMounted) return;
                    if (response.ok) {
                        const result = await response.json();
                        // Transform DTO to remove isLie flag
                        const transformed = result.presenters.map(transformPresenter);
                        setPresenters(transformed);
                    } else {
                        const error = await response.json();
                        setFetchError(error.details || error.error || t('errors.unexpectedError'));
                    }
                } catch (_err) {
                    if (!isMounted) return;
                    setFetchError(t('errors.unexpectedError'));
                } finally{
                    if (isMounted) {
                        setIsLoading(false);
                    }
                }
            }
            fetchPresenters();
            return ({
                "useAnswerSubmissionPage.useEffect": ()=>{
                    isMounted = false;
                }
            })["useAnswerSubmissionPage.useEffect"];
        }
    }["useAnswerSubmissionPage.useEffect"], [
        gameId,
        t
    ]);
    // Handle successful submission - redirect to top page
    const handleSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnswerSubmissionPage.useCallback[handleSuccess]": ()=>{
            router.push('/');
        }
    }["useAnswerSubmissionPage.useCallback[handleSuccess]"], [
        router
    ]);
    // Use answer submission hook (only after presenters are loaded)
    const { selections, selectEpisode, isComplete, isSubmitting, error: submissionError, successMessage, submit, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$AnswerSubmissionPage$2f$hooks$2f$useAnswerSubmission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnswerSubmission"])({
        gameId,
        presenters,
        onSuccess: handleSuccess
    });
    // Combine errors (fetch error takes precedence)
    const error = fetchError || submissionError;
    // Wrap handlers to match component's expected API
    const handleSelectEpisode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnswerSubmissionPage.useCallback[handleSelectEpisode]": (presenterId, episodeId)=>{
            selectEpisode(presenterId, episodeId);
        }
    }["useAnswerSubmissionPage.useCallback[handleSelectEpisode]"], [
        selectEpisode
    ]);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnswerSubmissionPage.useCallback[handleSubmit]": async ()=>{
            await submit();
        }
    }["useAnswerSubmissionPage.useCallback[handleSubmit]"], [
        submit
    ]);
    const handleReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnswerSubmissionPage.useCallback[handleReset]": ()=>{
            reset();
        }
    }["useAnswerSubmissionPage.useCallback[handleReset]"], [
        reset
    ]);
    // Build formData object
    const formData = !isLoading && presenters.length > 0 ? {
        presenters,
        selections,
        isComplete,
        isSubmitting
    } : null;
    return {
        formData,
        isLoading,
        error,
        successMessage,
        handleSelectEpisode,
        handleSubmit,
        handleReset
    };
}
_s(useAnswerSubmissionPage, "qsiczjpEV56lrS38OXuA27SNDAk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$AnswerSubmissionPage$2f$hooks$2f$useAnswerSubmission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnswerSubmission"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pages/AnswerSubmissionPage/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * AnswerSubmissionPage Component
 * Feature: 001-lie-detection-answers
 * Page for submitting answers to a game
 * Task: T043
 */ __turbopack_context__.s([
    "AnswerSubmissionPage",
    ()=>AnswerSubmissionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$answer$2f$GameAnswerForm$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/domain/answer/GameAnswerForm/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$AnswerSubmissionPage$2f$hooks$2f$useAnswerSubmissionPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/AnswerSubmissionPage/hooks/useAnswerSubmissionPage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const AnswerSubmissionPage = ({ gameId })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { formData, isLoading, error, successMessage, handleSelectEpisode, handleSubmit, handleReset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$AnswerSubmissionPage$2f$hooks$2f$useAnswerSubmissionPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnswerSubmissionPage"])({
        gameId
    });
    // Error state (check error first before loading check)
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                    fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-4xl px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "alert",
                            className: "bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Loading state
    if (isLoading || !formData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                    fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-4xl px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: t('common.loading')
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-gray-900",
                                    children: t('answer.answerGame')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-gray-600",
                                    children: t('form.answer.selectEpisodes')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$answer$2f$GameAnswerForm$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameAnswerForm"], {
                            presenters: formData.presenters,
                            selections: formData.selections,
                            isComplete: formData.isComplete,
                            isSubmitting: formData.isSubmitting,
                            error: error,
                            successMessage: successMessage,
                            onSelectEpisode: handleSelectEpisode,
                            onSubmit: handleSubmit,
                            onReset: handleReset
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/AnswerSubmissionPage/index.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnswerSubmissionPage, "0kfFcEW19YSCcccL3XyjTSCdy2o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$AnswerSubmissionPage$2f$hooks$2f$useAnswerSubmissionPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnswerSubmissionPage"]
    ];
});
_c = AnswerSubmissionPage;
var _c;
__turbopack_context__.k.register(_c, "AnswerSubmissionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
]);

//# sourceMappingURL=_c9161cd5._.js.map