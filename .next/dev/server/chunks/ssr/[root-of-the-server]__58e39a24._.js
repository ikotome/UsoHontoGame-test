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
"[project]/src/app/actions/data:b8dc0f [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40bd84b426374a76e431f3a26460d495dbe5f98fa1":"closeGameAction"},"src/app/actions/game.ts",""] */ __turbopack_context__.s([
    "closeGameAction",
    ()=>closeGameAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var closeGameAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40bd84b426374a76e431f3a26460d495dbe5f98fa1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "closeGameAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2FtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbi8vIEdhbWUgU2VydmVyIEFjdGlvbnNcbi8vIEZlYXR1cmU6IDAwMi1nYW1lLXByZXBhcmF0aW9uXG4vLyBTZXJ2ZXIgQWN0aW9ucyB3aXRoIFpvZCB2YWxpZGF0aW9uIGZvciBnYW1lIG1hbmFnZW1lbnRcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHQgfSBmcm9tICdAL2xpYi9pMThuL3NlcnZlcic7XG5pbXBvcnQgdHlwZSB7IEdhbWVEZXRhaWxEdG8gfSBmcm9tICdAL3NlcnZlci9hcHBsaWNhdGlvbi9kdG8vR2FtZURldGFpbER0byc7XG5pbXBvcnQgdHlwZSB7IENyZWF0ZUdhbWVPdXRwdXQsIEdhbWVNYW5hZ2VtZW50RHRvIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vZHRvL0dhbWVEdG8nO1xuaW1wb3J0IHsgQ2xvc2VHYW1lIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0Nsb3NlR2FtZSc7XG5pbXBvcnQgeyBDcmVhdGVHYW1lIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0NyZWF0ZUdhbWUnO1xuaW1wb3J0IHsgRGVsZXRlR2FtZSB9IGZyb20gJ0Avc2VydmVyL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9nYW1lcy9EZWxldGVHYW1lJztcbmltcG9ydCB7IEdldEdhbWVzQnlDcmVhdG9yIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0dldEdhbWVzQnlDcmVhdG9yJztcbmltcG9ydCB7IFN0YXJ0QWNjZXB0aW5nUmVzcG9uc2VzIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL1N0YXJ0QWNjZXB0aW5nUmVzcG9uc2VzJztcbmltcG9ydCB7IFVwZGF0ZUdhbWVTZXR0aW5ncyB9IGZyb20gJ0Avc2VydmVyL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9nYW1lcy9VcGRhdGVHYW1lU2V0dGluZ3MnO1xuaW1wb3J0IHsgVmFsaWRhdGVTdGF0dXNUcmFuc2l0aW9uIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL1ZhbGlkYXRlU3RhdHVzVHJhbnNpdGlvbic7XG5pbXBvcnQge1xuICBDbG9zZUdhbWVTY2hlbWEsXG4gIENyZWF0ZUdhbWVTY2hlbWEsXG4gIERlbGV0ZUdhbWVTY2hlbWEsXG4gIFN0YXJ0QWNjZXB0aW5nU2NoZW1hLFxuICBTdGFydEdhbWVTY2hlbWEsXG4gIFVwZGF0ZUdhbWVTY2hlbWEsXG59IGZyb20gJ0Avc2VydmVyL2RvbWFpbi9zY2hlbWFzL2dhbWVTY2hlbWFzJztcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJ0Avc2VydmVyL2RvbWFpbi92YWx1ZS1vYmplY3RzL0dhbWVJZCc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZUNvbnRhaW5lciB9IGZyb20gJ0Avc2VydmVyL2luZnJhc3RydWN0dXJlL2RpL1Nlc3Npb25TZXJ2aWNlQ29udGFpbmVyJztcbmltcG9ydCB7IGNyZWF0ZUdhbWVSZXBvc2l0b3J5IH0gZnJvbSAnQC9zZXJ2ZXIvaW5mcmFzdHJ1Y3R1cmUvcmVwb3NpdG9yaWVzJztcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHNlc3Npb24gSUQgd2l0aCBjb25zaXN0ZW50IGVycm9yIGhhbmRsaW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb25JZE9yRXJyb3IoKTogUHJvbWlzZTxcbiAgc3RyaW5nIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvblNlcnZpY2UgPSBTZXNzaW9uU2VydmljZUNvbnRhaW5lci5nZXRTZXNzaW9uU2VydmljZSgpO1xuICAgIHJldHVybiBhd2FpdCBzZXNzaW9uU2VydmljZS5yZXF1aXJlQ3VycmVudFNlc3Npb24oKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbYXdhaXQgdCgnYWN0aW9uLnNlc3Npb24ubm90Rm91bmQnKV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBDcmVhdGUgbmV3IGdhbWVcbiAqIFZhbGlkYXRlcyBpbnB1dCB3aXRoIFpvZCwgY3JlYXRlcyBnYW1lIHZpYSBDcmVhdGVHYW1lIHVzZSBjYXNlXG4gKiBAcGFyYW0gZm9ybURhdGEgRm9ybSBkYXRhIGZyb20gR2FtZUZvcm1cbiAqIEByZXR1cm5zIENyZWF0ZWQgZ2FtZSBkYXRhIG9yIHZhbGlkYXRpb24gZXJyb3JzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8XG4gIHsgc3VjY2VzczogdHJ1ZTsgZ2FtZTogQ3JlYXRlR2FtZU91dHB1dCB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgcGFyc2UgZm9ybSBkYXRhXG4gICAgY29uc3QgZ2FtZU5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKTtcbiAgICBjb25zdCByYXdEYXRhID0ge1xuICAgICAgbmFtZTogZ2FtZU5hbWUgPT09ICcnID8gbnVsbCA6IChnYW1lTmFtZT8udG9TdHJpbmcoKSA/PyBudWxsKSxcbiAgICAgIHBsYXllckxpbWl0OiBOdW1iZXIoZm9ybURhdGEuZ2V0KCdwbGF5ZXJMaW1pdCcpKSxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IENyZWF0ZUdhbWVTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRCAobW9kZXJhdG9yL2NyZWF0b3IgSUQpXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uSWRSZXN1bHQ7XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBFeGVjdXRlIENyZWF0ZUdhbWUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IENyZWF0ZUdhbWUocmVwb3NpdG9yeSk7XG5cbiAgICBjb25zdCBnYW1lID0gYXdhaXQgdXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGNyZWF0b3JJZDogc2Vzc2lvbklkLFxuICAgICAgbmFtZTogdmFsaWRhdGlvblJlc3VsdC5kYXRhLm5hbWUsXG4gICAgICBwbGF5ZXJMaW1pdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnBsYXllckxpbWl0LFxuICAgIH0pO1xuXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyBmb3IgY2FjaGUgbWFuYWdlbWVudFxuICAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9nYW1lcycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBnYW1lOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgX2Zvcm06IFtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IGF3YWl0IHQoJ2FjdGlvbi5nYW1lLmNyZWF0ZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IENyZWF0ZSBnYW1lIGFuZCByZWRpcmVjdCB0byBnYW1lIGxpc3RcbiAqIENvbnZlbmllbmNlIHdyYXBwZXIgdGhhdCByZWRpcmVjdHMgb24gc3VjY2Vzc1xuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSBmcm9tIEdhbWVGb3JtXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYW1lQW5kUmVkaXJlY3QoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUdhbWVBY3Rpb24oZm9ybURhdGEpO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIC8vIFJlZGlyZWN0IHRvIGdhbWUgbGlzdCBvciBnYW1lIGRldGFpbCBwYWdlXG4gICAgcmVkaXJlY3QoJy8nKTtcbiAgfVxuXG4gIC8vIE9uIGZhaWx1cmUsIGxldCB0aGUgZm9ybSBjb21wb25lbnQgaGFuZGxlIGVycm9yc1xuICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuIGFzIHRoZSBmb3JtIHdpbGwgY2FsbCBjcmVhdGVHYW1lQWN0aW9uIGRpcmVjdGx5XG4gIHRocm93IG5ldyBFcnJvcignR2FtZSBjcmVhdGlvbiBmYWlsZWQnKTtcbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBTdGFydCBhY2NlcHRpbmcgcmVzcG9uc2VzXG4gKiBUcmFuc2l0aW9ucyBnYW1lIGZyb20g5rqW5YKZ5LitIHRvIOWHuumhjOS4rVxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZFxuICogQHJldHVybnMgU3VjY2VzcyBzdGF0dXMgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0QWNjZXB0aW5nQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSxcbiAgICB9O1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IFN0YXJ0QWNjZXB0aW5nU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IF9zZXNzaW9uSWQgPSBzZXNzaW9uSWRSZXN1bHQgYXMgc3RyaW5nO1xuXG4gICAgLy8gRXhlY3V0ZSB1c2UgY2FzZVxuICAgIGNvbnN0IHJlcG9zaXRvcnkgPSBjcmVhdGVHYW1lUmVwb3NpdG9yeSgpO1xuICAgIGNvbnN0IHVzZUNhc2UgPSBuZXcgU3RhcnRBY2NlcHRpbmdSZXNwb25zZXMocmVwb3NpdG9yeSk7XG5cbiAgICBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgIH0pO1xuXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyBmb3IgY2FjaGUgbWFuYWdlbWVudFxuICAgIHJldmFsaWRhdGVQYXRoKCcvZ2FtZXMnKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2dhbWVzLyR7dmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZH1gKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3RhcnQgYWNjZXB0aW5nIHJlc3BvbnNlczonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5zdGFydC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IEdldCBhbGwgZ2FtZXMgZm9yIGN1cnJlbnQgY3JlYXRvclxuICogQHJldHVybnMgTGlzdCBvZiBnYW1lcyB3aXRoIG1hbmFnZW1lbnQgaW5mbyBvciBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdhbWVzQWN0aW9uKCk6IFByb21pc2U8XG4gIHwgeyBzdWNjZXNzOiB0cnVlOyBnYW1lczogR2FtZU1hbmFnZW1lbnREdG9bXSB9XG4gIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGNyZWF0b3IgSUQpXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLm5vdEZvdW5kJyldLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbklkUmVzdWx0IGFzIHN0cmluZztcblxuICAgIC8vIEV4ZWN1dGUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IEdldEdhbWVzQnlDcmVhdG9yKHJlcG9zaXRvcnkpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGNyZWF0b3JJZDogc2Vzc2lvbklkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lczogcmVzdWx0LmdhbWVzLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBnYW1lczonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5mZXRjaC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IEdldCBnYW1lIGRldGFpbCBieSBJRFxuICogRmV0Y2hlcyBnYW1lIGRldGFpbHMgZm9yIGVkaXRpbmcvdmlld2luZ1xuICogQHBhcmFtIGdhbWVJZCBHYW1lIElEIHRvIGZldGNoXG4gKiBAcmV0dXJucyBHYW1lIGRldGFpbCBvciBlcnJvclxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2FtZURldGFpbEFjdGlvbihcbiAgZ2FtZUlkOiBzdHJpbmdcbik6IFByb21pc2U8XG4gIHsgc3VjY2VzczogdHJ1ZTsgZ2FtZTogR2FtZURldGFpbER0byB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBHZXQgZ2FtZSBmcm9tIHJlcG9zaXRvcnlcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCBnYW1lID0gYXdhaXQgcmVwb3NpdG9yeS5maW5kQnlJZChuZXcgR2FtZUlkKGdhbWVJZCkpO1xuXG4gICAgaWYgKCFnYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdnYW1lLmdhbWVOb3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYXV0aG9yaXphdGlvbiAtIG9ubHkgY3JlYXRvciBjYW4gdmlldy9lZGl0XG4gICAgaWYgKGdhbWUuY3JlYXRvcklkICE9PSBzZXNzaW9uSWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLnVuYXV0aG9yaXplZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gTWFwIHRvIERUT1xuICAgIGNvbnN0IGdhbWVEZXRhaWxEdG86IEdhbWVEZXRhaWxEdG8gPSB7XG4gICAgICBpZDogZ2FtZS5pZC50b1N0cmluZygpLFxuICAgICAgbmFtZTogZ2FtZS5uYW1lLFxuICAgICAgc3RhdHVzOiBnYW1lLnN0YXR1cy50b1N0cmluZygpLFxuICAgICAgbWF4UGxheWVyczogZ2FtZS5tYXhQbGF5ZXJzLFxuICAgICAgY3VycmVudFBsYXllcnM6IGdhbWUuY3VycmVudFBsYXllcnMsXG4gICAgICBhdmFpbGFibGVTbG90czogZ2FtZS5hdmFpbGFibGVTbG90cyxcbiAgICAgIGNyZWF0b3JJZDogZ2FtZS5jcmVhdG9ySWQsXG4gICAgICBjcmVhdGVkQXQ6IGdhbWUuY3JlYXRlZEF0LFxuICAgICAgdXBkYXRlZEF0OiBnYW1lLnVwZGF0ZWRBdCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lOiBnYW1lRGV0YWlsRHRvLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBnYW1lIGRldGFpbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5mZXRjaC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IFVwZGF0ZSBnYW1lIHNldHRpbmdzXG4gKiBVcGRhdGVzIGdhbWUgc2V0dGluZ3MgKHBsYXllciBsaW1pdCkgd2hlbiBnYW1lIGlzIGluIHByZXBhcmF0aW9uIHN0YXR1c1xuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZCBhbmQgcGxheWVyTGltaXRcbiAqIEByZXR1cm5zIFVwZGF0ZWQgZ2FtZSBkZXRhaWwgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdhbWVBY3Rpb24oXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTxcbiAgeyBzdWNjZXNzOiB0cnVlOyBnYW1lOiBHYW1lRGV0YWlsRHRvIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9XG4+IHtcbiAgdHJ5IHtcbiAgICAvLyBFeHRyYWN0IGFuZCBwYXJzZSBmb3JtIGRhdGFcbiAgICBjb25zdCByYXdEYXRhID0ge1xuICAgICAgZ2FtZUlkOiBmb3JtRGF0YS5nZXQoJ2dhbWVJZCcpIGFzIHN0cmluZyxcbiAgICAgIHBsYXllckxpbWl0OiBmb3JtRGF0YS5nZXQoJ3BsYXllckxpbWl0JykgPyBOdW1iZXIoZm9ybURhdGEuZ2V0KCdwbGF5ZXJMaW1pdCcpKSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IFVwZGF0ZUdhbWVTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRCAoZm9yIGF1dGhvcml6YXRpb24pXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLm5vdEZvdW5kJyldLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbklkUmVzdWx0IGFzIHN0cmluZztcblxuICAgIC8vIEV4ZWN1dGUgVXBkYXRlR2FtZVNldHRpbmdzIHVzZSBjYXNlXG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IGNyZWF0ZUdhbWVSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlQ2FzZSA9IG5ldyBVcGRhdGVHYW1lU2V0dGluZ3MocmVwb3NpdG9yeSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgcGxheWVyTGltaXQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5wbGF5ZXJMaW1pdCxcbiAgICAgIHJlcXVlc3RlcklkOiBzZXNzaW9uSWQsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3VsdC5nYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uZ2FtZS51cGRhdGUuZXJyb3InKV0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnL2dhbWVzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGdhbWU6IHJlc3VsdC5nYW1lLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBnYW1lOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgX2Zvcm06IFtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IGF3YWl0IHQoJ2FjdGlvbi5nYW1lLnVwZGF0ZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IERlbGV0ZSBnYW1lXG4gKiBEZWxldGVzIGEgZ2FtZSB3aXRoIGF1dGhvcml6YXRpb24gY2hlY2tcbiAqIEBwYXJhbSBmb3JtRGF0YSBGb3JtIGRhdGEgd2l0aCBnYW1lSWRcbiAqIEByZXR1cm5zIFN1Y2Nlc3Mgc3RhdHVzIG9yIHZhbGlkYXRpb24gZXJyb3JzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSBhcyBzdHJpbmcsXG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBEZWxldGVHYW1lU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBFeGVjdXRlIERlbGV0ZUdhbWUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IERlbGV0ZUdhbWUocmVwb3NpdG9yeSk7XG5cbiAgICBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgcmVxdWVzdGVySWQ6IHNlc3Npb25JZCxcbiAgICB9KTtcblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZ2FtZXMnKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGdhbWU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yczoge1xuICAgICAgICBfZm9ybTogW2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogYXdhaXQgdCgnYWN0aW9uLmdhbWUuZGVsZXRlLmVycm9yJyldLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogU2VydmVyIEFjdGlvbjogU3RhcnQgR2FtZSAoU3RhdHVzIFRyYW5zaXRpb24pXG4gKiBGZWF0dXJlOiAwMDQtc3RhdHVzLXRyYW5zaXRpb25cbiAqIFZhbGlkYXRlcyBhbmQgdHJhbnNpdGlvbnMgZ2FtZSBmcm9tIOa6luWCmeS4rSB0byDlh7rpoYzkuK0gd2l0aCBwcmVzZW50ZXIgdmFsaWRhdGlvblxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZFxuICogQHJldHVybnMgU3VjY2VzcyBzdGF0dXMgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZUFjdGlvbihcbiAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPHsgc3VjY2VzczogdHJ1ZSB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfT4ge1xuICB0cnkge1xuICAgIC8vIEV4dHJhY3QgYW5kIHZhbGlkYXRlIGZvcm0gZGF0YVxuICAgIGNvbnN0IHJhd0RhdGEgPSB7XG4gICAgICBnYW1lSWQ6IGZvcm1EYXRhLmdldCgnZ2FtZUlkJyksXG4gICAgICBzZXNzaW9uSWQ6ICcnLCAvLyBXaWxsIGJlIGZpbGxlZCBiZWxvd1xuICAgIH07XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRFxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4gc2Vzc2lvbklkUmVzdWx0O1xuICAgIH1cbiAgICByYXdEYXRhLnNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gU3RhcnRHYW1lU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgc3RhdHVzIHRyYW5zaXRpb24gZmlyc3RcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB2YWxpZGF0ZVVzZUNhc2UgPSBuZXcgVmFsaWRhdGVTdGF0dXNUcmFuc2l0aW9uKHJlcG9zaXRvcnkpO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3BvbnNlID0gYXdhaXQgdmFsaWRhdGVVc2VDYXNlLmV4ZWN1dGUoXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgJ+WHuumhjOS4rScsXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuc2Vzc2lvbklkXG4gICAgKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3BvbnNlLmNhblRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogdmFsaWRhdGlvblJlc3BvbnNlLmVycm9ycy5tYXAoKGVycikgPT4gZXJyLm1lc3NhZ2UpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIHRoZSBzdGF0dXMgdHJhbnNpdGlvblxuICAgIGNvbnN0IHN0YXJ0VXNlQ2FzZSA9IG5ldyBTdGFydEFjY2VwdGluZ1Jlc3BvbnNlcyhyZXBvc2l0b3J5KTtcbiAgICBhd2FpdCBzdGFydFVzZUNhc2UuZXhlY3V0ZSh7XG4gICAgICBnYW1lSWQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWQsXG4gICAgfSk7XG5cbiAgICAvLyBSZXZhbGlkYXRlIHBhdGhzIGZvciBjYWNoZSBtYW5hZ2VtZW50XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9nYW1lcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZ2FtZXMvJHt2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkfWApO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZ2FtZXMvJHt2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkfS9wcmVzZW50ZXJzYCk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHN0YXJ0IGdhbWU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yczoge1xuICAgICAgICBfZm9ybTogW2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogYXdhaXQgdCgnYWN0aW9uLmdhbWUuc3RhcnQuZXJyb3InKV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBDbG9zZSBHYW1lIChTdGF0dXMgVHJhbnNpdGlvbilcbiAqIEZlYXR1cmU6IDAwNC1zdGF0dXMtdHJhbnNpdGlvblxuICogVmFsaWRhdGVzIGFuZCB0cmFuc2l0aW9ucyBnYW1lIGZyb20g5Ye66aGM5LitIHRvIOe3oOWIhyB3aXRoIGNvbmZpcm1hdGlvblxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZCBhbmQgY29uZmlybWVkXG4gKiBAcmV0dXJucyBTdWNjZXNzIHN0YXR1cyBvciB2YWxpZGF0aW9uIGVycm9yc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSxcbiAgICAgIHNlc3Npb25JZDogJycsIC8vIFdpbGwgYmUgZmlsbGVkIGJlbG93XG4gICAgICBjb25maXJtZWQ6IGZvcm1EYXRhLmdldCgnY29uZmlybWVkJykgPT09ICd0cnVlJyxcbiAgICB9O1xuXG4gICAgLy8gR2V0IHNlc3Npb24gSURcbiAgICBjb25zdCBzZXNzaW9uSWRSZXN1bHQgPSBhd2FpdCBnZXRTZXNzaW9uSWRPckVycm9yKCk7XG4gICAgaWYgKHR5cGVvZiBzZXNzaW9uSWRSZXN1bHQgPT09ICdvYmplY3QnICYmICFzZXNzaW9uSWRSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHNlc3Npb25JZFJlc3VsdDtcbiAgICB9XG4gICAgcmF3RGF0YS5zZXNzaW9uSWQgPSBzZXNzaW9uSWRSZXN1bHQgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IENsb3NlR2FtZVNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yczogdmFsaWRhdGlvblJlc3VsdC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIHN0YXR1cyB0cmFuc2l0aW9uIGZpcnN0XG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IGNyZWF0ZUdhbWVSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdmFsaWRhdGVVc2VDYXNlID0gbmV3IFZhbGlkYXRlU3RhdHVzVHJhbnNpdGlvbihyZXBvc2l0b3J5KTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXNwb25zZSA9IGF3YWl0IHZhbGlkYXRlVXNlQ2FzZS5leGVjdXRlKFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZCxcbiAgICAgICfnt6DliIcnLFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5kYXRhLnNlc3Npb25JZFxuICAgICk7XG5cbiAgICBpZiAoIXZhbGlkYXRpb25SZXNwb25zZS5jYW5UcmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IHZhbGlkYXRpb25SZXNwb25zZS5lcnJvcnMubWFwKChlcnIpID0+IGVyci5tZXNzYWdlKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgc3RhdHVzIHRyYW5zaXRpb25cbiAgICBjb25zdCBjbG9zZVVzZUNhc2UgPSBuZXcgQ2xvc2VHYW1lKHJlcG9zaXRvcnkpO1xuICAgIGF3YWl0IGNsb3NlVXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGdhbWVJZDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZCxcbiAgICAgIHNlc3Npb25JZDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnNlc3Npb25JZCxcbiAgICB9KTtcblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnL2dhbWVzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9L3ByZXNlbnRlcnNgKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY2xvc2UgZ2FtZTonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5jbG9zZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnU0FvaEJzQiJ9
}),
"[project]/src/components/pages/GameDetailPage/hooks/useCloseGame.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useCloseGame Hook
 * Feature: 007-game-closure
 * Manages game closure operation with confirmation and error handling
 */ __turbopack_context__.s([
    "useCloseGame",
    ()=>useCloseGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8dc0f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:b8dc0f [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
function useCloseGame({ gameId, onSuccess, onError }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isClosing, setIsClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const closeGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // Prevent multiple simultaneous close attempts
        if (isClosing) return;
        // Show confirmation dialog
        const confirmed = window.confirm(t('action.game.close.confirm'));
        if (!confirmed) return;
        // Clear previous error
        setError(null);
        setIsClosing(true);
        try {
            const formData = new FormData();
            formData.append('gameId', gameId);
            formData.append('confirmed', 'true');
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8dc0f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["closeGameAction"])(formData);
            if (result.success) {
                // Success - call callback
                onSuccess?.();
            } else {
                // Server-side validation error
                const errorMessage = result.errors?._form?.[0] || t('action.game.close.error');
                setError(errorMessage);
                onError?.(errorMessage);
            }
        } catch (_err) {
            // Unexpected error (network, etc.)
            const errorMessage = t('action.game.close.error');
            setError(errorMessage);
            onError?.(errorMessage);
        } finally{
            setIsClosing(false);
        }
    }, [
        gameId,
        isClosing,
        onSuccess,
        onError,
        t
    ]);
    return {
        closeGame,
        isClosing,
        error
    };
}
}),
"[project]/src/components/domain/game/CloseGameButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * CloseGameButton Component
 * Feature: 007-game-closure
 * Button for moderators to close active games
 */ __turbopack_context__.s([
    "CloseGameButton",
    ()=>CloseGameButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$GameDetailPage$2f$hooks$2f$useCloseGame$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/GameDetailPage/hooks/useCloseGame.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function CloseGameButton({ gameId, gameStatus, onClosed, className = '' }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { closeGame, isClosing, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$GameDetailPage$2f$hooks$2f$useCloseGame$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCloseGame"])({
        gameId,
        onSuccess: ()=>{
            onClosed?.();
        },
        onError: (errorMessage)=>{
            // Error is already stored in the hook's state
            console.error('Failed to close game:', errorMessage);
        }
    });
    // Only show button when game is in 'active' status
    if (gameStatus !== t('game.status.active')) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: closeGame,
                disabled: isClosing,
                className: `
          rounded-md px-4 py-2 font-medium text-white
          transition-all duration-200
          ${isClosing ? 'cursor-not-allowed bg-gray-400 opacity-70' : 'bg-orange-600 hover:bg-orange-700 active:bg-orange-800'}
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
        `,
                "aria-label": isClosing ? t('status.labels.closing') : t('status.transition.active.toClosed'),
                "aria-busy": isClosing,
                children: isClosing ? t('status.labels.closing') : t('status.transition.active.toClosed')
            }, void 0, false, {
                fileName: "[project]/src/components/domain/game/CloseGameButton.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 rounded-md bg-red-50 p-3 text-sm text-red-800",
                role: "alert",
                "aria-live": "polite",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/domain/game/CloseGameButton.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/domain/game/CloseGameButton.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/actions/data:89b8c0 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4016cd595a286f43f421675dad182e5e9625b5e955":"deleteGameAction"},"src/app/actions/game.ts",""] */ __turbopack_context__.s([
    "deleteGameAction",
    ()=>deleteGameAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteGameAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4016cd595a286f43f421675dad182e5e9625b5e955", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteGameAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2FtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbi8vIEdhbWUgU2VydmVyIEFjdGlvbnNcbi8vIEZlYXR1cmU6IDAwMi1nYW1lLXByZXBhcmF0aW9uXG4vLyBTZXJ2ZXIgQWN0aW9ucyB3aXRoIFpvZCB2YWxpZGF0aW9uIGZvciBnYW1lIG1hbmFnZW1lbnRcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHQgfSBmcm9tICdAL2xpYi9pMThuL3NlcnZlcic7XG5pbXBvcnQgdHlwZSB7IEdhbWVEZXRhaWxEdG8gfSBmcm9tICdAL3NlcnZlci9hcHBsaWNhdGlvbi9kdG8vR2FtZURldGFpbER0byc7XG5pbXBvcnQgdHlwZSB7IENyZWF0ZUdhbWVPdXRwdXQsIEdhbWVNYW5hZ2VtZW50RHRvIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vZHRvL0dhbWVEdG8nO1xuaW1wb3J0IHsgQ2xvc2VHYW1lIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0Nsb3NlR2FtZSc7XG5pbXBvcnQgeyBDcmVhdGVHYW1lIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0NyZWF0ZUdhbWUnO1xuaW1wb3J0IHsgRGVsZXRlR2FtZSB9IGZyb20gJ0Avc2VydmVyL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9nYW1lcy9EZWxldGVHYW1lJztcbmltcG9ydCB7IEdldEdhbWVzQnlDcmVhdG9yIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0dldEdhbWVzQnlDcmVhdG9yJztcbmltcG9ydCB7IFN0YXJ0QWNjZXB0aW5nUmVzcG9uc2VzIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL1N0YXJ0QWNjZXB0aW5nUmVzcG9uc2VzJztcbmltcG9ydCB7IFVwZGF0ZUdhbWVTZXR0aW5ncyB9IGZyb20gJ0Avc2VydmVyL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9nYW1lcy9VcGRhdGVHYW1lU2V0dGluZ3MnO1xuaW1wb3J0IHsgVmFsaWRhdGVTdGF0dXNUcmFuc2l0aW9uIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL1ZhbGlkYXRlU3RhdHVzVHJhbnNpdGlvbic7XG5pbXBvcnQge1xuICBDbG9zZUdhbWVTY2hlbWEsXG4gIENyZWF0ZUdhbWVTY2hlbWEsXG4gIERlbGV0ZUdhbWVTY2hlbWEsXG4gIFN0YXJ0QWNjZXB0aW5nU2NoZW1hLFxuICBTdGFydEdhbWVTY2hlbWEsXG4gIFVwZGF0ZUdhbWVTY2hlbWEsXG59IGZyb20gJ0Avc2VydmVyL2RvbWFpbi9zY2hlbWFzL2dhbWVTY2hlbWFzJztcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJ0Avc2VydmVyL2RvbWFpbi92YWx1ZS1vYmplY3RzL0dhbWVJZCc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZUNvbnRhaW5lciB9IGZyb20gJ0Avc2VydmVyL2luZnJhc3RydWN0dXJlL2RpL1Nlc3Npb25TZXJ2aWNlQ29udGFpbmVyJztcbmltcG9ydCB7IGNyZWF0ZUdhbWVSZXBvc2l0b3J5IH0gZnJvbSAnQC9zZXJ2ZXIvaW5mcmFzdHJ1Y3R1cmUvcmVwb3NpdG9yaWVzJztcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHNlc3Npb24gSUQgd2l0aCBjb25zaXN0ZW50IGVycm9yIGhhbmRsaW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb25JZE9yRXJyb3IoKTogUHJvbWlzZTxcbiAgc3RyaW5nIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvblNlcnZpY2UgPSBTZXNzaW9uU2VydmljZUNvbnRhaW5lci5nZXRTZXNzaW9uU2VydmljZSgpO1xuICAgIHJldHVybiBhd2FpdCBzZXNzaW9uU2VydmljZS5yZXF1aXJlQ3VycmVudFNlc3Npb24oKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbYXdhaXQgdCgnYWN0aW9uLnNlc3Npb24ubm90Rm91bmQnKV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBDcmVhdGUgbmV3IGdhbWVcbiAqIFZhbGlkYXRlcyBpbnB1dCB3aXRoIFpvZCwgY3JlYXRlcyBnYW1lIHZpYSBDcmVhdGVHYW1lIHVzZSBjYXNlXG4gKiBAcGFyYW0gZm9ybURhdGEgRm9ybSBkYXRhIGZyb20gR2FtZUZvcm1cbiAqIEByZXR1cm5zIENyZWF0ZWQgZ2FtZSBkYXRhIG9yIHZhbGlkYXRpb24gZXJyb3JzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8XG4gIHsgc3VjY2VzczogdHJ1ZTsgZ2FtZTogQ3JlYXRlR2FtZU91dHB1dCB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgcGFyc2UgZm9ybSBkYXRhXG4gICAgY29uc3QgZ2FtZU5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKTtcbiAgICBjb25zdCByYXdEYXRhID0ge1xuICAgICAgbmFtZTogZ2FtZU5hbWUgPT09ICcnID8gbnVsbCA6IChnYW1lTmFtZT8udG9TdHJpbmcoKSA/PyBudWxsKSxcbiAgICAgIHBsYXllckxpbWl0OiBOdW1iZXIoZm9ybURhdGEuZ2V0KCdwbGF5ZXJMaW1pdCcpKSxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IENyZWF0ZUdhbWVTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRCAobW9kZXJhdG9yL2NyZWF0b3IgSUQpXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uSWRSZXN1bHQ7XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBFeGVjdXRlIENyZWF0ZUdhbWUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IENyZWF0ZUdhbWUocmVwb3NpdG9yeSk7XG5cbiAgICBjb25zdCBnYW1lID0gYXdhaXQgdXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGNyZWF0b3JJZDogc2Vzc2lvbklkLFxuICAgICAgbmFtZTogdmFsaWRhdGlvblJlc3VsdC5kYXRhLm5hbWUsXG4gICAgICBwbGF5ZXJMaW1pdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnBsYXllckxpbWl0LFxuICAgIH0pO1xuXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyBmb3IgY2FjaGUgbWFuYWdlbWVudFxuICAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9nYW1lcycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBnYW1lOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgX2Zvcm06IFtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IGF3YWl0IHQoJ2FjdGlvbi5nYW1lLmNyZWF0ZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IENyZWF0ZSBnYW1lIGFuZCByZWRpcmVjdCB0byBnYW1lIGxpc3RcbiAqIENvbnZlbmllbmNlIHdyYXBwZXIgdGhhdCByZWRpcmVjdHMgb24gc3VjY2Vzc1xuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSBmcm9tIEdhbWVGb3JtXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYW1lQW5kUmVkaXJlY3QoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUdhbWVBY3Rpb24oZm9ybURhdGEpO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIC8vIFJlZGlyZWN0IHRvIGdhbWUgbGlzdCBvciBnYW1lIGRldGFpbCBwYWdlXG4gICAgcmVkaXJlY3QoJy8nKTtcbiAgfVxuXG4gIC8vIE9uIGZhaWx1cmUsIGxldCB0aGUgZm9ybSBjb21wb25lbnQgaGFuZGxlIGVycm9yc1xuICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuIGFzIHRoZSBmb3JtIHdpbGwgY2FsbCBjcmVhdGVHYW1lQWN0aW9uIGRpcmVjdGx5XG4gIHRocm93IG5ldyBFcnJvcignR2FtZSBjcmVhdGlvbiBmYWlsZWQnKTtcbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBTdGFydCBhY2NlcHRpbmcgcmVzcG9uc2VzXG4gKiBUcmFuc2l0aW9ucyBnYW1lIGZyb20g5rqW5YKZ5LitIHRvIOWHuumhjOS4rVxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZFxuICogQHJldHVybnMgU3VjY2VzcyBzdGF0dXMgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0QWNjZXB0aW5nQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSxcbiAgICB9O1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IFN0YXJ0QWNjZXB0aW5nU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IF9zZXNzaW9uSWQgPSBzZXNzaW9uSWRSZXN1bHQgYXMgc3RyaW5nO1xuXG4gICAgLy8gRXhlY3V0ZSB1c2UgY2FzZVxuICAgIGNvbnN0IHJlcG9zaXRvcnkgPSBjcmVhdGVHYW1lUmVwb3NpdG9yeSgpO1xuICAgIGNvbnN0IHVzZUNhc2UgPSBuZXcgU3RhcnRBY2NlcHRpbmdSZXNwb25zZXMocmVwb3NpdG9yeSk7XG5cbiAgICBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgIH0pO1xuXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyBmb3IgY2FjaGUgbWFuYWdlbWVudFxuICAgIHJldmFsaWRhdGVQYXRoKCcvZ2FtZXMnKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2dhbWVzLyR7dmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZH1gKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3RhcnQgYWNjZXB0aW5nIHJlc3BvbnNlczonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5zdGFydC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IEdldCBhbGwgZ2FtZXMgZm9yIGN1cnJlbnQgY3JlYXRvclxuICogQHJldHVybnMgTGlzdCBvZiBnYW1lcyB3aXRoIG1hbmFnZW1lbnQgaW5mbyBvciBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdhbWVzQWN0aW9uKCk6IFByb21pc2U8XG4gIHwgeyBzdWNjZXNzOiB0cnVlOyBnYW1lczogR2FtZU1hbmFnZW1lbnREdG9bXSB9XG4gIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGNyZWF0b3IgSUQpXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLm5vdEZvdW5kJyldLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbklkUmVzdWx0IGFzIHN0cmluZztcblxuICAgIC8vIEV4ZWN1dGUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IEdldEdhbWVzQnlDcmVhdG9yKHJlcG9zaXRvcnkpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGNyZWF0b3JJZDogc2Vzc2lvbklkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lczogcmVzdWx0LmdhbWVzLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBnYW1lczonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5mZXRjaC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IEdldCBnYW1lIGRldGFpbCBieSBJRFxuICogRmV0Y2hlcyBnYW1lIGRldGFpbHMgZm9yIGVkaXRpbmcvdmlld2luZ1xuICogQHBhcmFtIGdhbWVJZCBHYW1lIElEIHRvIGZldGNoXG4gKiBAcmV0dXJucyBHYW1lIGRldGFpbCBvciBlcnJvclxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2FtZURldGFpbEFjdGlvbihcbiAgZ2FtZUlkOiBzdHJpbmdcbik6IFByb21pc2U8XG4gIHsgc3VjY2VzczogdHJ1ZTsgZ2FtZTogR2FtZURldGFpbER0byB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBHZXQgZ2FtZSBmcm9tIHJlcG9zaXRvcnlcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCBnYW1lID0gYXdhaXQgcmVwb3NpdG9yeS5maW5kQnlJZChuZXcgR2FtZUlkKGdhbWVJZCkpO1xuXG4gICAgaWYgKCFnYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdnYW1lLmdhbWVOb3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYXV0aG9yaXphdGlvbiAtIG9ubHkgY3JlYXRvciBjYW4gdmlldy9lZGl0XG4gICAgaWYgKGdhbWUuY3JlYXRvcklkICE9PSBzZXNzaW9uSWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLnVuYXV0aG9yaXplZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gTWFwIHRvIERUT1xuICAgIGNvbnN0IGdhbWVEZXRhaWxEdG86IEdhbWVEZXRhaWxEdG8gPSB7XG4gICAgICBpZDogZ2FtZS5pZC50b1N0cmluZygpLFxuICAgICAgbmFtZTogZ2FtZS5uYW1lLFxuICAgICAgc3RhdHVzOiBnYW1lLnN0YXR1cy50b1N0cmluZygpLFxuICAgICAgbWF4UGxheWVyczogZ2FtZS5tYXhQbGF5ZXJzLFxuICAgICAgY3VycmVudFBsYXllcnM6IGdhbWUuY3VycmVudFBsYXllcnMsXG4gICAgICBhdmFpbGFibGVTbG90czogZ2FtZS5hdmFpbGFibGVTbG90cyxcbiAgICAgIGNyZWF0b3JJZDogZ2FtZS5jcmVhdG9ySWQsXG4gICAgICBjcmVhdGVkQXQ6IGdhbWUuY3JlYXRlZEF0LFxuICAgICAgdXBkYXRlZEF0OiBnYW1lLnVwZGF0ZWRBdCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lOiBnYW1lRGV0YWlsRHRvLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBnYW1lIGRldGFpbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5mZXRjaC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IFVwZGF0ZSBnYW1lIHNldHRpbmdzXG4gKiBVcGRhdGVzIGdhbWUgc2V0dGluZ3MgKHBsYXllciBsaW1pdCkgd2hlbiBnYW1lIGlzIGluIHByZXBhcmF0aW9uIHN0YXR1c1xuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZCBhbmQgcGxheWVyTGltaXRcbiAqIEByZXR1cm5zIFVwZGF0ZWQgZ2FtZSBkZXRhaWwgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdhbWVBY3Rpb24oXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTxcbiAgeyBzdWNjZXNzOiB0cnVlOyBnYW1lOiBHYW1lRGV0YWlsRHRvIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9XG4+IHtcbiAgdHJ5IHtcbiAgICAvLyBFeHRyYWN0IGFuZCBwYXJzZSBmb3JtIGRhdGFcbiAgICBjb25zdCByYXdEYXRhID0ge1xuICAgICAgZ2FtZUlkOiBmb3JtRGF0YS5nZXQoJ2dhbWVJZCcpIGFzIHN0cmluZyxcbiAgICAgIHBsYXllckxpbWl0OiBmb3JtRGF0YS5nZXQoJ3BsYXllckxpbWl0JykgPyBOdW1iZXIoZm9ybURhdGEuZ2V0KCdwbGF5ZXJMaW1pdCcpKSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IFVwZGF0ZUdhbWVTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRCAoZm9yIGF1dGhvcml6YXRpb24pXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLm5vdEZvdW5kJyldLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbklkUmVzdWx0IGFzIHN0cmluZztcblxuICAgIC8vIEV4ZWN1dGUgVXBkYXRlR2FtZVNldHRpbmdzIHVzZSBjYXNlXG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IGNyZWF0ZUdhbWVSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlQ2FzZSA9IG5ldyBVcGRhdGVHYW1lU2V0dGluZ3MocmVwb3NpdG9yeSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgcGxheWVyTGltaXQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5wbGF5ZXJMaW1pdCxcbiAgICAgIHJlcXVlc3RlcklkOiBzZXNzaW9uSWQsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3VsdC5nYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uZ2FtZS51cGRhdGUuZXJyb3InKV0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnL2dhbWVzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGdhbWU6IHJlc3VsdC5nYW1lLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBnYW1lOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgX2Zvcm06IFtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IGF3YWl0IHQoJ2FjdGlvbi5nYW1lLnVwZGF0ZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IERlbGV0ZSBnYW1lXG4gKiBEZWxldGVzIGEgZ2FtZSB3aXRoIGF1dGhvcml6YXRpb24gY2hlY2tcbiAqIEBwYXJhbSBmb3JtRGF0YSBGb3JtIGRhdGEgd2l0aCBnYW1lSWRcbiAqIEByZXR1cm5zIFN1Y2Nlc3Mgc3RhdHVzIG9yIHZhbGlkYXRpb24gZXJyb3JzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSBhcyBzdHJpbmcsXG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBEZWxldGVHYW1lU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBFeGVjdXRlIERlbGV0ZUdhbWUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IERlbGV0ZUdhbWUocmVwb3NpdG9yeSk7XG5cbiAgICBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgcmVxdWVzdGVySWQ6IHNlc3Npb25JZCxcbiAgICB9KTtcblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZ2FtZXMnKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGdhbWU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yczoge1xuICAgICAgICBfZm9ybTogW2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogYXdhaXQgdCgnYWN0aW9uLmdhbWUuZGVsZXRlLmVycm9yJyldLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogU2VydmVyIEFjdGlvbjogU3RhcnQgR2FtZSAoU3RhdHVzIFRyYW5zaXRpb24pXG4gKiBGZWF0dXJlOiAwMDQtc3RhdHVzLXRyYW5zaXRpb25cbiAqIFZhbGlkYXRlcyBhbmQgdHJhbnNpdGlvbnMgZ2FtZSBmcm9tIOa6luWCmeS4rSB0byDlh7rpoYzkuK0gd2l0aCBwcmVzZW50ZXIgdmFsaWRhdGlvblxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZFxuICogQHJldHVybnMgU3VjY2VzcyBzdGF0dXMgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZUFjdGlvbihcbiAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPHsgc3VjY2VzczogdHJ1ZSB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfT4ge1xuICB0cnkge1xuICAgIC8vIEV4dHJhY3QgYW5kIHZhbGlkYXRlIGZvcm0gZGF0YVxuICAgIGNvbnN0IHJhd0RhdGEgPSB7XG4gICAgICBnYW1lSWQ6IGZvcm1EYXRhLmdldCgnZ2FtZUlkJyksXG4gICAgICBzZXNzaW9uSWQ6ICcnLCAvLyBXaWxsIGJlIGZpbGxlZCBiZWxvd1xuICAgIH07XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRFxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4gc2Vzc2lvbklkUmVzdWx0O1xuICAgIH1cbiAgICByYXdEYXRhLnNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gU3RhcnRHYW1lU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgc3RhdHVzIHRyYW5zaXRpb24gZmlyc3RcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB2YWxpZGF0ZVVzZUNhc2UgPSBuZXcgVmFsaWRhdGVTdGF0dXNUcmFuc2l0aW9uKHJlcG9zaXRvcnkpO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3BvbnNlID0gYXdhaXQgdmFsaWRhdGVVc2VDYXNlLmV4ZWN1dGUoXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgJ+WHuumhjOS4rScsXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuc2Vzc2lvbklkXG4gICAgKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3BvbnNlLmNhblRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogdmFsaWRhdGlvblJlc3BvbnNlLmVycm9ycy5tYXAoKGVycikgPT4gZXJyLm1lc3NhZ2UpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIHRoZSBzdGF0dXMgdHJhbnNpdGlvblxuICAgIGNvbnN0IHN0YXJ0VXNlQ2FzZSA9IG5ldyBTdGFydEFjY2VwdGluZ1Jlc3BvbnNlcyhyZXBvc2l0b3J5KTtcbiAgICBhd2FpdCBzdGFydFVzZUNhc2UuZXhlY3V0ZSh7XG4gICAgICBnYW1lSWQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWQsXG4gICAgfSk7XG5cbiAgICAvLyBSZXZhbGlkYXRlIHBhdGhzIGZvciBjYWNoZSBtYW5hZ2VtZW50XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9nYW1lcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZ2FtZXMvJHt2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkfWApO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZ2FtZXMvJHt2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkfS9wcmVzZW50ZXJzYCk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHN0YXJ0IGdhbWU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yczoge1xuICAgICAgICBfZm9ybTogW2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogYXdhaXQgdCgnYWN0aW9uLmdhbWUuc3RhcnQuZXJyb3InKV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBDbG9zZSBHYW1lIChTdGF0dXMgVHJhbnNpdGlvbilcbiAqIEZlYXR1cmU6IDAwNC1zdGF0dXMtdHJhbnNpdGlvblxuICogVmFsaWRhdGVzIGFuZCB0cmFuc2l0aW9ucyBnYW1lIGZyb20g5Ye66aGM5LitIHRvIOe3oOWIhyB3aXRoIGNvbmZpcm1hdGlvblxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZCBhbmQgY29uZmlybWVkXG4gKiBAcmV0dXJucyBTdWNjZXNzIHN0YXR1cyBvciB2YWxpZGF0aW9uIGVycm9yc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSxcbiAgICAgIHNlc3Npb25JZDogJycsIC8vIFdpbGwgYmUgZmlsbGVkIGJlbG93XG4gICAgICBjb25maXJtZWQ6IGZvcm1EYXRhLmdldCgnY29uZmlybWVkJykgPT09ICd0cnVlJyxcbiAgICB9O1xuXG4gICAgLy8gR2V0IHNlc3Npb24gSURcbiAgICBjb25zdCBzZXNzaW9uSWRSZXN1bHQgPSBhd2FpdCBnZXRTZXNzaW9uSWRPckVycm9yKCk7XG4gICAgaWYgKHR5cGVvZiBzZXNzaW9uSWRSZXN1bHQgPT09ICdvYmplY3QnICYmICFzZXNzaW9uSWRSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHNlc3Npb25JZFJlc3VsdDtcbiAgICB9XG4gICAgcmF3RGF0YS5zZXNzaW9uSWQgPSBzZXNzaW9uSWRSZXN1bHQgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IENsb3NlR2FtZVNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yczogdmFsaWRhdGlvblJlc3VsdC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIHN0YXR1cyB0cmFuc2l0aW9uIGZpcnN0XG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IGNyZWF0ZUdhbWVSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdmFsaWRhdGVVc2VDYXNlID0gbmV3IFZhbGlkYXRlU3RhdHVzVHJhbnNpdGlvbihyZXBvc2l0b3J5KTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXNwb25zZSA9IGF3YWl0IHZhbGlkYXRlVXNlQ2FzZS5leGVjdXRlKFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZCxcbiAgICAgICfnt6DliIcnLFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5kYXRhLnNlc3Npb25JZFxuICAgICk7XG5cbiAgICBpZiAoIXZhbGlkYXRpb25SZXNwb25zZS5jYW5UcmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IHZhbGlkYXRpb25SZXNwb25zZS5lcnJvcnMubWFwKChlcnIpID0+IGVyci5tZXNzYWdlKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgc3RhdHVzIHRyYW5zaXRpb25cbiAgICBjb25zdCBjbG9zZVVzZUNhc2UgPSBuZXcgQ2xvc2VHYW1lKHJlcG9zaXRvcnkpO1xuICAgIGF3YWl0IGNsb3NlVXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGdhbWVJZDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZCxcbiAgICAgIHNlc3Npb25JZDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnNlc3Npb25JZCxcbiAgICB9KTtcblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnL2dhbWVzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9L3ByZXNlbnRlcnNgKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY2xvc2UgZ2FtZTonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5jbG9zZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0EyWXNCIn0=
}),
"[project]/src/components/domain/game/DeleteGameButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteGameButton",
    ()=>DeleteGameButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// DeleteGameButton Component
// Feature: 002-game-preparation
// Button with confirmation dialog for deleting games
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$89b8c0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:89b8c0 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function DeleteGameButton({ gameId, gameStatus }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleDelete = ()=>{
        setError(null);
        startTransition(async ()=>{
            try {
                const formData = new FormData();
                formData.append('gameId', gameId);
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$89b8c0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteGameAction"])(formData);
                if (result.success) {
                    // Redirect to game list after successful deletion
                    router.push('/games');
                } else {
                    setError(result.errors._form?.[0] || t('action.game.delete.error'));
                    setShowConfirm(false);
                }
            } catch (err) {
                console.error('Delete game error:', err);
                setError(t('errors.unexpectedError'));
                setShowConfirm(false);
            }
        });
    };
    const _needsConfirmation = gameStatus !== t('game.status.preparing');
    const confirmationMessage = gameStatus === t('game.status.active') ? t('action.game.delete.confirmActive') : gameStatus === t('game.status.closed') ? t('action.game.delete.confirmClosed') : t('action.game.delete.confirm');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6",
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 rounded-lg border border-red-200 bg-red-50 p-4",
                role: "alert",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-800",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/domain/game/DeleteGameButton.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/domain/game/DeleteGameButton.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            !showConfirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setShowConfirm(true),
                disabled: isPending,
                className: "w-full rounded-md border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                children: t('game.deleteGame')
            }, void 0, false, {
                fileName: "[project]/src/components/domain/game/DeleteGameButton.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-red-200 bg-red-50 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 text-sm font-medium text-red-900",
                        children: confirmationMessage
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/DeleteGameButton.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleDelete,
                                disabled: isPending,
                                className: "flex-1 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                children: isPending ? t('common.loading') : t('common.delete')
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/DeleteGameButton.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowConfirm(false),
                                disabled: isPending,
                                className: "flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                children: t('common.cancel')
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/DeleteGameButton.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/domain/game/DeleteGameButton.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/domain/game/DeleteGameButton.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/domain/game/DeleteGameButton.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/actions/data:b6aa73 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40cfcb36080172fa52ba08996bee836180647bb227":"createGameAction"},"src/app/actions/game.ts",""] */ __turbopack_context__.s([
    "createGameAction",
    ()=>createGameAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createGameAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40cfcb36080172fa52ba08996bee836180647bb227", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createGameAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2FtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbi8vIEdhbWUgU2VydmVyIEFjdGlvbnNcbi8vIEZlYXR1cmU6IDAwMi1nYW1lLXByZXBhcmF0aW9uXG4vLyBTZXJ2ZXIgQWN0aW9ucyB3aXRoIFpvZCB2YWxpZGF0aW9uIGZvciBnYW1lIG1hbmFnZW1lbnRcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHQgfSBmcm9tICdAL2xpYi9pMThuL3NlcnZlcic7XG5pbXBvcnQgdHlwZSB7IEdhbWVEZXRhaWxEdG8gfSBmcm9tICdAL3NlcnZlci9hcHBsaWNhdGlvbi9kdG8vR2FtZURldGFpbER0byc7XG5pbXBvcnQgdHlwZSB7IENyZWF0ZUdhbWVPdXRwdXQsIEdhbWVNYW5hZ2VtZW50RHRvIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vZHRvL0dhbWVEdG8nO1xuaW1wb3J0IHsgQ2xvc2VHYW1lIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0Nsb3NlR2FtZSc7XG5pbXBvcnQgeyBDcmVhdGVHYW1lIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0NyZWF0ZUdhbWUnO1xuaW1wb3J0IHsgRGVsZXRlR2FtZSB9IGZyb20gJ0Avc2VydmVyL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9nYW1lcy9EZWxldGVHYW1lJztcbmltcG9ydCB7IEdldEdhbWVzQnlDcmVhdG9yIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0dldEdhbWVzQnlDcmVhdG9yJztcbmltcG9ydCB7IFN0YXJ0QWNjZXB0aW5nUmVzcG9uc2VzIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL1N0YXJ0QWNjZXB0aW5nUmVzcG9uc2VzJztcbmltcG9ydCB7IFVwZGF0ZUdhbWVTZXR0aW5ncyB9IGZyb20gJ0Avc2VydmVyL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9nYW1lcy9VcGRhdGVHYW1lU2V0dGluZ3MnO1xuaW1wb3J0IHsgVmFsaWRhdGVTdGF0dXNUcmFuc2l0aW9uIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL1ZhbGlkYXRlU3RhdHVzVHJhbnNpdGlvbic7XG5pbXBvcnQge1xuICBDbG9zZUdhbWVTY2hlbWEsXG4gIENyZWF0ZUdhbWVTY2hlbWEsXG4gIERlbGV0ZUdhbWVTY2hlbWEsXG4gIFN0YXJ0QWNjZXB0aW5nU2NoZW1hLFxuICBTdGFydEdhbWVTY2hlbWEsXG4gIFVwZGF0ZUdhbWVTY2hlbWEsXG59IGZyb20gJ0Avc2VydmVyL2RvbWFpbi9zY2hlbWFzL2dhbWVTY2hlbWFzJztcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJ0Avc2VydmVyL2RvbWFpbi92YWx1ZS1vYmplY3RzL0dhbWVJZCc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZUNvbnRhaW5lciB9IGZyb20gJ0Avc2VydmVyL2luZnJhc3RydWN0dXJlL2RpL1Nlc3Npb25TZXJ2aWNlQ29udGFpbmVyJztcbmltcG9ydCB7IGNyZWF0ZUdhbWVSZXBvc2l0b3J5IH0gZnJvbSAnQC9zZXJ2ZXIvaW5mcmFzdHJ1Y3R1cmUvcmVwb3NpdG9yaWVzJztcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHNlc3Npb24gSUQgd2l0aCBjb25zaXN0ZW50IGVycm9yIGhhbmRsaW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb25JZE9yRXJyb3IoKTogUHJvbWlzZTxcbiAgc3RyaW5nIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvblNlcnZpY2UgPSBTZXNzaW9uU2VydmljZUNvbnRhaW5lci5nZXRTZXNzaW9uU2VydmljZSgpO1xuICAgIHJldHVybiBhd2FpdCBzZXNzaW9uU2VydmljZS5yZXF1aXJlQ3VycmVudFNlc3Npb24oKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbYXdhaXQgdCgnYWN0aW9uLnNlc3Npb24ubm90Rm91bmQnKV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBDcmVhdGUgbmV3IGdhbWVcbiAqIFZhbGlkYXRlcyBpbnB1dCB3aXRoIFpvZCwgY3JlYXRlcyBnYW1lIHZpYSBDcmVhdGVHYW1lIHVzZSBjYXNlXG4gKiBAcGFyYW0gZm9ybURhdGEgRm9ybSBkYXRhIGZyb20gR2FtZUZvcm1cbiAqIEByZXR1cm5zIENyZWF0ZWQgZ2FtZSBkYXRhIG9yIHZhbGlkYXRpb24gZXJyb3JzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8XG4gIHsgc3VjY2VzczogdHJ1ZTsgZ2FtZTogQ3JlYXRlR2FtZU91dHB1dCB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgcGFyc2UgZm9ybSBkYXRhXG4gICAgY29uc3QgZ2FtZU5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKTtcbiAgICBjb25zdCByYXdEYXRhID0ge1xuICAgICAgbmFtZTogZ2FtZU5hbWUgPT09ICcnID8gbnVsbCA6IChnYW1lTmFtZT8udG9TdHJpbmcoKSA/PyBudWxsKSxcbiAgICAgIHBsYXllckxpbWl0OiBOdW1iZXIoZm9ybURhdGEuZ2V0KCdwbGF5ZXJMaW1pdCcpKSxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IENyZWF0ZUdhbWVTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRCAobW9kZXJhdG9yL2NyZWF0b3IgSUQpXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uSWRSZXN1bHQ7XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBFeGVjdXRlIENyZWF0ZUdhbWUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IENyZWF0ZUdhbWUocmVwb3NpdG9yeSk7XG5cbiAgICBjb25zdCBnYW1lID0gYXdhaXQgdXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGNyZWF0b3JJZDogc2Vzc2lvbklkLFxuICAgICAgbmFtZTogdmFsaWRhdGlvblJlc3VsdC5kYXRhLm5hbWUsXG4gICAgICBwbGF5ZXJMaW1pdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnBsYXllckxpbWl0LFxuICAgIH0pO1xuXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyBmb3IgY2FjaGUgbWFuYWdlbWVudFxuICAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9nYW1lcycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBnYW1lOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgX2Zvcm06IFtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IGF3YWl0IHQoJ2FjdGlvbi5nYW1lLmNyZWF0ZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IENyZWF0ZSBnYW1lIGFuZCByZWRpcmVjdCB0byBnYW1lIGxpc3RcbiAqIENvbnZlbmllbmNlIHdyYXBwZXIgdGhhdCByZWRpcmVjdHMgb24gc3VjY2Vzc1xuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSBmcm9tIEdhbWVGb3JtXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYW1lQW5kUmVkaXJlY3QoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUdhbWVBY3Rpb24oZm9ybURhdGEpO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIC8vIFJlZGlyZWN0IHRvIGdhbWUgbGlzdCBvciBnYW1lIGRldGFpbCBwYWdlXG4gICAgcmVkaXJlY3QoJy8nKTtcbiAgfVxuXG4gIC8vIE9uIGZhaWx1cmUsIGxldCB0aGUgZm9ybSBjb21wb25lbnQgaGFuZGxlIGVycm9yc1xuICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuIGFzIHRoZSBmb3JtIHdpbGwgY2FsbCBjcmVhdGVHYW1lQWN0aW9uIGRpcmVjdGx5XG4gIHRocm93IG5ldyBFcnJvcignR2FtZSBjcmVhdGlvbiBmYWlsZWQnKTtcbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBTdGFydCBhY2NlcHRpbmcgcmVzcG9uc2VzXG4gKiBUcmFuc2l0aW9ucyBnYW1lIGZyb20g5rqW5YKZ5LitIHRvIOWHuumhjOS4rVxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZFxuICogQHJldHVybnMgU3VjY2VzcyBzdGF0dXMgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0QWNjZXB0aW5nQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSxcbiAgICB9O1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IFN0YXJ0QWNjZXB0aW5nU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IF9zZXNzaW9uSWQgPSBzZXNzaW9uSWRSZXN1bHQgYXMgc3RyaW5nO1xuXG4gICAgLy8gRXhlY3V0ZSB1c2UgY2FzZVxuICAgIGNvbnN0IHJlcG9zaXRvcnkgPSBjcmVhdGVHYW1lUmVwb3NpdG9yeSgpO1xuICAgIGNvbnN0IHVzZUNhc2UgPSBuZXcgU3RhcnRBY2NlcHRpbmdSZXNwb25zZXMocmVwb3NpdG9yeSk7XG5cbiAgICBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgIH0pO1xuXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyBmb3IgY2FjaGUgbWFuYWdlbWVudFxuICAgIHJldmFsaWRhdGVQYXRoKCcvZ2FtZXMnKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2dhbWVzLyR7dmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZH1gKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3RhcnQgYWNjZXB0aW5nIHJlc3BvbnNlczonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5zdGFydC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IEdldCBhbGwgZ2FtZXMgZm9yIGN1cnJlbnQgY3JlYXRvclxuICogQHJldHVybnMgTGlzdCBvZiBnYW1lcyB3aXRoIG1hbmFnZW1lbnQgaW5mbyBvciBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdhbWVzQWN0aW9uKCk6IFByb21pc2U8XG4gIHwgeyBzdWNjZXNzOiB0cnVlOyBnYW1lczogR2FtZU1hbmFnZW1lbnREdG9bXSB9XG4gIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGNyZWF0b3IgSUQpXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLm5vdEZvdW5kJyldLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbklkUmVzdWx0IGFzIHN0cmluZztcblxuICAgIC8vIEV4ZWN1dGUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IEdldEdhbWVzQnlDcmVhdG9yKHJlcG9zaXRvcnkpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGNyZWF0b3JJZDogc2Vzc2lvbklkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lczogcmVzdWx0LmdhbWVzLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBnYW1lczonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5mZXRjaC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IEdldCBnYW1lIGRldGFpbCBieSBJRFxuICogRmV0Y2hlcyBnYW1lIGRldGFpbHMgZm9yIGVkaXRpbmcvdmlld2luZ1xuICogQHBhcmFtIGdhbWVJZCBHYW1lIElEIHRvIGZldGNoXG4gKiBAcmV0dXJucyBHYW1lIGRldGFpbCBvciBlcnJvclxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2FtZURldGFpbEFjdGlvbihcbiAgZ2FtZUlkOiBzdHJpbmdcbik6IFByb21pc2U8XG4gIHsgc3VjY2VzczogdHJ1ZTsgZ2FtZTogR2FtZURldGFpbER0byB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBHZXQgZ2FtZSBmcm9tIHJlcG9zaXRvcnlcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCBnYW1lID0gYXdhaXQgcmVwb3NpdG9yeS5maW5kQnlJZChuZXcgR2FtZUlkKGdhbWVJZCkpO1xuXG4gICAgaWYgKCFnYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdnYW1lLmdhbWVOb3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYXV0aG9yaXphdGlvbiAtIG9ubHkgY3JlYXRvciBjYW4gdmlldy9lZGl0XG4gICAgaWYgKGdhbWUuY3JlYXRvcklkICE9PSBzZXNzaW9uSWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLnVuYXV0aG9yaXplZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gTWFwIHRvIERUT1xuICAgIGNvbnN0IGdhbWVEZXRhaWxEdG86IEdhbWVEZXRhaWxEdG8gPSB7XG4gICAgICBpZDogZ2FtZS5pZC50b1N0cmluZygpLFxuICAgICAgbmFtZTogZ2FtZS5uYW1lLFxuICAgICAgc3RhdHVzOiBnYW1lLnN0YXR1cy50b1N0cmluZygpLFxuICAgICAgbWF4UGxheWVyczogZ2FtZS5tYXhQbGF5ZXJzLFxuICAgICAgY3VycmVudFBsYXllcnM6IGdhbWUuY3VycmVudFBsYXllcnMsXG4gICAgICBhdmFpbGFibGVTbG90czogZ2FtZS5hdmFpbGFibGVTbG90cyxcbiAgICAgIGNyZWF0b3JJZDogZ2FtZS5jcmVhdG9ySWQsXG4gICAgICBjcmVhdGVkQXQ6IGdhbWUuY3JlYXRlZEF0LFxuICAgICAgdXBkYXRlZEF0OiBnYW1lLnVwZGF0ZWRBdCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lOiBnYW1lRGV0YWlsRHRvLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBnYW1lIGRldGFpbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5mZXRjaC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IFVwZGF0ZSBnYW1lIHNldHRpbmdzXG4gKiBVcGRhdGVzIGdhbWUgc2V0dGluZ3MgKHBsYXllciBsaW1pdCkgd2hlbiBnYW1lIGlzIGluIHByZXBhcmF0aW9uIHN0YXR1c1xuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZCBhbmQgcGxheWVyTGltaXRcbiAqIEByZXR1cm5zIFVwZGF0ZWQgZ2FtZSBkZXRhaWwgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdhbWVBY3Rpb24oXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTxcbiAgeyBzdWNjZXNzOiB0cnVlOyBnYW1lOiBHYW1lRGV0YWlsRHRvIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9XG4+IHtcbiAgdHJ5IHtcbiAgICAvLyBFeHRyYWN0IGFuZCBwYXJzZSBmb3JtIGRhdGFcbiAgICBjb25zdCByYXdEYXRhID0ge1xuICAgICAgZ2FtZUlkOiBmb3JtRGF0YS5nZXQoJ2dhbWVJZCcpIGFzIHN0cmluZyxcbiAgICAgIHBsYXllckxpbWl0OiBmb3JtRGF0YS5nZXQoJ3BsYXllckxpbWl0JykgPyBOdW1iZXIoZm9ybURhdGEuZ2V0KCdwbGF5ZXJMaW1pdCcpKSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IFVwZGF0ZUdhbWVTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRCAoZm9yIGF1dGhvcml6YXRpb24pXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLm5vdEZvdW5kJyldLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbklkUmVzdWx0IGFzIHN0cmluZztcblxuICAgIC8vIEV4ZWN1dGUgVXBkYXRlR2FtZVNldHRpbmdzIHVzZSBjYXNlXG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IGNyZWF0ZUdhbWVSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlQ2FzZSA9IG5ldyBVcGRhdGVHYW1lU2V0dGluZ3MocmVwb3NpdG9yeSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgcGxheWVyTGltaXQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5wbGF5ZXJMaW1pdCxcbiAgICAgIHJlcXVlc3RlcklkOiBzZXNzaW9uSWQsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3VsdC5nYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uZ2FtZS51cGRhdGUuZXJyb3InKV0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnL2dhbWVzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGdhbWU6IHJlc3VsdC5nYW1lLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBnYW1lOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgX2Zvcm06IFtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IGF3YWl0IHQoJ2FjdGlvbi5nYW1lLnVwZGF0ZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IERlbGV0ZSBnYW1lXG4gKiBEZWxldGVzIGEgZ2FtZSB3aXRoIGF1dGhvcml6YXRpb24gY2hlY2tcbiAqIEBwYXJhbSBmb3JtRGF0YSBGb3JtIGRhdGEgd2l0aCBnYW1lSWRcbiAqIEByZXR1cm5zIFN1Y2Nlc3Mgc3RhdHVzIG9yIHZhbGlkYXRpb24gZXJyb3JzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSBhcyBzdHJpbmcsXG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBEZWxldGVHYW1lU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBFeGVjdXRlIERlbGV0ZUdhbWUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IERlbGV0ZUdhbWUocmVwb3NpdG9yeSk7XG5cbiAgICBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgcmVxdWVzdGVySWQ6IHNlc3Npb25JZCxcbiAgICB9KTtcblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZ2FtZXMnKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGdhbWU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yczoge1xuICAgICAgICBfZm9ybTogW2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogYXdhaXQgdCgnYWN0aW9uLmdhbWUuZGVsZXRlLmVycm9yJyldLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogU2VydmVyIEFjdGlvbjogU3RhcnQgR2FtZSAoU3RhdHVzIFRyYW5zaXRpb24pXG4gKiBGZWF0dXJlOiAwMDQtc3RhdHVzLXRyYW5zaXRpb25cbiAqIFZhbGlkYXRlcyBhbmQgdHJhbnNpdGlvbnMgZ2FtZSBmcm9tIOa6luWCmeS4rSB0byDlh7rpoYzkuK0gd2l0aCBwcmVzZW50ZXIgdmFsaWRhdGlvblxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZFxuICogQHJldHVybnMgU3VjY2VzcyBzdGF0dXMgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZUFjdGlvbihcbiAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPHsgc3VjY2VzczogdHJ1ZSB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfT4ge1xuICB0cnkge1xuICAgIC8vIEV4dHJhY3QgYW5kIHZhbGlkYXRlIGZvcm0gZGF0YVxuICAgIGNvbnN0IHJhd0RhdGEgPSB7XG4gICAgICBnYW1lSWQ6IGZvcm1EYXRhLmdldCgnZ2FtZUlkJyksXG4gICAgICBzZXNzaW9uSWQ6ICcnLCAvLyBXaWxsIGJlIGZpbGxlZCBiZWxvd1xuICAgIH07XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRFxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4gc2Vzc2lvbklkUmVzdWx0O1xuICAgIH1cbiAgICByYXdEYXRhLnNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gU3RhcnRHYW1lU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgc3RhdHVzIHRyYW5zaXRpb24gZmlyc3RcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB2YWxpZGF0ZVVzZUNhc2UgPSBuZXcgVmFsaWRhdGVTdGF0dXNUcmFuc2l0aW9uKHJlcG9zaXRvcnkpO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3BvbnNlID0gYXdhaXQgdmFsaWRhdGVVc2VDYXNlLmV4ZWN1dGUoXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgJ+WHuumhjOS4rScsXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuc2Vzc2lvbklkXG4gICAgKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3BvbnNlLmNhblRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogdmFsaWRhdGlvblJlc3BvbnNlLmVycm9ycy5tYXAoKGVycikgPT4gZXJyLm1lc3NhZ2UpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIHRoZSBzdGF0dXMgdHJhbnNpdGlvblxuICAgIGNvbnN0IHN0YXJ0VXNlQ2FzZSA9IG5ldyBTdGFydEFjY2VwdGluZ1Jlc3BvbnNlcyhyZXBvc2l0b3J5KTtcbiAgICBhd2FpdCBzdGFydFVzZUNhc2UuZXhlY3V0ZSh7XG4gICAgICBnYW1lSWQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWQsXG4gICAgfSk7XG5cbiAgICAvLyBSZXZhbGlkYXRlIHBhdGhzIGZvciBjYWNoZSBtYW5hZ2VtZW50XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9nYW1lcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZ2FtZXMvJHt2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkfWApO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZ2FtZXMvJHt2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkfS9wcmVzZW50ZXJzYCk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHN0YXJ0IGdhbWU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yczoge1xuICAgICAgICBfZm9ybTogW2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogYXdhaXQgdCgnYWN0aW9uLmdhbWUuc3RhcnQuZXJyb3InKV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBDbG9zZSBHYW1lIChTdGF0dXMgVHJhbnNpdGlvbilcbiAqIEZlYXR1cmU6IDAwNC1zdGF0dXMtdHJhbnNpdGlvblxuICogVmFsaWRhdGVzIGFuZCB0cmFuc2l0aW9ucyBnYW1lIGZyb20g5Ye66aGM5LitIHRvIOe3oOWIhyB3aXRoIGNvbmZpcm1hdGlvblxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZCBhbmQgY29uZmlybWVkXG4gKiBAcmV0dXJucyBTdWNjZXNzIHN0YXR1cyBvciB2YWxpZGF0aW9uIGVycm9yc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSxcbiAgICAgIHNlc3Npb25JZDogJycsIC8vIFdpbGwgYmUgZmlsbGVkIGJlbG93XG4gICAgICBjb25maXJtZWQ6IGZvcm1EYXRhLmdldCgnY29uZmlybWVkJykgPT09ICd0cnVlJyxcbiAgICB9O1xuXG4gICAgLy8gR2V0IHNlc3Npb24gSURcbiAgICBjb25zdCBzZXNzaW9uSWRSZXN1bHQgPSBhd2FpdCBnZXRTZXNzaW9uSWRPckVycm9yKCk7XG4gICAgaWYgKHR5cGVvZiBzZXNzaW9uSWRSZXN1bHQgPT09ICdvYmplY3QnICYmICFzZXNzaW9uSWRSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHNlc3Npb25JZFJlc3VsdDtcbiAgICB9XG4gICAgcmF3RGF0YS5zZXNzaW9uSWQgPSBzZXNzaW9uSWRSZXN1bHQgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IENsb3NlR2FtZVNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yczogdmFsaWRhdGlvblJlc3VsdC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIHN0YXR1cyB0cmFuc2l0aW9uIGZpcnN0XG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IGNyZWF0ZUdhbWVSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdmFsaWRhdGVVc2VDYXNlID0gbmV3IFZhbGlkYXRlU3RhdHVzVHJhbnNpdGlvbihyZXBvc2l0b3J5KTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXNwb25zZSA9IGF3YWl0IHZhbGlkYXRlVXNlQ2FzZS5leGVjdXRlKFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZCxcbiAgICAgICfnt6DliIcnLFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5kYXRhLnNlc3Npb25JZFxuICAgICk7XG5cbiAgICBpZiAoIXZhbGlkYXRpb25SZXNwb25zZS5jYW5UcmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IHZhbGlkYXRpb25SZXNwb25zZS5lcnJvcnMubWFwKChlcnIpID0+IGVyci5tZXNzYWdlKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgc3RhdHVzIHRyYW5zaXRpb25cbiAgICBjb25zdCBjbG9zZVVzZUNhc2UgPSBuZXcgQ2xvc2VHYW1lKHJlcG9zaXRvcnkpO1xuICAgIGF3YWl0IGNsb3NlVXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGdhbWVJZDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZCxcbiAgICAgIHNlc3Npb25JZDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnNlc3Npb25JZCxcbiAgICB9KTtcblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnL2dhbWVzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9L3ByZXNlbnRlcnNgKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY2xvc2UgZ2FtZTonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5jbG9zZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0F1RHNCIn0=
}),
"[project]/src/app/actions/data:cc0d83 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400750ea6939c0f3705c156e99af42ff5099f0571e":"updateGameAction"},"src/app/actions/game.ts",""] */ __turbopack_context__.s([
    "updateGameAction",
    ()=>updateGameAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateGameAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("400750ea6939c0f3705c156e99af42ff5099f0571e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateGameAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2FtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbi8vIEdhbWUgU2VydmVyIEFjdGlvbnNcbi8vIEZlYXR1cmU6IDAwMi1nYW1lLXByZXBhcmF0aW9uXG4vLyBTZXJ2ZXIgQWN0aW9ucyB3aXRoIFpvZCB2YWxpZGF0aW9uIGZvciBnYW1lIG1hbmFnZW1lbnRcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHQgfSBmcm9tICdAL2xpYi9pMThuL3NlcnZlcic7XG5pbXBvcnQgdHlwZSB7IEdhbWVEZXRhaWxEdG8gfSBmcm9tICdAL3NlcnZlci9hcHBsaWNhdGlvbi9kdG8vR2FtZURldGFpbER0byc7XG5pbXBvcnQgdHlwZSB7IENyZWF0ZUdhbWVPdXRwdXQsIEdhbWVNYW5hZ2VtZW50RHRvIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vZHRvL0dhbWVEdG8nO1xuaW1wb3J0IHsgQ2xvc2VHYW1lIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0Nsb3NlR2FtZSc7XG5pbXBvcnQgeyBDcmVhdGVHYW1lIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0NyZWF0ZUdhbWUnO1xuaW1wb3J0IHsgRGVsZXRlR2FtZSB9IGZyb20gJ0Avc2VydmVyL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9nYW1lcy9EZWxldGVHYW1lJztcbmltcG9ydCB7IEdldEdhbWVzQnlDcmVhdG9yIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0dldEdhbWVzQnlDcmVhdG9yJztcbmltcG9ydCB7IFN0YXJ0QWNjZXB0aW5nUmVzcG9uc2VzIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL1N0YXJ0QWNjZXB0aW5nUmVzcG9uc2VzJztcbmltcG9ydCB7IFVwZGF0ZUdhbWVTZXR0aW5ncyB9IGZyb20gJ0Avc2VydmVyL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9nYW1lcy9VcGRhdGVHYW1lU2V0dGluZ3MnO1xuaW1wb3J0IHsgVmFsaWRhdGVTdGF0dXNUcmFuc2l0aW9uIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL1ZhbGlkYXRlU3RhdHVzVHJhbnNpdGlvbic7XG5pbXBvcnQge1xuICBDbG9zZUdhbWVTY2hlbWEsXG4gIENyZWF0ZUdhbWVTY2hlbWEsXG4gIERlbGV0ZUdhbWVTY2hlbWEsXG4gIFN0YXJ0QWNjZXB0aW5nU2NoZW1hLFxuICBTdGFydEdhbWVTY2hlbWEsXG4gIFVwZGF0ZUdhbWVTY2hlbWEsXG59IGZyb20gJ0Avc2VydmVyL2RvbWFpbi9zY2hlbWFzL2dhbWVTY2hlbWFzJztcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJ0Avc2VydmVyL2RvbWFpbi92YWx1ZS1vYmplY3RzL0dhbWVJZCc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZUNvbnRhaW5lciB9IGZyb20gJ0Avc2VydmVyL2luZnJhc3RydWN0dXJlL2RpL1Nlc3Npb25TZXJ2aWNlQ29udGFpbmVyJztcbmltcG9ydCB7IGNyZWF0ZUdhbWVSZXBvc2l0b3J5IH0gZnJvbSAnQC9zZXJ2ZXIvaW5mcmFzdHJ1Y3R1cmUvcmVwb3NpdG9yaWVzJztcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHNlc3Npb24gSUQgd2l0aCBjb25zaXN0ZW50IGVycm9yIGhhbmRsaW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb25JZE9yRXJyb3IoKTogUHJvbWlzZTxcbiAgc3RyaW5nIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvblNlcnZpY2UgPSBTZXNzaW9uU2VydmljZUNvbnRhaW5lci5nZXRTZXNzaW9uU2VydmljZSgpO1xuICAgIHJldHVybiBhd2FpdCBzZXNzaW9uU2VydmljZS5yZXF1aXJlQ3VycmVudFNlc3Npb24oKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbYXdhaXQgdCgnYWN0aW9uLnNlc3Npb24ubm90Rm91bmQnKV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBDcmVhdGUgbmV3IGdhbWVcbiAqIFZhbGlkYXRlcyBpbnB1dCB3aXRoIFpvZCwgY3JlYXRlcyBnYW1lIHZpYSBDcmVhdGVHYW1lIHVzZSBjYXNlXG4gKiBAcGFyYW0gZm9ybURhdGEgRm9ybSBkYXRhIGZyb20gR2FtZUZvcm1cbiAqIEByZXR1cm5zIENyZWF0ZWQgZ2FtZSBkYXRhIG9yIHZhbGlkYXRpb24gZXJyb3JzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8XG4gIHsgc3VjY2VzczogdHJ1ZTsgZ2FtZTogQ3JlYXRlR2FtZU91dHB1dCB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgcGFyc2UgZm9ybSBkYXRhXG4gICAgY29uc3QgZ2FtZU5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKTtcbiAgICBjb25zdCByYXdEYXRhID0ge1xuICAgICAgbmFtZTogZ2FtZU5hbWUgPT09ICcnID8gbnVsbCA6IChnYW1lTmFtZT8udG9TdHJpbmcoKSA/PyBudWxsKSxcbiAgICAgIHBsYXllckxpbWl0OiBOdW1iZXIoZm9ybURhdGEuZ2V0KCdwbGF5ZXJMaW1pdCcpKSxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IENyZWF0ZUdhbWVTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRCAobW9kZXJhdG9yL2NyZWF0b3IgSUQpXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uSWRSZXN1bHQ7XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBFeGVjdXRlIENyZWF0ZUdhbWUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IENyZWF0ZUdhbWUocmVwb3NpdG9yeSk7XG5cbiAgICBjb25zdCBnYW1lID0gYXdhaXQgdXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGNyZWF0b3JJZDogc2Vzc2lvbklkLFxuICAgICAgbmFtZTogdmFsaWRhdGlvblJlc3VsdC5kYXRhLm5hbWUsXG4gICAgICBwbGF5ZXJMaW1pdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnBsYXllckxpbWl0LFxuICAgIH0pO1xuXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyBmb3IgY2FjaGUgbWFuYWdlbWVudFxuICAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9nYW1lcycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBnYW1lOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgX2Zvcm06IFtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IGF3YWl0IHQoJ2FjdGlvbi5nYW1lLmNyZWF0ZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IENyZWF0ZSBnYW1lIGFuZCByZWRpcmVjdCB0byBnYW1lIGxpc3RcbiAqIENvbnZlbmllbmNlIHdyYXBwZXIgdGhhdCByZWRpcmVjdHMgb24gc3VjY2Vzc1xuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSBmcm9tIEdhbWVGb3JtXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYW1lQW5kUmVkaXJlY3QoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUdhbWVBY3Rpb24oZm9ybURhdGEpO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIC8vIFJlZGlyZWN0IHRvIGdhbWUgbGlzdCBvciBnYW1lIGRldGFpbCBwYWdlXG4gICAgcmVkaXJlY3QoJy8nKTtcbiAgfVxuXG4gIC8vIE9uIGZhaWx1cmUsIGxldCB0aGUgZm9ybSBjb21wb25lbnQgaGFuZGxlIGVycm9yc1xuICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuIGFzIHRoZSBmb3JtIHdpbGwgY2FsbCBjcmVhdGVHYW1lQWN0aW9uIGRpcmVjdGx5XG4gIHRocm93IG5ldyBFcnJvcignR2FtZSBjcmVhdGlvbiBmYWlsZWQnKTtcbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBTdGFydCBhY2NlcHRpbmcgcmVzcG9uc2VzXG4gKiBUcmFuc2l0aW9ucyBnYW1lIGZyb20g5rqW5YKZ5LitIHRvIOWHuumhjOS4rVxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZFxuICogQHJldHVybnMgU3VjY2VzcyBzdGF0dXMgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0QWNjZXB0aW5nQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSxcbiAgICB9O1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IFN0YXJ0QWNjZXB0aW5nU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IF9zZXNzaW9uSWQgPSBzZXNzaW9uSWRSZXN1bHQgYXMgc3RyaW5nO1xuXG4gICAgLy8gRXhlY3V0ZSB1c2UgY2FzZVxuICAgIGNvbnN0IHJlcG9zaXRvcnkgPSBjcmVhdGVHYW1lUmVwb3NpdG9yeSgpO1xuICAgIGNvbnN0IHVzZUNhc2UgPSBuZXcgU3RhcnRBY2NlcHRpbmdSZXNwb25zZXMocmVwb3NpdG9yeSk7XG5cbiAgICBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgIH0pO1xuXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyBmb3IgY2FjaGUgbWFuYWdlbWVudFxuICAgIHJldmFsaWRhdGVQYXRoKCcvZ2FtZXMnKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2dhbWVzLyR7dmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZH1gKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3RhcnQgYWNjZXB0aW5nIHJlc3BvbnNlczonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5zdGFydC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IEdldCBhbGwgZ2FtZXMgZm9yIGN1cnJlbnQgY3JlYXRvclxuICogQHJldHVybnMgTGlzdCBvZiBnYW1lcyB3aXRoIG1hbmFnZW1lbnQgaW5mbyBvciBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdhbWVzQWN0aW9uKCk6IFByb21pc2U8XG4gIHwgeyBzdWNjZXNzOiB0cnVlOyBnYW1lczogR2FtZU1hbmFnZW1lbnREdG9bXSB9XG4gIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGNyZWF0b3IgSUQpXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLm5vdEZvdW5kJyldLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbklkUmVzdWx0IGFzIHN0cmluZztcblxuICAgIC8vIEV4ZWN1dGUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IEdldEdhbWVzQnlDcmVhdG9yKHJlcG9zaXRvcnkpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGNyZWF0b3JJZDogc2Vzc2lvbklkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lczogcmVzdWx0LmdhbWVzLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBnYW1lczonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5mZXRjaC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IEdldCBnYW1lIGRldGFpbCBieSBJRFxuICogRmV0Y2hlcyBnYW1lIGRldGFpbHMgZm9yIGVkaXRpbmcvdmlld2luZ1xuICogQHBhcmFtIGdhbWVJZCBHYW1lIElEIHRvIGZldGNoXG4gKiBAcmV0dXJucyBHYW1lIGRldGFpbCBvciBlcnJvclxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2FtZURldGFpbEFjdGlvbihcbiAgZ2FtZUlkOiBzdHJpbmdcbik6IFByb21pc2U8XG4gIHsgc3VjY2VzczogdHJ1ZTsgZ2FtZTogR2FtZURldGFpbER0byB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBHZXQgZ2FtZSBmcm9tIHJlcG9zaXRvcnlcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCBnYW1lID0gYXdhaXQgcmVwb3NpdG9yeS5maW5kQnlJZChuZXcgR2FtZUlkKGdhbWVJZCkpO1xuXG4gICAgaWYgKCFnYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdnYW1lLmdhbWVOb3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYXV0aG9yaXphdGlvbiAtIG9ubHkgY3JlYXRvciBjYW4gdmlldy9lZGl0XG4gICAgaWYgKGdhbWUuY3JlYXRvcklkICE9PSBzZXNzaW9uSWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLnVuYXV0aG9yaXplZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gTWFwIHRvIERUT1xuICAgIGNvbnN0IGdhbWVEZXRhaWxEdG86IEdhbWVEZXRhaWxEdG8gPSB7XG4gICAgICBpZDogZ2FtZS5pZC50b1N0cmluZygpLFxuICAgICAgbmFtZTogZ2FtZS5uYW1lLFxuICAgICAgc3RhdHVzOiBnYW1lLnN0YXR1cy50b1N0cmluZygpLFxuICAgICAgbWF4UGxheWVyczogZ2FtZS5tYXhQbGF5ZXJzLFxuICAgICAgY3VycmVudFBsYXllcnM6IGdhbWUuY3VycmVudFBsYXllcnMsXG4gICAgICBhdmFpbGFibGVTbG90czogZ2FtZS5hdmFpbGFibGVTbG90cyxcbiAgICAgIGNyZWF0b3JJZDogZ2FtZS5jcmVhdG9ySWQsXG4gICAgICBjcmVhdGVkQXQ6IGdhbWUuY3JlYXRlZEF0LFxuICAgICAgdXBkYXRlZEF0OiBnYW1lLnVwZGF0ZWRBdCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lOiBnYW1lRGV0YWlsRHRvLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBnYW1lIGRldGFpbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5mZXRjaC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IFVwZGF0ZSBnYW1lIHNldHRpbmdzXG4gKiBVcGRhdGVzIGdhbWUgc2V0dGluZ3MgKHBsYXllciBsaW1pdCkgd2hlbiBnYW1lIGlzIGluIHByZXBhcmF0aW9uIHN0YXR1c1xuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZCBhbmQgcGxheWVyTGltaXRcbiAqIEByZXR1cm5zIFVwZGF0ZWQgZ2FtZSBkZXRhaWwgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdhbWVBY3Rpb24oXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTxcbiAgeyBzdWNjZXNzOiB0cnVlOyBnYW1lOiBHYW1lRGV0YWlsRHRvIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9XG4+IHtcbiAgdHJ5IHtcbiAgICAvLyBFeHRyYWN0IGFuZCBwYXJzZSBmb3JtIGRhdGFcbiAgICBjb25zdCByYXdEYXRhID0ge1xuICAgICAgZ2FtZUlkOiBmb3JtRGF0YS5nZXQoJ2dhbWVJZCcpIGFzIHN0cmluZyxcbiAgICAgIHBsYXllckxpbWl0OiBmb3JtRGF0YS5nZXQoJ3BsYXllckxpbWl0JykgPyBOdW1iZXIoZm9ybURhdGEuZ2V0KCdwbGF5ZXJMaW1pdCcpKSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IFVwZGF0ZUdhbWVTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRCAoZm9yIGF1dGhvcml6YXRpb24pXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLm5vdEZvdW5kJyldLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbklkUmVzdWx0IGFzIHN0cmluZztcblxuICAgIC8vIEV4ZWN1dGUgVXBkYXRlR2FtZVNldHRpbmdzIHVzZSBjYXNlXG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IGNyZWF0ZUdhbWVSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlQ2FzZSA9IG5ldyBVcGRhdGVHYW1lU2V0dGluZ3MocmVwb3NpdG9yeSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgcGxheWVyTGltaXQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5wbGF5ZXJMaW1pdCxcbiAgICAgIHJlcXVlc3RlcklkOiBzZXNzaW9uSWQsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3VsdC5nYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uZ2FtZS51cGRhdGUuZXJyb3InKV0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnL2dhbWVzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGdhbWU6IHJlc3VsdC5nYW1lLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBnYW1lOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgX2Zvcm06IFtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IGF3YWl0IHQoJ2FjdGlvbi5nYW1lLnVwZGF0ZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IERlbGV0ZSBnYW1lXG4gKiBEZWxldGVzIGEgZ2FtZSB3aXRoIGF1dGhvcml6YXRpb24gY2hlY2tcbiAqIEBwYXJhbSBmb3JtRGF0YSBGb3JtIGRhdGEgd2l0aCBnYW1lSWRcbiAqIEByZXR1cm5zIFN1Y2Nlc3Mgc3RhdHVzIG9yIHZhbGlkYXRpb24gZXJyb3JzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSBhcyBzdHJpbmcsXG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBEZWxldGVHYW1lU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBFeGVjdXRlIERlbGV0ZUdhbWUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IERlbGV0ZUdhbWUocmVwb3NpdG9yeSk7XG5cbiAgICBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgcmVxdWVzdGVySWQ6IHNlc3Npb25JZCxcbiAgICB9KTtcblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZ2FtZXMnKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGdhbWU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yczoge1xuICAgICAgICBfZm9ybTogW2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogYXdhaXQgdCgnYWN0aW9uLmdhbWUuZGVsZXRlLmVycm9yJyldLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogU2VydmVyIEFjdGlvbjogU3RhcnQgR2FtZSAoU3RhdHVzIFRyYW5zaXRpb24pXG4gKiBGZWF0dXJlOiAwMDQtc3RhdHVzLXRyYW5zaXRpb25cbiAqIFZhbGlkYXRlcyBhbmQgdHJhbnNpdGlvbnMgZ2FtZSBmcm9tIOa6luWCmeS4rSB0byDlh7rpoYzkuK0gd2l0aCBwcmVzZW50ZXIgdmFsaWRhdGlvblxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZFxuICogQHJldHVybnMgU3VjY2VzcyBzdGF0dXMgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZUFjdGlvbihcbiAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPHsgc3VjY2VzczogdHJ1ZSB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfT4ge1xuICB0cnkge1xuICAgIC8vIEV4dHJhY3QgYW5kIHZhbGlkYXRlIGZvcm0gZGF0YVxuICAgIGNvbnN0IHJhd0RhdGEgPSB7XG4gICAgICBnYW1lSWQ6IGZvcm1EYXRhLmdldCgnZ2FtZUlkJyksXG4gICAgICBzZXNzaW9uSWQ6ICcnLCAvLyBXaWxsIGJlIGZpbGxlZCBiZWxvd1xuICAgIH07XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRFxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4gc2Vzc2lvbklkUmVzdWx0O1xuICAgIH1cbiAgICByYXdEYXRhLnNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gU3RhcnRHYW1lU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgc3RhdHVzIHRyYW5zaXRpb24gZmlyc3RcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB2YWxpZGF0ZVVzZUNhc2UgPSBuZXcgVmFsaWRhdGVTdGF0dXNUcmFuc2l0aW9uKHJlcG9zaXRvcnkpO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3BvbnNlID0gYXdhaXQgdmFsaWRhdGVVc2VDYXNlLmV4ZWN1dGUoXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgJ+WHuumhjOS4rScsXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuc2Vzc2lvbklkXG4gICAgKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3BvbnNlLmNhblRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogdmFsaWRhdGlvblJlc3BvbnNlLmVycm9ycy5tYXAoKGVycikgPT4gZXJyLm1lc3NhZ2UpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIHRoZSBzdGF0dXMgdHJhbnNpdGlvblxuICAgIGNvbnN0IHN0YXJ0VXNlQ2FzZSA9IG5ldyBTdGFydEFjY2VwdGluZ1Jlc3BvbnNlcyhyZXBvc2l0b3J5KTtcbiAgICBhd2FpdCBzdGFydFVzZUNhc2UuZXhlY3V0ZSh7XG4gICAgICBnYW1lSWQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWQsXG4gICAgfSk7XG5cbiAgICAvLyBSZXZhbGlkYXRlIHBhdGhzIGZvciBjYWNoZSBtYW5hZ2VtZW50XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9nYW1lcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZ2FtZXMvJHt2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkfWApO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZ2FtZXMvJHt2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkfS9wcmVzZW50ZXJzYCk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHN0YXJ0IGdhbWU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yczoge1xuICAgICAgICBfZm9ybTogW2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogYXdhaXQgdCgnYWN0aW9uLmdhbWUuc3RhcnQuZXJyb3InKV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBDbG9zZSBHYW1lIChTdGF0dXMgVHJhbnNpdGlvbilcbiAqIEZlYXR1cmU6IDAwNC1zdGF0dXMtdHJhbnNpdGlvblxuICogVmFsaWRhdGVzIGFuZCB0cmFuc2l0aW9ucyBnYW1lIGZyb20g5Ye66aGM5LitIHRvIOe3oOWIhyB3aXRoIGNvbmZpcm1hdGlvblxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZCBhbmQgY29uZmlybWVkXG4gKiBAcmV0dXJucyBTdWNjZXNzIHN0YXR1cyBvciB2YWxpZGF0aW9uIGVycm9yc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSxcbiAgICAgIHNlc3Npb25JZDogJycsIC8vIFdpbGwgYmUgZmlsbGVkIGJlbG93XG4gICAgICBjb25maXJtZWQ6IGZvcm1EYXRhLmdldCgnY29uZmlybWVkJykgPT09ICd0cnVlJyxcbiAgICB9O1xuXG4gICAgLy8gR2V0IHNlc3Npb24gSURcbiAgICBjb25zdCBzZXNzaW9uSWRSZXN1bHQgPSBhd2FpdCBnZXRTZXNzaW9uSWRPckVycm9yKCk7XG4gICAgaWYgKHR5cGVvZiBzZXNzaW9uSWRSZXN1bHQgPT09ICdvYmplY3QnICYmICFzZXNzaW9uSWRSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHNlc3Npb25JZFJlc3VsdDtcbiAgICB9XG4gICAgcmF3RGF0YS5zZXNzaW9uSWQgPSBzZXNzaW9uSWRSZXN1bHQgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IENsb3NlR2FtZVNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yczogdmFsaWRhdGlvblJlc3VsdC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIHN0YXR1cyB0cmFuc2l0aW9uIGZpcnN0XG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IGNyZWF0ZUdhbWVSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdmFsaWRhdGVVc2VDYXNlID0gbmV3IFZhbGlkYXRlU3RhdHVzVHJhbnNpdGlvbihyZXBvc2l0b3J5KTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXNwb25zZSA9IGF3YWl0IHZhbGlkYXRlVXNlQ2FzZS5leGVjdXRlKFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZCxcbiAgICAgICfnt6DliIcnLFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5kYXRhLnNlc3Npb25JZFxuICAgICk7XG5cbiAgICBpZiAoIXZhbGlkYXRpb25SZXNwb25zZS5jYW5UcmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IHZhbGlkYXRpb25SZXNwb25zZS5lcnJvcnMubWFwKChlcnIpID0+IGVyci5tZXNzYWdlKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgc3RhdHVzIHRyYW5zaXRpb25cbiAgICBjb25zdCBjbG9zZVVzZUNhc2UgPSBuZXcgQ2xvc2VHYW1lKHJlcG9zaXRvcnkpO1xuICAgIGF3YWl0IGNsb3NlVXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGdhbWVJZDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZCxcbiAgICAgIHNlc3Npb25JZDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnNlc3Npb25JZCxcbiAgICB9KTtcblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnL2dhbWVzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9L3ByZXNlbnRlcnNgKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY2xvc2UgZ2FtZTonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5jbG9zZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0E2VHNCIn0=
}),
"[project]/src/server/domain/schemas/gameSchemas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Game Preparation Zod Validation Schemas
// Feature: 002-game-preparation
// All validation schemas with error codes for i18n translation via translateZodError()
__turbopack_context__.s([
    "AddEpisodeSchema",
    ()=>AddEpisodeSchema,
    "AddPresenterSchema",
    ()=>AddPresenterSchema,
    "AddPresenterWithEpisodesSchema",
    ()=>AddPresenterWithEpisodesSchema,
    "CloseGameSchema",
    ()=>CloseGameSchema,
    "CreateGameSchema",
    ()=>CreateGameSchema,
    "DeleteGameSchema",
    ()=>DeleteGameSchema,
    "GameIdSchema",
    ()=>GameIdSchema,
    "GameStatusSchema",
    ()=>GameStatusSchema,
    "RemoveEpisodeSchema",
    ()=>RemoveEpisodeSchema,
    "RemovePresenterSchema",
    ()=>RemovePresenterSchema,
    "StartAcceptingSchema",
    ()=>StartAcceptingSchema,
    "StartGameSchema",
    ()=>StartGameSchema,
    "UpdateEpisodeSchema",
    ()=>UpdateEpisodeSchema,
    "UpdateGameSchema",
    ()=>UpdateGameSchema,
    "ValidateTransitionSchema",
    ()=>ValidateTransitionSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const GameIdSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
    message: 'REQUIRED'
});
const GameStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    '準備中',
    '出題中',
    '締切'
], {
    message: 'INVALID'
});
const CreateGameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(100, {
        message: 'GAME_NAME_TOO_LONG'
    }).nullable().optional(),
    playerLimit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int({
        message: 'GAME_PLAYER_LIMIT_NOT_INTEGER'
    }).min(1, {
        message: 'GAME_PLAYER_LIMIT_TOO_LOW'
    }).max(100, {
        message: 'GAME_PLAYER_LIMIT_TOO_HIGH'
    })
});
const UpdateGameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    gameId: GameIdSchema,
    playerLimit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1).max(100).optional()
});
const StartAcceptingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    gameId: GameIdSchema
});
const DeleteGameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    gameId: GameIdSchema,
    confirmed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
});
const AddPresenterSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    gameId: GameIdSchema,
    nickname: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'NICKNAME_EMPTY'
    }).max(50, {
        message: 'NICKNAME_TOO_LONG'
    })
});
const RemovePresenterSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    gameId: GameIdSchema,
    presenterId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'REQUIRED'
    })
});
const AddEpisodeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    presenterId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'REQUIRED'
    }),
    text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'EPISODE_EMPTY'
    }).max(1000, {
        message: 'EPISODE_TOO_LONG'
    }),
    isLie: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
const UpdateEpisodeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    episodeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'REQUIRED'
    }),
    text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(1000).optional(),
    isLie: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
}).refine((data)=>data.text !== undefined || data.isLie !== undefined, {
    message: 'REQUIRED'
});
const RemoveEpisodeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    episodeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'REQUIRED'
    })
});
const AddPresenterWithEpisodesSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    gameId: GameIdSchema,
    nickname: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'NICKNAME_EMPTY'
    }).max(50, {
        message: 'NICKNAME_TOO_LONG'
    }),
    episodes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
            message: 'EPISODE_EMPTY'
        }).max(1000, {
            message: 'EPISODE_TOO_LONG'
        }),
        isLie: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    })).length(3, {
        message: 'EPISODE_COUNT'
    })
}).refine((data)=>data.episodes.filter((e)=>e.isLie).length === 1, {
    message: 'EPISODE_LIE_COUNT',
    path: [
        'episodes'
    ]
});
const StartGameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    gameId: GameIdSchema,
    sessionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'REQUIRED'
    })
});
const CloseGameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    gameId: GameIdSchema,
    sessionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'REQUIRED'
    }),
    confirmed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().refine((val)=>val === true, {
        message: 'REQUIRED'
    })
});
const ValidateTransitionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    gameId: GameIdSchema,
    targetStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        '出題中',
        '締切'
    ], {
        message: 'INVALID'
    })
});
}),
"[project]/src/hooks/useGameForm.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGameForm",
    ()=>useGameForm
]);
// useGameForm Hook
// Feature: 002-game-preparation
// Custom hook for game creation/editing form with Zod validation
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b6aa73__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:b6aa73 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cc0d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:cc0d83 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$schemas$2f$gameSchemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/schemas/gameSchemas.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function useGameForm({ mode = 'create', gameId: _gameId } = {}) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [createdGame, setCreatedGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setErrors({});
        setIsSuccess(false);
        const formData = new FormData(e.currentTarget);
        // Client-side validation with Zod
        if (mode === 'create') {
            const rawData = {
                playerLimit: Number(formData.get('playerLimit'))
            };
            const validationResult = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$schemas$2f$gameSchemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGameSchema"].safeParse(rawData);
            if (!validationResult.success) {
                setErrors(validationResult.error.flatten().fieldErrors);
                return;
            }
        } else {
            // Edit mode validation
            const rawData = {
                gameId: formData.get('gameId'),
                playerLimit: Number(formData.get('playerLimit'))
            };
            const validationResult = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$schemas$2f$gameSchemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpdateGameSchema"].safeParse(rawData);
            if (!validationResult.success) {
                setErrors(validationResult.error.flatten().fieldErrors);
                return;
            }
        }
        // Server action call with transition
        startTransition(async ()=>{
            try {
                if (mode === 'create') {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b6aa73__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createGameAction"])(formData);
                    if (result.success) {
                        setCreatedGame(result.game);
                        setIsSuccess(true);
                        // Redirect to game list after short delay
                        setTimeout(()=>{
                            router.push('/games');
                        }, 1500);
                    } else {
                        setErrors(result.errors);
                    }
                } else {
                    // Edit mode
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cc0d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateGameAction"])(formData);
                    if (result.success) {
                        setIsSuccess(true);
                        // Refresh the page to show updated data
                        setTimeout(()=>{
                            router.refresh();
                        }, 1000);
                    } else {
                        setErrors(result.errors);
                    }
                }
            } catch (error) {
                console.error('Form submission error:', error);
                setErrors({
                    _form: [
                        '予期しないエラーが発生しました'
                    ]
                });
            }
        });
    };
    return {
        handleSubmit,
        isSubmitting: isPending,
        errors,
        createdGame,
        isSuccess
    };
}
}),
"[project]/src/components/domain/game/GameForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameForm",
    ()=>GameForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// GameForm Component
// Feature: 002-game-preparation
// Form for creating/editing games with player limit validation
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGameForm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGameForm.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function GameForm({ mode = 'create', gameId, initialPlayerLimit = 10, currentPlayers = 0 }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { handleSubmit, isSubmitting, errors, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGameForm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGameForm"])({
        mode,
        gameId
    });
    const isEditMode = mode === 'edit';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: isEditMode ? '' : 'max-w-md mx-auto p-6',
        children: [
            !isEditMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-6",
                children: t('game.newGame')
            }, void 0, false, {
                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                lineNumber: 42,
                columnNumber: 23
            }, this),
            isSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 bg-green-50 border border-green-200 rounded-md",
                role: "alert",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-green-800",
                    children: isEditMode ? t('action.game.update.success') : `${t('action.game.create.success')} ${t('common.loading')}`
                }, void 0, false, {
                    fileName: "[project]/src/components/domain/game/GameForm.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    isEditMode && gameId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "hidden",
                        name: "gameId",
                        value: gameId
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/GameForm.tsx",
                        lineNumber: 56,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "name",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    t('form.game.name.label'),
                                    " (",
                                    t('form.game.name.optional'),
                                    ",",
                                    ' ',
                                    t('validation.game.name.tooLong'),
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "name",
                                name: "name",
                                maxLength: 100,
                                placeholder: t('form.game.name.placeholder'),
                                disabled: isSubmitting || isSuccess,
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed",
                                "aria-describedby": errors.name ? 'name-error' : undefined,
                                "aria-invalid": errors.name ? 'true' : 'false'
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-gray-500",
                                children: t('form.game.name.description')
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                id: "name-error",
                                className: "mt-1 text-sm text-red-600",
                                role: "alert",
                                children: errors.name[0]
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/domain/game/GameForm.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "playerLimit",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    t('form.game.playerLimit.label'),
                                    " (1-100)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                id: "playerLimit",
                                name: "playerLimit",
                                min: isEditMode ? currentPlayers : 1,
                                max: "100",
                                defaultValue: initialPlayerLimit,
                                required: true,
                                disabled: isSubmitting || isSuccess,
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed",
                                "aria-describedby": errors.playerLimit ? 'playerLimit-error' : undefined,
                                "aria-invalid": errors.playerLimit ? 'true' : 'false'
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            isEditMode && currentPlayers > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-gray-500",
                                children: t('form.game.playerLimit.currentPlayers').replace('{count}', String(currentPlayers))
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            errors.playerLimit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                id: "playerLimit-error",
                                className: "mt-1 text-sm text-red-600",
                                role: "alert",
                                children: errors.playerLimit[0]
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/domain/game/GameForm.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    errors._form && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-red-50 border border-red-200 rounded-md",
                        role: "alert",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-800",
                            children: errors._form[0]
                        }, void 0, false, {
                            fileName: "[project]/src/components/domain/game/GameForm.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/GameForm.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting || isSuccess,
                                className: "flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
                                children: isSubmitting ? isEditMode ? t('status.labels.updating') : t('common.loading') : isEditMode ? t('game.editSettings') : t('game.createGame')
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: isEditMode ? `/games/${gameId}` : '/top',
                                className: "px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors text-center",
                                children: t('common.cancel')
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/domain/game/GameForm.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            !isEditMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 text-sm text-gray-600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: t('game.createHelp')
                }, void 0, false, {
                    fileName: "[project]/src/components/domain/game/GameForm.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/domain/game/GameForm.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/domain/game/GameForm.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/AccessibilityProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * AccessibilityProvider Component
 * Feature: 004-status-transition - Enhanced feedback
 * Provides accessibility context and screen reader announcements
 */ __turbopack_context__.s([
    "AccessibilityProvider",
    ()=>AccessibilityProvider,
    "useAccessibility",
    ()=>useAccessibility,
    "useConditionalAnnouncement",
    ()=>useConditionalAnnouncement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const AccessibilityContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function AccessibilityProvider({ children }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const politeAnnouncerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const assertiveAnnouncerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const announceToScreenReader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, priority = 'polite')=>{
        const announcer = priority === 'assertive' ? assertiveAnnouncerRef.current : politeAnnouncerRef.current;
        if (announcer) {
            // Clear first, then set message to ensure screen readers announce it
            announcer.textContent = '';
            setTimeout(()=>{
                if (announcer) {
                    announcer.textContent = message;
                }
            }, 100);
        }
    }, []);
    const announceStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((oldStatus, newStatus)=>{
        const message = t('accessibility.statusChanged').replace('{oldStatus}', oldStatus).replace('{newStatus}', newStatus);
        announceToScreenReader(message, 'polite');
    }, [
        announceToScreenReader,
        t
    ]);
    const announceError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((error)=>{
        const message = t('accessibility.errorOccurred').replace('{error}', error);
        announceToScreenReader(message, 'assertive');
    }, [
        announceToScreenReader,
        t
    ]);
    const announceSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message)=>{
        const successMessage = t('accessibility.operationSucceeded').replace('{message}', message);
        announceToScreenReader(successMessage, 'polite');
    }, [
        announceToScreenReader,
        t
    ]);
    const value = {
        announceToScreenReader,
        announceStatusChange,
        announceError,
        announceSuccess
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccessibilityContext.Provider, {
        value: value,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sr-only",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("output", {
                        ref: politeAnnouncerRef,
                        "aria-live": "polite",
                        "aria-atomic": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AccessibilityProvider.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: assertiveAnnouncerRef,
                        "aria-live": "assertive",
                        "aria-atomic": "true",
                        role: "alert"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/AccessibilityProvider.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/AccessibilityProvider.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/AccessibilityProvider.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
function useAccessibility() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AccessibilityContext);
    if (!context) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider');
    }
    return context;
}
function useConditionalAnnouncement() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { announceToScreenReader } = useAccessibility();
    const announceIfEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, priority = 'polite')=>{
        // Check if user prefers reduced motion (often correlates with accessibility needs)
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // Always announce for screen reader users, but be more verbose if reduced motion is preferred
        if (prefersReducedMotion) {
            announceToScreenReader(t('accessibility.detailedUpdate').replace('{message}', message), priority);
        } else {
            announceToScreenReader(message, priority);
        }
    }, [
        announceToScreenReader,
        t
    ]);
    return {
        announceIfEnabled
    };
}
}),
"[project]/src/lib/animations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Animation utilities for enhanced UI feedback
 * Feature: Enhanced status transition feedback
 */ __turbopack_context__.s([
    "animationSequences",
    ()=>animationSequences,
    "animationUtils",
    ()=>animationUtils,
    "animations",
    ()=>animations,
    "customAnimations",
    ()=>customAnimations,
    "generateConfettiParticles",
    ()=>generateConfettiParticles
]);
const animations = {
    // Success animations
    success: {
        button: 'transition-all duration-300 bg-green-600 hover:bg-green-700 scale-105',
        icon: 'animate-pulse text-green-600',
        badge: 'transition-all duration-500 animate-pulse',
        container: 'animate-bounce-in'
    },
    // Error animations
    error: {
        button: 'transition-all duration-300 bg-red-600 hover:bg-red-700 animate-shake',
        icon: 'animate-pulse text-red-600',
        badge: 'transition-all duration-500 animate-pulse',
        container: 'animate-shake'
    },
    // Loading animations
    loading: {
        button: 'transition-all duration-200 opacity-75 cursor-not-allowed',
        spinner: 'animate-spin',
        pulse: 'animate-pulse',
        progress: 'animate-progress'
    },
    // Status badge transitions
    statusTransition: {
        fadeOut: 'transition-opacity duration-300 opacity-0',
        fadeIn: 'transition-opacity duration-300 opacity-100',
        highlight: 'transition-all duration-1000 ring-4 ring-blue-300 ring-opacity-50'
    },
    // Toast animations
    toast: {
        slideIn: 'animate-slide-in-right',
        slideOut: 'animate-slide-out-right',
        fadeIn: 'animate-fade-in',
        fadeOut: 'animate-fade-out'
    }
};
const customAnimations = {
    '@keyframes bounce-in': {
        '0%': {
            transform: 'scale(0.9)',
            opacity: '0'
        },
        '50%': {
            transform: 'scale(1.05)',
            opacity: '0.8'
        },
        '100%': {
            transform: 'scale(1)',
            opacity: '1'
        }
    },
    '@keyframes shake': {
        '0%, 100%': {
            transform: 'translateX(0)'
        },
        '10%, 30%, 50%, 70%, 90%': {
            transform: 'translateX(-2px)'
        },
        '20%, 40%, 60%, 80%': {
            transform: 'translateX(2px)'
        }
    },
    '@keyframes slide-in-right': {
        '0%': {
            transform: 'translateX(100%)',
            opacity: '0'
        },
        '100%': {
            transform: 'translateX(0)',
            opacity: '1'
        }
    },
    '@keyframes slide-out-right': {
        '0%': {
            transform: 'translateX(0)',
            opacity: '1'
        },
        '100%': {
            transform: 'translateX(100%)',
            opacity: '0'
        }
    },
    '@keyframes fade-in': {
        '0%': {
            opacity: '0'
        },
        '100%': {
            opacity: '1'
        }
    },
    '@keyframes fade-out': {
        '0%': {
            opacity: '1'
        },
        '100%': {
            opacity: '0'
        }
    },
    '@keyframes progress': {
        '0%': {
            transform: 'translateX(-100%)'
        },
        '100%': {
            transform: 'translateX(100%)'
        }
    }
};
const animationUtils = {
    /**
   * Add temporary animation class and remove it after duration
   */ addTemporaryClass: (element, className, duration = 1000)=>{
        return new Promise((resolve)=>{
            element.classList.add(className);
            setTimeout(()=>{
                element.classList.remove(className);
                resolve();
            }, duration);
        });
    },
    /**
   * Create a success feedback sequence
   */ playSuccessFeedback: async (element)=>{
        await animationUtils.addTemporaryClass(element, 'animate-bounce-in', 600);
        await animationUtils.addTemporaryClass(element, animations.statusTransition.highlight, 2000);
    },
    /**
   * Create an error feedback sequence
   */ playErrorFeedback: async (element)=>{
        await animationUtils.addTemporaryClass(element, 'animate-shake', 600);
    },
    /**
   * Smooth status badge transition
   */ transitionStatusBadge: async (element)=>{
        // Fade out
        element.classList.add(animations.statusTransition.fadeOut);
        await new Promise((resolve)=>setTimeout(resolve, 300));
        // Update content happens here (external)
        // Fade in with highlight
        element.classList.remove(animations.statusTransition.fadeOut);
        element.classList.add(animations.statusTransition.fadeIn);
        await new Promise((resolve)=>setTimeout(resolve, 300));
        // Temporary highlight
        await animationUtils.addTemporaryClass(element, animations.statusTransition.highlight, 2000);
    },
    /**
   * Check if user prefers reduced motion
   */ prefersReducedMotion: ()=>{
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },
    /**
   * Conditionally apply animation based on user preferences
   */ conditionalAnimation: (element, className, duration = 1000)=>{
        if (animationUtils.prefersReducedMotion()) {
            return Promise.resolve();
        }
        return animationUtils.addTemporaryClass(element, className, duration);
    }
};
const animationSequences = {
    buttonSuccess: async (buttonElement)=>{
        if (!animationUtils.prefersReducedMotion()) {
            await animationUtils.addTemporaryClass(buttonElement, 'scale-105 bg-green-600', 800);
        }
    },
    buttonError: async (buttonElement)=>{
        if (!animationUtils.prefersReducedMotion()) {
            await animationUtils.addTemporaryClass(buttonElement, 'animate-shake', 600);
        }
    },
    statusBadgeUpdate: async (badgeElement, onContentUpdate)=>{
        if (animationUtils.prefersReducedMotion()) {
            onContentUpdate();
            return;
        }
        // Fade out
        badgeElement.classList.add(animations.statusTransition.fadeOut);
        await new Promise((resolve)=>setTimeout(resolve, 300));
        // Update content
        onContentUpdate();
        // Fade in
        badgeElement.classList.remove(animations.statusTransition.fadeOut);
        badgeElement.classList.add(animations.statusTransition.fadeIn);
        await new Promise((resolve)=>setTimeout(resolve, 300));
        // Highlight
        await animationUtils.addTemporaryClass(badgeElement, animations.statusTransition.highlight, 2000);
    }
};
function generateConfettiParticles(count) {
    const colors = [
        '#ff6b6b',
        '#4ecdc4',
        '#ffe66d',
        '#a8dadc',
        '#f1faee',
        '#95e1d3',
        '#ff9ff3'
    ];
    const particles = [];
    for(let i = 0; i < count; i++){
        particles.push({
            id: i,
            x: Math.random() * 100,
            y: -10,
            rotation: Math.random() * 360,
            scale: 0.5 + Math.random() * 0.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            velocity: {
                x: (Math.random() - 0.5) * 2,
                y: 1 + Math.random() * 2
            }
        });
    }
    return particles;
}
}),
"[project]/src/components/domain/game/GameStatusBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * GameStatusBadge Component
 * Feature: 004-status-transition, Enhanced feedback
 * Displays current game status with appropriate styling and smooth animations
 */ __turbopack_context__.s([
    "GameStatusBadge",
    ()=>GameStatusBadge,
    "GameStatusBadgeLarge",
    ()=>GameStatusBadgeLarge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AccessibilityProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AccessibilityProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function GameStatusBadge({ status, className = '', animated = false }) {
    const [previousStatus, setPreviousStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(status);
    const [isHighlighted, setIsHighlighted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const badgeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { announceStatusChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AccessibilityProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccessibility"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (animated && previousStatus !== status && badgeRef.current) {
            // Announce status change to screen readers
            announceStatusChange(previousStatus, status);
            // Status changed, play animation
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationSequences"].statusBadgeUpdate(badgeRef.current, ()=>{
                setPreviousStatus(status);
            });
            // Highlight for a moment
            setIsHighlighted(true);
            const timeout = setTimeout(()=>setIsHighlighted(false), 2000);
            return ()=>clearTimeout(timeout);
        } else {
            setPreviousStatus(status);
        }
    }, [
        status,
        previousStatus,
        animated,
        announceStatusChange
    ]);
    const getStatusConfig = (status)=>{
        switch(status){
            case '準備中':
                return {
                    label: '準備中',
                    className: 'bg-yellow-100 text-yellow-800 border-yellow-200',
                    ariaLabel: 'ゲームは準備中です'
                };
            case '出題中':
                return {
                    label: '出題中',
                    className: 'bg-green-100 text-green-800 border-green-200',
                    ariaLabel: 'ゲームは出題中です'
                };
            case '締切':
                return {
                    label: '締切',
                    className: 'bg-gray-100 text-gray-800 border-gray-200',
                    ariaLabel: 'ゲームは締切です'
                };
            default:
                return {
                    label: status,
                    className: 'bg-gray-100 text-gray-800 border-gray-200',
                    ariaLabel: `ゲームステータス: ${status}`
                };
        }
    };
    const config = getStatusConfig(status);
    const highlightClasses = isHighlighted ? 'ring-4 ring-blue-300 ring-opacity-50 scale-110' : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("output", {
        ref: badgeRef,
        className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all duration-300 ${config.className} ${highlightClasses} ${className}`,
        "aria-label": config.ariaLabel,
        "aria-live": animated ? 'polite' : undefined,
        children: config.label
    }, void 0, false, {
        fileName: "[project]/src/components/domain/game/GameStatusBadge.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
function GameStatusBadgeLarge({ status, className = '', animated = false }) {
    const [previousStatus, setPreviousStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(status);
    const [isHighlighted, setIsHighlighted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const badgeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { announceStatusChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AccessibilityProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccessibility"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (animated && previousStatus !== status && badgeRef.current) {
            // Announce status change to screen readers
            announceStatusChange(previousStatus, status);
            // Status changed, play animation
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationSequences"].statusBadgeUpdate(badgeRef.current, ()=>{
                setPreviousStatus(status);
            });
            // Highlight for a moment
            setIsHighlighted(true);
            const timeout = setTimeout(()=>setIsHighlighted(false), 2000);
            return ()=>clearTimeout(timeout);
        } else {
            setPreviousStatus(status);
        }
    }, [
        status,
        previousStatus,
        animated,
        announceStatusChange
    ]);
    const getStatusConfig = (status)=>{
        switch(status){
            case '準備中':
                return {
                    label: '準備中',
                    className: 'bg-yellow-100 text-yellow-800 border-yellow-300',
                    ariaLabel: 'ゲームは準備中です'
                };
            case '出題中':
                return {
                    label: '出題中',
                    className: 'bg-green-100 text-green-800 border-green-300',
                    ariaLabel: 'ゲームは出題中です'
                };
            case '締切':
                return {
                    label: '締切',
                    className: 'bg-gray-100 text-gray-800 border-gray-300',
                    ariaLabel: 'ゲームは締切です'
                };
            default:
                return {
                    label: status,
                    className: 'bg-gray-100 text-gray-800 border-gray-300',
                    ariaLabel: `ゲームステータス: ${status}`
                };
        }
    };
    const config = getStatusConfig(status);
    const highlightClasses = isHighlighted ? 'ring-4 ring-blue-300 ring-opacity-50 scale-110' : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("output", {
        ref: badgeRef,
        className: `inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-all duration-300 ${config.className} ${highlightClasses} ${className}`,
        "aria-label": config.ariaLabel,
        "aria-live": animated ? 'polite' : undefined,
        children: config.label
    }, void 0, false, {
        fileName: "[project]/src/components/domain/game/GameStatusBadge.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/actions/data:a40d96 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40f4c2539287d48340dc1f38549e1623958388738b":"startGameAction"},"src/app/actions/game.ts",""] */ __turbopack_context__.s([
    "startGameAction",
    ()=>startGameAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var startGameAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40f4c2539287d48340dc1f38549e1623958388738b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "startGameAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2FtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbi8vIEdhbWUgU2VydmVyIEFjdGlvbnNcbi8vIEZlYXR1cmU6IDAwMi1nYW1lLXByZXBhcmF0aW9uXG4vLyBTZXJ2ZXIgQWN0aW9ucyB3aXRoIFpvZCB2YWxpZGF0aW9uIGZvciBnYW1lIG1hbmFnZW1lbnRcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHQgfSBmcm9tICdAL2xpYi9pMThuL3NlcnZlcic7XG5pbXBvcnQgdHlwZSB7IEdhbWVEZXRhaWxEdG8gfSBmcm9tICdAL3NlcnZlci9hcHBsaWNhdGlvbi9kdG8vR2FtZURldGFpbER0byc7XG5pbXBvcnQgdHlwZSB7IENyZWF0ZUdhbWVPdXRwdXQsIEdhbWVNYW5hZ2VtZW50RHRvIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vZHRvL0dhbWVEdG8nO1xuaW1wb3J0IHsgQ2xvc2VHYW1lIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0Nsb3NlR2FtZSc7XG5pbXBvcnQgeyBDcmVhdGVHYW1lIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0NyZWF0ZUdhbWUnO1xuaW1wb3J0IHsgRGVsZXRlR2FtZSB9IGZyb20gJ0Avc2VydmVyL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9nYW1lcy9EZWxldGVHYW1lJztcbmltcG9ydCB7IEdldEdhbWVzQnlDcmVhdG9yIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL0dldEdhbWVzQnlDcmVhdG9yJztcbmltcG9ydCB7IFN0YXJ0QWNjZXB0aW5nUmVzcG9uc2VzIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL1N0YXJ0QWNjZXB0aW5nUmVzcG9uc2VzJztcbmltcG9ydCB7IFVwZGF0ZUdhbWVTZXR0aW5ncyB9IGZyb20gJ0Avc2VydmVyL2FwcGxpY2F0aW9uL3VzZS1jYXNlcy9nYW1lcy9VcGRhdGVHYW1lU2V0dGluZ3MnO1xuaW1wb3J0IHsgVmFsaWRhdGVTdGF0dXNUcmFuc2l0aW9uIH0gZnJvbSAnQC9zZXJ2ZXIvYXBwbGljYXRpb24vdXNlLWNhc2VzL2dhbWVzL1ZhbGlkYXRlU3RhdHVzVHJhbnNpdGlvbic7XG5pbXBvcnQge1xuICBDbG9zZUdhbWVTY2hlbWEsXG4gIENyZWF0ZUdhbWVTY2hlbWEsXG4gIERlbGV0ZUdhbWVTY2hlbWEsXG4gIFN0YXJ0QWNjZXB0aW5nU2NoZW1hLFxuICBTdGFydEdhbWVTY2hlbWEsXG4gIFVwZGF0ZUdhbWVTY2hlbWEsXG59IGZyb20gJ0Avc2VydmVyL2RvbWFpbi9zY2hlbWFzL2dhbWVTY2hlbWFzJztcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJ0Avc2VydmVyL2RvbWFpbi92YWx1ZS1vYmplY3RzL0dhbWVJZCc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZUNvbnRhaW5lciB9IGZyb20gJ0Avc2VydmVyL2luZnJhc3RydWN0dXJlL2RpL1Nlc3Npb25TZXJ2aWNlQ29udGFpbmVyJztcbmltcG9ydCB7IGNyZWF0ZUdhbWVSZXBvc2l0b3J5IH0gZnJvbSAnQC9zZXJ2ZXIvaW5mcmFzdHJ1Y3R1cmUvcmVwb3NpdG9yaWVzJztcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHNlc3Npb24gSUQgd2l0aCBjb25zaXN0ZW50IGVycm9yIGhhbmRsaW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb25JZE9yRXJyb3IoKTogUHJvbWlzZTxcbiAgc3RyaW5nIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvblNlcnZpY2UgPSBTZXNzaW9uU2VydmljZUNvbnRhaW5lci5nZXRTZXNzaW9uU2VydmljZSgpO1xuICAgIHJldHVybiBhd2FpdCBzZXNzaW9uU2VydmljZS5yZXF1aXJlQ3VycmVudFNlc3Npb24oKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbYXdhaXQgdCgnYWN0aW9uLnNlc3Npb24ubm90Rm91bmQnKV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBDcmVhdGUgbmV3IGdhbWVcbiAqIFZhbGlkYXRlcyBpbnB1dCB3aXRoIFpvZCwgY3JlYXRlcyBnYW1lIHZpYSBDcmVhdGVHYW1lIHVzZSBjYXNlXG4gKiBAcGFyYW0gZm9ybURhdGEgRm9ybSBkYXRhIGZyb20gR2FtZUZvcm1cbiAqIEByZXR1cm5zIENyZWF0ZWQgZ2FtZSBkYXRhIG9yIHZhbGlkYXRpb24gZXJyb3JzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8XG4gIHsgc3VjY2VzczogdHJ1ZTsgZ2FtZTogQ3JlYXRlR2FtZU91dHB1dCB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgcGFyc2UgZm9ybSBkYXRhXG4gICAgY29uc3QgZ2FtZU5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKTtcbiAgICBjb25zdCByYXdEYXRhID0ge1xuICAgICAgbmFtZTogZ2FtZU5hbWUgPT09ICcnID8gbnVsbCA6IChnYW1lTmFtZT8udG9TdHJpbmcoKSA/PyBudWxsKSxcbiAgICAgIHBsYXllckxpbWl0OiBOdW1iZXIoZm9ybURhdGEuZ2V0KCdwbGF5ZXJMaW1pdCcpKSxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IENyZWF0ZUdhbWVTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRCAobW9kZXJhdG9yL2NyZWF0b3IgSUQpXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uSWRSZXN1bHQ7XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBFeGVjdXRlIENyZWF0ZUdhbWUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IENyZWF0ZUdhbWUocmVwb3NpdG9yeSk7XG5cbiAgICBjb25zdCBnYW1lID0gYXdhaXQgdXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGNyZWF0b3JJZDogc2Vzc2lvbklkLFxuICAgICAgbmFtZTogdmFsaWRhdGlvblJlc3VsdC5kYXRhLm5hbWUsXG4gICAgICBwbGF5ZXJMaW1pdDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnBsYXllckxpbWl0LFxuICAgIH0pO1xuXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyBmb3IgY2FjaGUgbWFuYWdlbWVudFxuICAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9nYW1lcycpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBnYW1lOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgX2Zvcm06IFtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IGF3YWl0IHQoJ2FjdGlvbi5nYW1lLmNyZWF0ZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IENyZWF0ZSBnYW1lIGFuZCByZWRpcmVjdCB0byBnYW1lIGxpc3RcbiAqIENvbnZlbmllbmNlIHdyYXBwZXIgdGhhdCByZWRpcmVjdHMgb24gc3VjY2Vzc1xuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSBmcm9tIEdhbWVGb3JtXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYW1lQW5kUmVkaXJlY3QoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUdhbWVBY3Rpb24oZm9ybURhdGEpO1xuXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIC8vIFJlZGlyZWN0IHRvIGdhbWUgbGlzdCBvciBnYW1lIGRldGFpbCBwYWdlXG4gICAgcmVkaXJlY3QoJy8nKTtcbiAgfVxuXG4gIC8vIE9uIGZhaWx1cmUsIGxldCB0aGUgZm9ybSBjb21wb25lbnQgaGFuZGxlIGVycm9yc1xuICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuIGFzIHRoZSBmb3JtIHdpbGwgY2FsbCBjcmVhdGVHYW1lQWN0aW9uIGRpcmVjdGx5XG4gIHRocm93IG5ldyBFcnJvcignR2FtZSBjcmVhdGlvbiBmYWlsZWQnKTtcbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBTdGFydCBhY2NlcHRpbmcgcmVzcG9uc2VzXG4gKiBUcmFuc2l0aW9ucyBnYW1lIGZyb20g5rqW5YKZ5LitIHRvIOWHuumhjOS4rVxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZFxuICogQHJldHVybnMgU3VjY2VzcyBzdGF0dXMgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0QWNjZXB0aW5nQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSxcbiAgICB9O1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IFN0YXJ0QWNjZXB0aW5nU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IF9zZXNzaW9uSWQgPSBzZXNzaW9uSWRSZXN1bHQgYXMgc3RyaW5nO1xuXG4gICAgLy8gRXhlY3V0ZSB1c2UgY2FzZVxuICAgIGNvbnN0IHJlcG9zaXRvcnkgPSBjcmVhdGVHYW1lUmVwb3NpdG9yeSgpO1xuICAgIGNvbnN0IHVzZUNhc2UgPSBuZXcgU3RhcnRBY2NlcHRpbmdSZXNwb25zZXMocmVwb3NpdG9yeSk7XG5cbiAgICBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgIH0pO1xuXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyBmb3IgY2FjaGUgbWFuYWdlbWVudFxuICAgIHJldmFsaWRhdGVQYXRoKCcvZ2FtZXMnKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2dhbWVzLyR7dmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZH1gKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3RhcnQgYWNjZXB0aW5nIHJlc3BvbnNlczonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5zdGFydC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IEdldCBhbGwgZ2FtZXMgZm9yIGN1cnJlbnQgY3JlYXRvclxuICogQHJldHVybnMgTGlzdCBvZiBnYW1lcyB3aXRoIG1hbmFnZW1lbnQgaW5mbyBvciBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdhbWVzQWN0aW9uKCk6IFByb21pc2U8XG4gIHwgeyBzdWNjZXNzOiB0cnVlOyBnYW1lczogR2FtZU1hbmFnZW1lbnREdG9bXSB9XG4gIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGNyZWF0b3IgSUQpXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLm5vdEZvdW5kJyldLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbklkUmVzdWx0IGFzIHN0cmluZztcblxuICAgIC8vIEV4ZWN1dGUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IEdldEdhbWVzQnlDcmVhdG9yKHJlcG9zaXRvcnkpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGNyZWF0b3JJZDogc2Vzc2lvbklkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lczogcmVzdWx0LmdhbWVzLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBnYW1lczonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5mZXRjaC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IEdldCBnYW1lIGRldGFpbCBieSBJRFxuICogRmV0Y2hlcyBnYW1lIGRldGFpbHMgZm9yIGVkaXRpbmcvdmlld2luZ1xuICogQHBhcmFtIGdhbWVJZCBHYW1lIElEIHRvIGZldGNoXG4gKiBAcmV0dXJucyBHYW1lIGRldGFpbCBvciBlcnJvclxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2FtZURldGFpbEFjdGlvbihcbiAgZ2FtZUlkOiBzdHJpbmdcbik6IFByb21pc2U8XG4gIHsgc3VjY2VzczogdHJ1ZTsgZ2FtZTogR2FtZURldGFpbER0byB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfVxuPiB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBHZXQgZ2FtZSBmcm9tIHJlcG9zaXRvcnlcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCBnYW1lID0gYXdhaXQgcmVwb3NpdG9yeS5maW5kQnlJZChuZXcgR2FtZUlkKGdhbWVJZCkpO1xuXG4gICAgaWYgKCFnYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdnYW1lLmdhbWVOb3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYXV0aG9yaXphdGlvbiAtIG9ubHkgY3JlYXRvciBjYW4gdmlldy9lZGl0XG4gICAgaWYgKGdhbWUuY3JlYXRvcklkICE9PSBzZXNzaW9uSWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLnVuYXV0aG9yaXplZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gTWFwIHRvIERUT1xuICAgIGNvbnN0IGdhbWVEZXRhaWxEdG86IEdhbWVEZXRhaWxEdG8gPSB7XG4gICAgICBpZDogZ2FtZS5pZC50b1N0cmluZygpLFxuICAgICAgbmFtZTogZ2FtZS5uYW1lLFxuICAgICAgc3RhdHVzOiBnYW1lLnN0YXR1cy50b1N0cmluZygpLFxuICAgICAgbWF4UGxheWVyczogZ2FtZS5tYXhQbGF5ZXJzLFxuICAgICAgY3VycmVudFBsYXllcnM6IGdhbWUuY3VycmVudFBsYXllcnMsXG4gICAgICBhdmFpbGFibGVTbG90czogZ2FtZS5hdmFpbGFibGVTbG90cyxcbiAgICAgIGNyZWF0b3JJZDogZ2FtZS5jcmVhdG9ySWQsXG4gICAgICBjcmVhdGVkQXQ6IGdhbWUuY3JlYXRlZEF0LFxuICAgICAgdXBkYXRlZEF0OiBnYW1lLnVwZGF0ZWRBdCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBnYW1lOiBnYW1lRGV0YWlsRHRvLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBnYW1lIGRldGFpbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5mZXRjaC5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IFVwZGF0ZSBnYW1lIHNldHRpbmdzXG4gKiBVcGRhdGVzIGdhbWUgc2V0dGluZ3MgKHBsYXllciBsaW1pdCkgd2hlbiBnYW1lIGlzIGluIHByZXBhcmF0aW9uIHN0YXR1c1xuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZCBhbmQgcGxheWVyTGltaXRcbiAqIEByZXR1cm5zIFVwZGF0ZWQgZ2FtZSBkZXRhaWwgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdhbWVBY3Rpb24oXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTxcbiAgeyBzdWNjZXNzOiB0cnVlOyBnYW1lOiBHYW1lRGV0YWlsRHRvIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9XG4+IHtcbiAgdHJ5IHtcbiAgICAvLyBFeHRyYWN0IGFuZCBwYXJzZSBmb3JtIGRhdGFcbiAgICBjb25zdCByYXdEYXRhID0ge1xuICAgICAgZ2FtZUlkOiBmb3JtRGF0YS5nZXQoJ2dhbWVJZCcpIGFzIHN0cmluZyxcbiAgICAgIHBsYXllckxpbWl0OiBmb3JtRGF0YS5nZXQoJ3BsYXllckxpbWl0JykgPyBOdW1iZXIoZm9ybURhdGEuZ2V0KCdwbGF5ZXJMaW1pdCcpKSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgd2l0aCBab2Qgc2NoZW1hXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IFVwZGF0ZUdhbWVTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRCAoZm9yIGF1dGhvcml6YXRpb24pXG4gICAgY29uc3Qgc2Vzc2lvbklkUmVzdWx0ID0gYXdhaXQgZ2V0U2Vzc2lvbklkT3JFcnJvcigpO1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvbklkUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhc2Vzc2lvbklkUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogW2F3YWl0IHQoJ2FjdGlvbi5zZXNzaW9uLm5vdEZvdW5kJyldLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbklkUmVzdWx0IGFzIHN0cmluZztcblxuICAgIC8vIEV4ZWN1dGUgVXBkYXRlR2FtZVNldHRpbmdzIHVzZSBjYXNlXG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IGNyZWF0ZUdhbWVSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlQ2FzZSA9IG5ldyBVcGRhdGVHYW1lU2V0dGluZ3MocmVwb3NpdG9yeSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgcGxheWVyTGltaXQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5wbGF5ZXJMaW1pdCxcbiAgICAgIHJlcXVlc3RlcklkOiBzZXNzaW9uSWQsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3VsdC5nYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uZ2FtZS51cGRhdGUuZXJyb3InKV0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnL2dhbWVzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGdhbWU6IHJlc3VsdC5nYW1lLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBnYW1lOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgX2Zvcm06IFtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IGF3YWl0IHQoJ2FjdGlvbi5nYW1lLnVwZGF0ZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb246IERlbGV0ZSBnYW1lXG4gKiBEZWxldGVzIGEgZ2FtZSB3aXRoIGF1dGhvcml6YXRpb24gY2hlY2tcbiAqIEBwYXJhbSBmb3JtRGF0YSBGb3JtIGRhdGEgd2l0aCBnYW1lSWRcbiAqIEByZXR1cm5zIFN1Y2Nlc3Mgc3RhdHVzIG9yIHZhbGlkYXRpb24gZXJyb3JzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSBhcyBzdHJpbmcsXG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBEZWxldGVHYW1lU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHNlc3Npb24gSUQgKGZvciBhdXRob3JpemF0aW9uKVxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IFthd2FpdCB0KCdhY3Rpb24uc2Vzc2lvbi5ub3RGb3VuZCcpXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICAvLyBFeGVjdXRlIERlbGV0ZUdhbWUgdXNlIGNhc2VcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2VDYXNlID0gbmV3IERlbGV0ZUdhbWUocmVwb3NpdG9yeSk7XG5cbiAgICBhd2FpdCB1c2VDYXNlLmV4ZWN1dGUoe1xuICAgICAgZ2FtZUlkOiB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgcmVxdWVzdGVySWQ6IHNlc3Npb25JZCxcbiAgICB9KTtcblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZ2FtZXMnKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGdhbWU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yczoge1xuICAgICAgICBfZm9ybTogW2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogYXdhaXQgdCgnYWN0aW9uLmdhbWUuZGVsZXRlLmVycm9yJyldLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogU2VydmVyIEFjdGlvbjogU3RhcnQgR2FtZSAoU3RhdHVzIFRyYW5zaXRpb24pXG4gKiBGZWF0dXJlOiAwMDQtc3RhdHVzLXRyYW5zaXRpb25cbiAqIFZhbGlkYXRlcyBhbmQgdHJhbnNpdGlvbnMgZ2FtZSBmcm9tIOa6luWCmeS4rSB0byDlh7rpoYzkuK0gd2l0aCBwcmVzZW50ZXIgdmFsaWRhdGlvblxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZFxuICogQHJldHVybnMgU3VjY2VzcyBzdGF0dXMgb3IgdmFsaWRhdGlvbiBlcnJvcnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZUFjdGlvbihcbiAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPHsgc3VjY2VzczogdHJ1ZSB9IHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gfT4ge1xuICB0cnkge1xuICAgIC8vIEV4dHJhY3QgYW5kIHZhbGlkYXRlIGZvcm0gZGF0YVxuICAgIGNvbnN0IHJhd0RhdGEgPSB7XG4gICAgICBnYW1lSWQ6IGZvcm1EYXRhLmdldCgnZ2FtZUlkJyksXG4gICAgICBzZXNzaW9uSWQ6ICcnLCAvLyBXaWxsIGJlIGZpbGxlZCBiZWxvd1xuICAgIH07XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiBJRFxuICAgIGNvbnN0IHNlc3Npb25JZFJlc3VsdCA9IGF3YWl0IGdldFNlc3Npb25JZE9yRXJyb3IoKTtcbiAgICBpZiAodHlwZW9mIHNlc3Npb25JZFJlc3VsdCA9PT0gJ29iamVjdCcgJiYgIXNlc3Npb25JZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4gc2Vzc2lvbklkUmVzdWx0O1xuICAgIH1cbiAgICByYXdEYXRhLnNlc3Npb25JZCA9IHNlc3Npb25JZFJlc3VsdCBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gU3RhcnRHYW1lU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgc3RhdHVzIHRyYW5zaXRpb24gZmlyc3RcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gY3JlYXRlR2FtZVJlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB2YWxpZGF0ZVVzZUNhc2UgPSBuZXcgVmFsaWRhdGVTdGF0dXNUcmFuc2l0aW9uKHJlcG9zaXRvcnkpO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3BvbnNlID0gYXdhaXQgdmFsaWRhdGVVc2VDYXNlLmV4ZWN1dGUoXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkLFxuICAgICAgJ+WHuumhjOS4rScsXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuc2Vzc2lvbklkXG4gICAgKTtcblxuICAgIGlmICghdmFsaWRhdGlvblJlc3BvbnNlLmNhblRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBfZm9ybTogdmFsaWRhdGlvblJlc3BvbnNlLmVycm9ycy5tYXAoKGVycikgPT4gZXJyLm1lc3NhZ2UpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIHRoZSBzdGF0dXMgdHJhbnNpdGlvblxuICAgIGNvbnN0IHN0YXJ0VXNlQ2FzZSA9IG5ldyBTdGFydEFjY2VwdGluZ1Jlc3BvbnNlcyhyZXBvc2l0b3J5KTtcbiAgICBhd2FpdCBzdGFydFVzZUNhc2UuZXhlY3V0ZSh7XG4gICAgICBnYW1lSWQ6IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWQsXG4gICAgfSk7XG5cbiAgICAvLyBSZXZhbGlkYXRlIHBhdGhzIGZvciBjYWNoZSBtYW5hZ2VtZW50XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9nYW1lcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZ2FtZXMvJHt2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkfWApO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZ2FtZXMvJHt2YWxpZGF0aW9uUmVzdWx0LmRhdGEuZ2FtZUlkfS9wcmVzZW50ZXJzYCk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHN0YXJ0IGdhbWU6JywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yczoge1xuICAgICAgICBfZm9ybTogW2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogYXdhaXQgdCgnYWN0aW9uLmdhbWUuc3RhcnQuZXJyb3InKV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uOiBDbG9zZSBHYW1lIChTdGF0dXMgVHJhbnNpdGlvbilcbiAqIEZlYXR1cmU6IDAwNC1zdGF0dXMtdHJhbnNpdGlvblxuICogVmFsaWRhdGVzIGFuZCB0cmFuc2l0aW9ucyBnYW1lIGZyb20g5Ye66aGM5LitIHRvIOe3oOWIhyB3aXRoIGNvbmZpcm1hdGlvblxuICogQHBhcmFtIGZvcm1EYXRhIEZvcm0gZGF0YSB3aXRoIGdhbWVJZCBhbmQgY29uZmlybWVkXG4gKiBAcmV0dXJucyBTdWNjZXNzIHN0YXR1cyBvciB2YWxpZGF0aW9uIGVycm9yc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VHYW1lQWN0aW9uKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyBzdWNjZXNzOiB0cnVlIH0gfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB9PiB7XG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhbmQgdmFsaWRhdGUgZm9ybSBkYXRhXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgIGdhbWVJZDogZm9ybURhdGEuZ2V0KCdnYW1lSWQnKSxcbiAgICAgIHNlc3Npb25JZDogJycsIC8vIFdpbGwgYmUgZmlsbGVkIGJlbG93XG4gICAgICBjb25maXJtZWQ6IGZvcm1EYXRhLmdldCgnY29uZmlybWVkJykgPT09ICd0cnVlJyxcbiAgICB9O1xuXG4gICAgLy8gR2V0IHNlc3Npb24gSURcbiAgICBjb25zdCBzZXNzaW9uSWRSZXN1bHQgPSBhd2FpdCBnZXRTZXNzaW9uSWRPckVycm9yKCk7XG4gICAgaWYgKHR5cGVvZiBzZXNzaW9uSWRSZXN1bHQgPT09ICdvYmplY3QnICYmICFzZXNzaW9uSWRSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHNlc3Npb25JZFJlc3VsdDtcbiAgICB9XG4gICAgcmF3RGF0YS5zZXNzaW9uSWQgPSBzZXNzaW9uSWRSZXN1bHQgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IENsb3NlR2FtZVNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yczogdmFsaWRhdGlvblJlc3VsdC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIHN0YXR1cyB0cmFuc2l0aW9uIGZpcnN0XG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IGNyZWF0ZUdhbWVSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdmFsaWRhdGVVc2VDYXNlID0gbmV3IFZhbGlkYXRlU3RhdHVzVHJhbnNpdGlvbihyZXBvc2l0b3J5KTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXNwb25zZSA9IGF3YWl0IHZhbGlkYXRlVXNlQ2FzZS5leGVjdXRlKFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZCxcbiAgICAgICfnt6DliIcnLFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5kYXRhLnNlc3Npb25JZFxuICAgICk7XG5cbiAgICBpZiAoIXZhbGlkYXRpb25SZXNwb25zZS5jYW5UcmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgX2Zvcm06IHZhbGlkYXRpb25SZXNwb25zZS5lcnJvcnMubWFwKChlcnIpID0+IGVyci5tZXNzYWdlKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgc3RhdHVzIHRyYW5zaXRpb25cbiAgICBjb25zdCBjbG9zZVVzZUNhc2UgPSBuZXcgQ2xvc2VHYW1lKHJlcG9zaXRvcnkpO1xuICAgIGF3YWl0IGNsb3NlVXNlQ2FzZS5leGVjdXRlKHtcbiAgICAgIGdhbWVJZDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLmdhbWVJZCxcbiAgICAgIHNlc3Npb25JZDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLnNlc3Npb25JZCxcbiAgICB9KTtcblxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgZm9yIGNhY2hlIG1hbmFnZW1lbnRcbiAgICByZXZhbGlkYXRlUGF0aCgnL2dhbWVzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9nYW1lcy8ke3ZhbGlkYXRpb25SZXN1bHQuZGF0YS5nYW1lSWR9L3ByZXNlbnRlcnNgKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY2xvc2UgZ2FtZTonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIF9mb3JtOiBbZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBhd2FpdCB0KCdhY3Rpb24uZ2FtZS5jbG9zZS5lcnJvcicpXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnU0F5Y3NCIn0=
}),
"[project]/src/components/domain/game/StatusTransitionButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * StatusTransitionButton Component
 * Feature: 004-status-transition, Enhanced feedback
 * Renders appropriate action buttons based on current game status with enhanced animations and feedback
 */ __turbopack_context__.s([
    "StatusTransitionButton",
    ()=>StatusTransitionButton,
    "StatusTransitionButtonCompact",
    ()=>StatusTransitionButtonCompact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8dc0f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:b8dc0f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a40d96__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:a40d96 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AccessibilityProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AccessibilityProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function StatusTransitionButton({ gameId, currentStatus, onSuccess, onError, className = '' }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [animationState, setAnimationState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { announceStatusChange, announceError, announceSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AccessibilityProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccessibility"])();
    const handleStartGame = async ()=>{
        if (isLoading) return;
        setIsLoading(true);
        setAnimationState('idle');
        try {
            const formData = new FormData();
            formData.append('gameId', gameId);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a40d96__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["startGameAction"])(formData);
            if (result.success) {
                // Success animation and feedback
                setAnimationState('success');
                if (buttonRef.current) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationSequences"].buttonSuccess(buttonRef.current);
                }
                // Announce status change to screen readers
                announceStatusChange(t('game.status.preparing'), t('game.status.active'));
                announceSuccess(t('status.messages.gameStarted'));
                onSuccess?.(t('game.status.active'));
            } else {
                // Error animation and feedback
                setAnimationState('error');
                if (buttonRef.current) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationSequences"].buttonError(buttonRef.current);
                }
                const errorMessage = result.errors._form?.[0] || t('action.game.start.error');
                announceError(errorMessage);
                onError?.(errorMessage);
            }
        } catch (error) {
            // Network error animation and feedback
            setAnimationState('error');
            if (buttonRef.current) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationSequences"].buttonError(buttonRef.current);
            }
            const errorMessage = error instanceof Error ? error.message : t('action.game.start.error');
            announceError(`${t('errors.networkError')}: ${errorMessage}`);
            onError?.(errorMessage);
        } finally{
            setIsLoading(false);
            // Reset animation state after delay
            setTimeout(()=>setAnimationState('idle'), 1000);
        }
    };
    const handleCloseGame = async ()=>{
        if (isLoading) return;
        // Show confirmation dialog
        const confirmed = window.confirm(t('action.game.close.confirm'));
        if (!confirmed) return;
        setIsLoading(true);
        setAnimationState('idle');
        try {
            const formData = new FormData();
            formData.append('gameId', gameId);
            formData.append('confirmed', 'true');
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8dc0f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["closeGameAction"])(formData);
            if (result.success) {
                // Success animation and feedback
                setAnimationState('success');
                if (buttonRef.current) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationSequences"].buttonSuccess(buttonRef.current);
                }
                // Announce status change to screen readers
                announceStatusChange(t('game.status.active'), t('game.status.closed'));
                announceSuccess(t('status.messages.gameClosed'));
                onSuccess?.(t('game.status.closed'));
            } else {
                // Error animation and feedback
                setAnimationState('error');
                if (buttonRef.current) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationSequences"].buttonError(buttonRef.current);
                }
                const errorMessage = result.errors._form?.[0] || t('action.game.close.error');
                announceError(errorMessage);
                onError?.(errorMessage);
            }
        } catch (error) {
            // Network error animation and feedback
            setAnimationState('error');
            if (buttonRef.current) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationSequences"].buttonError(buttonRef.current);
            }
            const errorMessage = error instanceof Error ? error.message : t('action.game.close.error');
            announceError(`${t('errors.networkError')}: ${errorMessage}`);
            onError?.(errorMessage);
        } finally{
            setIsLoading(false);
            // Reset animation state after delay
            setTimeout(()=>setAnimationState('idle'), 1000);
        }
    };
    // Don't render anything for closed games
    if (currentStatus === t('game.status.closed')) {
        return null;
    }
    if (currentStatus === t('game.status.preparing')) {
        const getButtonClasses = ()=>{
            const baseClasses = 'inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300';
            if (animationState === 'success') {
                return `${baseClasses} bg-green-600 hover:bg-green-700 focus:ring-green-500 scale-105 ${className}`;
            } else if (animationState === 'error') {
                return `${baseClasses} bg-red-600 hover:bg-red-700 focus:ring-red-500 animate-pulse ${className}`;
            } else {
                return `${baseClasses} bg-green-600 hover:bg-green-700 focus:ring-green-500 ${className}`;
            }
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            ref: buttonRef,
            type: "button",
            onClick: handleStartGame,
            disabled: isLoading,
            className: getButtonClasses(),
            "aria-label": t('status.transition.preparing.toActive'),
            "aria-disabled": isLoading,
            "aria-live": "polite",
            "aria-describedby": isLoading ? 'loading-status' : undefined,
            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 mr-2 animate-spin",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        role: "img",
                        "aria-label": t('common.loading'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        id: "loading-status",
                        children: t('status.labels.starting')
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                        lineNumber: 207,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : animationState === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 mr-2 text-green-200",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        role: "img",
                        "aria-label": t('status.labels.success'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                            lineNumber: 218,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                        lineNumber: 211,
                        columnNumber: 13
                    }, this),
                    t('messages.success')
                ]
            }, void 0, true) : animationState === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 mr-2 text-red-200",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        role: "img",
                        "aria-label": t('status.labels.error'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                            lineNumber: 235,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                        lineNumber: 228,
                        columnNumber: 13
                    }, this),
                    t('status.labels.error')
                ]
            }, void 0, true) : t('status.transition.preparing.toActive')
        }, void 0, false, {
            fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this);
    }
    if (currentStatus === t('game.status.active')) {
        const getButtonClasses = ()=>{
            const baseClasses = 'inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300';
            if (animationState === 'success') {
                return `${baseClasses} bg-green-600 hover:bg-green-700 focus:ring-green-500 scale-105 ${className}`;
            } else if (animationState === 'error') {
                return `${baseClasses} bg-red-600 hover:bg-red-700 focus:ring-red-500 animate-pulse ${className}`;
            } else {
                return `${baseClasses} bg-red-600 hover:bg-red-700 focus:ring-red-500 ${className}`;
            }
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            ref: buttonRef,
            type: "button",
            onClick: handleCloseGame,
            disabled: isLoading,
            className: getButtonClasses(),
            "aria-label": t('status.transition.active.toClosed'),
            "aria-disabled": isLoading,
            "aria-live": "polite",
            "aria-describedby": isLoading ? 'loading-status-close' : undefined,
            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 mr-2 animate-spin",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        role: "img",
                        "aria-label": t('common.loading'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                                lineNumber: 286,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                                lineNumber: 294,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                        lineNumber: 278,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        id: "loading-status-close",
                        children: t('status.labels.closing')
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                        lineNumber: 300,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : animationState === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 mr-2 text-green-200",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        role: "img",
                        "aria-label": t('status.labels.success'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                            lineNumber: 311,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                        lineNumber: 304,
                        columnNumber: 13
                    }, this),
                    t('messages.success')
                ]
            }, void 0, true) : animationState === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 mr-2 text-red-200",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        role: "img",
                        "aria-label": t('status.labels.error'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                            lineNumber: 328,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
                        lineNumber: 321,
                        columnNumber: 13
                    }, this),
                    t('status.labels.error')
                ]
            }, void 0, true) : t('status.transition.active.toClosed')
        }, void 0, false, {
            fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
            lineNumber: 265,
            columnNumber: 7
        }, this);
    }
    // Should not reach here, but return null as fallback
    return null;
}
function StatusTransitionButtonCompact({ gameId, currentStatus, onSuccess, onError, className = '' }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleStartGame = async ()=>{
        if (isLoading) return;
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('gameId', gameId);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a40d96__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["startGameAction"])(formData);
            if (result.success) {
                onSuccess?.(t('game.status.active'));
            } else {
                const errorMessage = result.errors._form?.[0] || t('action.game.start.error');
                alert(errorMessage);
                onError?.(errorMessage);
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : t('action.game.start.error');
            alert(errorMessage);
            onError?.(errorMessage);
        } finally{
            setIsLoading(false);
        }
    };
    const handleCloseGame = async ()=>{
        if (isLoading) return;
        const confirmed = window.confirm(t('action.game.close.confirm'));
        if (!confirmed) return;
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('gameId', gameId);
            formData.append('confirmed', 'true');
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8dc0f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["closeGameAction"])(formData);
            if (result.success) {
                onSuccess?.(t('game.status.closed'));
            } else {
                const errorMessage = result.errors._form?.[0] || t('action.game.close.error');
                alert(errorMessage);
                onError?.(errorMessage);
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : t('action.game.close.error');
            alert(errorMessage);
            onError?.(errorMessage);
        } finally{
            setIsLoading(false);
        }
    };
    if (currentStatus === t('game.status.closed')) {
        return null;
    }
    if (currentStatus === t('game.status.preparing')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleStartGame,
            disabled: isLoading,
            className: `inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-green-600 border border-transparent rounded hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`,
            "aria-label": t('status.transition.preparing.toActive'),
            "aria-disabled": isLoading,
            children: isLoading ? t('status.labels.starting') : t('game.startGame')
        }, void 0, false, {
            fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
            lineNumber: 422,
            columnNumber: 7
        }, this);
    }
    if (currentStatus === t('game.status.active')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleCloseGame,
            disabled: isLoading,
            className: `inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-red-600 border border-transparent rounded hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`,
            "aria-label": t('status.transition.active.toClosed'),
            "aria-disabled": isLoading,
            children: isLoading ? t('status.labels.closing') : t('game.endGame')
        }, void 0, false, {
            fileName: "[project]/src/components/domain/game/StatusTransitionButton.tsx",
            lineNumber: 437,
            columnNumber: 7
        }, this);
    }
    return null;
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
"[project]/src/components/ui/Toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Toast Notification Component
 * Feature: Enhanced status transition feedback
 * Provides unified, accessible toast notifications
 */ __turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastContainer",
    ()=>ToastContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Toast({ id, type, title, message, duration = 4000, onClose }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRemoving, setIsRemoving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsRemoving(true);
        setTimeout(()=>{
            onClose(id);
        }, 300);
    }, [
        id,
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Animate in
        const showTimer = setTimeout(()=>setIsVisible(true), 100);
        // Auto-hide timer
        const hideTimer = setTimeout(()=>{
            handleClose();
        }, duration);
        return ()=>{
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, [
        duration,
        handleClose
    ]);
    const getToastConfig = (type)=>{
        switch(type){
            case 'success':
                return {
                    bgColor: 'bg-green-50 border-green-200',
                    iconColor: 'text-green-600',
                    textColor: 'text-green-800',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        "aria-label": t('toast.successIcon'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                children: t('toast.success')
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Toast.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this),
                    ariaLabel: t('toast.successNotification')
                };
            case 'error':
                return {
                    bgColor: 'bg-red-50 border-red-200',
                    iconColor: 'text-red-600',
                    textColor: 'text-red-800',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        "aria-label": t('toast.errorIcon'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                children: t('toast.error')
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Toast.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this),
                    ariaLabel: t('toast.errorNotification')
                };
            case 'warning':
                return {
                    bgColor: 'bg-yellow-50 border-yellow-200',
                    iconColor: 'text-yellow-600',
                    textColor: 'text-yellow-800',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        "aria-label": t('toast.warningIcon'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                children: t('toast.warning')
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Toast.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this),
                    ariaLabel: t('toast.warningNotification')
                };
            default:
                return {
                    bgColor: 'bg-blue-50 border-blue-200',
                    iconColor: 'text-blue-600',
                    textColor: 'text-blue-800',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        "aria-label": t('toast.infoIcon'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                children: t('toast.info')
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Toast.tsx",
                        lineNumber: 133,
                        columnNumber: 13
                    }, this),
                    ariaLabel: t('toast.infoNotification')
                };
        }
    };
    const config = getToastConfig(type);
    // Animation classes
    const animationClass = isRemoving ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animations"].toast.slideOut : isVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animations"].toast.slideIn : 'translate-x-full opacity-0';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "alert",
        "aria-label": config.ariaLabel,
        "aria-live": "polite",
        className: "jsx-e43ea6c4bca847b0" + " " + `
        relative w-full max-w-sm mx-auto mb-4 p-4 border rounded-lg shadow-lg transition-all duration-300 ease-in-out transform
        ${config.bgColor} ${animationClass}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e43ea6c4bca847b0" + " " + "flex items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e43ea6c4bca847b0" + " " + `flex-shrink-0 ${config.iconColor}`,
                        children: config.icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Toast.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e43ea6c4bca847b0" + " " + "ml-3 flex-1",
                        children: [
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-e43ea6c4bca847b0" + " " + `text-sm font-semibold ${config.textColor}`,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 175,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-e43ea6c4bca847b0" + " " + `text-sm ${title ? 'mt-1' : ''} ${config.textColor}`,
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Toast.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Toast.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleClose,
                        "aria-label": t('toast.close'),
                        className: "jsx-e43ea6c4bca847b0" + " " + `ml-3 flex-shrink-0 rounded-md p-1.5 inline-flex items-center justify-center ${config.textColor} hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-current`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            "aria-label": t('toast.closeIcon'),
                            className: "jsx-e43ea6c4bca847b0" + " " + "w-4 h-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                    className: "jsx-e43ea6c4bca847b0",
                                    children: t('common.close')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Toast.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                    clipRule: "evenodd",
                                    className: "jsx-e43ea6c4bca847b0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Toast.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Toast.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Toast.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e43ea6c4bca847b0" + " " + "absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-10 rounded-b-lg overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        animation: `shrink ${duration}ms linear forwards`,
                        width: '100%'
                    },
                    className: "jsx-e43ea6c4bca847b0" + " " + "h-full bg-current opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Toast.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "e43ea6c4bca847b0",
                children: "@keyframes shrink{0%{width:100%}to{width:0%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
function ToastContainer({ toasts, onClose }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "fixed top-4 right-4 z-50 max-w-sm w-full space-y-2",
        "aria-label": t('toast.notificationArea'),
        children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toast, {
                ...toast,
                onClose: onClose
            }, toast.id, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/hooks/useToast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useToast Hook
 * Feature: Enhanced status transition feedback
 * Manages toast notifications with queue and auto-cleanup
 */ __turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "statusTransitionToasts",
    ()=>statusTransitionToasts,
    "useGlobalToast",
    ()=>useGlobalToast,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function useToast() {
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const removeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setToasts((prev)=>prev.filter((toast)=>toast.id !== id));
    }, []);
    const addToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((options)=>{
        const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
        const newToast = {
            id,
            type: options.type,
            title: options.title,
            message: options.message,
            duration: options.duration || (options.type === 'error' ? 6000 : 4000),
            onClose: removeToast
        };
        setToasts((prev)=>{
            // Limit to 5 toasts maximum
            const updatedToasts = [
                newToast,
                ...prev
            ].slice(0, 5);
            return updatedToasts;
        });
        return id;
    }, [
        removeToast
    ]);
    const clearAllToasts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setToasts([]);
    }, []);
    // Convenience methods for different toast types
    const showSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, title)=>{
        return addToast({
            type: 'success',
            message,
            title
        });
    }, [
        addToast
    ]);
    const showError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, title)=>{
        return addToast({
            type: 'error',
            message,
            title
        });
    }, [
        addToast
    ]);
    const showInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, title)=>{
        return addToast({
            type: 'info',
            message,
            title
        });
    }, [
        addToast
    ]);
    const showWarning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, title)=>{
        return addToast({
            type: 'warning',
            message,
            title
        });
    }, [
        addToast
    ]);
    return {
        toasts,
        addToast,
        removeToast,
        clearAllToasts,
        showSuccess,
        showError,
        showInfo,
        showWarning
    };
}
/**
 * Global toast context for app-wide toast management
 */ const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function ToastProvider({ children }) {
    const toast = useToast();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: toast,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/useToast.tsx",
        lineNumber: 117,
        columnNumber: 10
    }, this);
}
function useGlobalToast() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) {
        throw new Error('useGlobalToast must be used within a ToastProvider');
    }
    return context;
}
const statusTransitionToasts = {
    gameStarted: (title = 'ゲーム開始')=>({
            type: 'success',
            title,
            message: 'ゲームが正常に開始されました'
        }),
    gameClosed: (title = 'ゲーム締切')=>({
            type: 'success',
            title,
            message: 'ゲームが正常に締切されました'
        }),
    gameStartError: (error)=>({
            type: 'error',
            title: 'ゲーム開始エラー',
            message: error
        }),
    gameCloseError: (error)=>({
            type: 'error',
            title: 'ゲーム締切エラー',
            message: error
        }),
    statusUpdateSuccess: (newStatus)=>({
            type: 'success',
            title: 'ステータス更新完了',
            message: `ゲームステータスが「${newStatus}」に変更されました`
        }),
    validationError: (error)=>({
            type: 'error',
            title: '入力エラー',
            message: error
        }),
    networkError: ()=>({
            type: 'error',
            title: '通信エラー',
            message: 'サーバーとの通信に失敗しました。しばらく時間をおいてから再度お試しください。'
        })
};
}),
"[project]/src/components/pages/GameDetailPage/hooks/useGameStatus.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useGameStatus Hook
 * Feature: 004-status-transition
 * Manages game status transitions with optimistic updates
 */ __turbopack_context__.s([
    "useGameStatus",
    ()=>useGameStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8dc0f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:b8dc0f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a40d96__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:a40d96 [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
function useGameStatus({ gameId, initialStatus, onSuccess, onError, enableRetry = true, maxRetries = 2, retryDelay = 1000 }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [currentStatus, setCurrentStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialStatus);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [retryCount, setRetryCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isRetrying, setIsRetrying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const retryTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Calculate what transitions are available
    const canStart = currentStatus === '準備中';
    const canClose = currentStatus === '出題中';
    const executeWithRetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (action, targetStatus, operation, attempt = 0)=>{
        const previousStatus = currentStatus;
        if (attempt === 0) {
            // First attempt - set optimistic update
            setCurrentStatus(targetStatus);
            setRetryCount(0);
        } else {
            setIsRetrying(true);
            setRetryCount(attempt);
            // Wait for retry delay
            await new Promise((resolve)=>setTimeout(resolve, retryDelay));
        }
        try {
            const result = await action();
            if (result.success) {
                setIsRetrying(false);
                setRetryCount(0);
                onSuccess?.(targetStatus);
                return;
            } else {
                throw new Error(result.errors?._form?.[0] || (operation === 'start' ? t('action.game.start.error') : t('action.game.close.error')));
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : operation === 'start' ? t('action.game.start.error') : t('action.game.close.error');
            // Check if we should retry
            if (enableRetry && attempt < maxRetries) {
                return executeWithRetry(action, targetStatus, operation, attempt + 1);
            } else {
                // All retries exhausted or retries disabled
                setCurrentStatus(previousStatus); // Rollback optimistic update
                setIsRetrying(false);
                setRetryCount(0);
                onError?.(attempt > 0 ? `${errorMessage}（${attempt + 1}回試行後）` : errorMessage);
            }
        }
    }, [
        currentStatus,
        enableRetry,
        maxRetries,
        retryDelay,
        onSuccess,
        onError,
        t
    ]);
    const startGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (isLoading || !canStart) return;
        setIsLoading(true);
        try {
            await executeWithRetry(async ()=>{
                const formData = new FormData();
                formData.append('gameId', gameId);
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a40d96__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["startGameAction"])(formData);
            }, '出題中', 'start');
        } finally{
            setIsLoading(false);
        }
    }, [
        gameId,
        canStart,
        isLoading,
        executeWithRetry
    ]);
    const closeGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (isLoading || !canClose) return;
        // Show confirmation dialog
        const confirmed = window.confirm(t('action.game.close.confirm'));
        if (!confirmed) return;
        setIsLoading(true);
        try {
            await executeWithRetry(async ()=>{
                const formData = new FormData();
                formData.append('gameId', gameId);
                formData.append('confirmed', 'true');
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8dc0f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["closeGameAction"])(formData);
            }, '締切', 'close');
        } finally{
            setIsLoading(false);
        }
    }, [
        gameId,
        canClose,
        isLoading,
        executeWithRetry
    ]);
    const resetStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setCurrentStatus(initialStatus);
        setIsLoading(false);
        setRetryCount(0);
        setIsRetrying(false);
        if (retryTimeoutRef.current) {
            clearTimeout(retryTimeoutRef.current);
            retryTimeoutRef.current = null;
        }
    }, [
        initialStatus
    ]);
    return {
        currentStatus,
        isLoading,
        canStart,
        canClose,
        startGame,
        closeGame,
        resetStatus,
        retryCount,
        isRetrying
    };
}
}),
"[project]/src/components/pages/GameDetailPage/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Game Detail/Edit Page Component
// Feature: 002-game-preparation, 004-status-transition
// Presentational component for viewing and editing game details
__turbopack_context__.s([
    "GameDetailPage",
    ()=>GameDetailPage,
    "GameDetailPageError",
    ()=>GameDetailPageError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$CloseGameButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/domain/game/CloseGameButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$DeleteGameButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/domain/game/DeleteGameButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$GameForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/domain/game/GameForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$GameStatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/domain/game/GameStatusBadge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$StatusTransitionButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/domain/game/StatusTransitionButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AccessibilityProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AccessibilityProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useToast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useToast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$GameDetailPage$2f$hooks$2f$useGameStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/GameDetailPage/hooks/useGameStatus.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function GameDetailPage({ game, currentSessionId }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { toasts, showSuccess, showError, removeToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useToast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    // Status management hook
    const { currentStatus, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$GameDetailPage$2f$hooks$2f$useGameStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGameStatus"])({
        gameId: game.id,
        initialStatus: game.status,
        onSuccess: (newStatus)=>{
            const message = newStatus === '出題中' ? t('status.messages.gameStarted') : t('status.messages.gameClosed');
            showSuccess(message, t('messages.success'));
        },
        onError: (error)=>{
            showError(error, t('status.labels.error'));
        }
    });
    // Check if game can be edited (only 準備中 status)
    const canEdit = currentStatus === '準備中';
    // Check if current user is the game moderator/creator
    const isModerator = currentSessionId && game.creatorId === currentSessionId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AccessibilityProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccessibilityProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto max-w-2xl px-4 py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/games",
                                    className: "mb-4 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900",
                                    children: [
                                        "← ",
                                        t('navigation.gameList')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-3xl font-bold text-gray-900",
                                                    children: t('game.gameDetails')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-sm text-gray-600",
                                                    children: t('game.gameManagementDescription')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-end space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$GameStatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GameStatusBadge"], {
                                                    status: currentStatus,
                                                    animated: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                currentStatus === '準備中' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$StatusTransitionButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusTransitionButton"], {
                                                    gameId: game.id,
                                                    currentStatus: currentStatus,
                                                    onSuccess: (newStatus)=>{
                                                        const message = newStatus === '出題中' ? t('status.messages.gameStarted') : t('status.messages.gameClosed');
                                                        showSuccess(message, t('messages.success'));
                                                    },
                                                    onError: (error)=>{
                                                        showError(error, t('status.labels.error'));
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this),
                                                currentStatus === '出題中' && isModerator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$CloseGameButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseGameButton"], {
                                                    gameId: game.id,
                                                    gameStatus: currentStatus,
                                                    onClosed: ()=>{
                                                        showSuccess(t('status.messages.gameClosed'), t('status.labels.closed'));
                                                        // Trigger page refresh or state update
                                                        window.location.reload();
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-4 w-4 animate-spin text-blue-600",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        "aria-label": t('status.labels.loading'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                children: t('status.labels.loading')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                className: "opacity-25",
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-blue-800",
                                        children: t('status.labels.updating')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        !canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-yellow-800",
                                children: t('status.messages.cannotEdit')
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: t('form.game.name.label')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 text-base text-gray-900",
                                                children: game.name || game.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: t('form.game.status.label')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$GameStatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GameStatusBadge"], {
                                                        status: currentStatus,
                                                        className: "mr-2",
                                                        animated: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "h-3 w-3 animate-spin text-gray-500",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                "aria-label": t('status.labels.updating'),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                                        children: t('status.labels.updating')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        className: "opacity-25",
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "10",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                                        lineNumber: 163,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        className: "opacity-75",
                                                                        fill: "currentColor",
                                                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                                        lineNumber: 171,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-500",
                                                                children: [
                                                                    "(",
                                                                    t('status.labels.updating'),
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: t('session.participants')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 text-base text-gray-900",
                                                children: [
                                                    game.currentPlayers,
                                                    " / ",
                                                    game.maxPlayers,
                                                    " 人"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: t('form.game.availableSlots.label')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 text-base text-gray-900",
                                                children: [
                                                    game.availableSlots,
                                                    " 枠"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: t('form.game.createdAt.label')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 text-base text-gray-900",
                                                children: new Date(game.createdAt).toLocaleString('ja-JP')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: t('form.game.updatedAt.label')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 text-base text-gray-900",
                                                children: new Date(game.updatedAt).toLocaleString('ja-JP')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-4 text-xl font-semibold text-gray-900",
                                    children: t('presenter.presenterManagement')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 text-sm text-gray-600",
                                    children: t('presenter.presenterManagementDescription')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `/games/${game.id}/presenters`,
                                    className: "inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                                    children: [
                                        t('presenter.goToPresenterPage'),
                                        " →"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-4 text-xl font-semibold text-gray-900",
                                    children: t('game.editSettings')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$GameForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GameForm"], {
                                    mode: "edit",
                                    gameId: game.id,
                                    initialPlayerLimit: game.maxPlayers,
                                    currentPlayers: game.currentPlayers
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-4 text-xl font-semibold text-gray-900",
                                    children: t('game.dangerZone')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 text-sm text-gray-600",
                                    children: t('game.deleteWarning')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$domain$2f$game$2f$DeleteGameButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeleteGameButton"], {
                                    gameId: game.id,
                                    gameStatus: game.status
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {
                            toasts: toasts,
                            onClose: removeToast
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
function GameDetailPageError({ errorMessage }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto max-w-2xl px-4 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg border border-red-200 bg-red-50 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-red-900",
                            children: t('errors.errorOccurred')
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-red-800",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/games",
                            className: "mt-4 inline-block text-sm font-medium text-red-900 underline",
                            children: t('navigation.gameList')
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/GameDetailPage/index.tsx",
        lineNumber: 267,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__58e39a24._.js.map