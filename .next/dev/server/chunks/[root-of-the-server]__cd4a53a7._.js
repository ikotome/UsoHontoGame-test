module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/server/application/use-cases/games/GetPresentersByGameId.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// GetPresentersByGameId Use Case
// Feature: 002-game-preparation
// Business logic for retrieving all presenters for a game
__turbopack_context__.s([
    "GetPresentersByGameId",
    ()=>GetPresentersByGameId
]);
class GetPresentersByGameId {
    gameRepository;
    constructor(gameRepository){
        this.gameRepository = gameRepository;
    }
    async execute(input) {
        const { gameId } = input;
        // Get all presenters for this game
        const presenterEntities = await this.gameRepository.findPresentersByGameId(gameId);
        // For each presenter, get their episodes and map to DTO
        const presenters = await Promise.all(presenterEntities.map(async (presenterEntity)=>{
            // Get episodes for this presenter
            const episodes = await this.gameRepository.findEpisodesByPresenterId(presenterEntity.id);
            // Map episodes to DTOs
            const episodeDtos = episodes.map((episode)=>({
                    id: episode.id,
                    presenterId: episode.presenterId,
                    text: episode.text,
                    isLie: episode.isLie,
                    createdAt: episode.createdAt
                }));
            // Map presenter to DTO
            return {
                id: presenterEntity.id,
                gameId: presenterEntity.gameId,
                nickname: presenterEntity.nickname,
                episodes: episodeDtos,
                createdAt: presenterEntity.createdAt
            };
        }));
        return {
            presenters
        };
    }
}
}),
"[project]/src/lib/constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/cookies.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-route] (ecmascript)");
;
;
async function getCookie(name) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const cookie = cookieStore.get(name);
    return cookie?.value ?? null;
}
async function setCookie(name, value, options = {}) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set(name, value, {
        httpOnly: options.httpOnly ?? false,
        secure: options.secure ?? ("TURBOPACK compile-time value", "development") === 'production',
        sameSite: options.sameSite ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COOKIE_CONFIG"].SAME_SITE,
        maxAge: options.maxAge ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COOKIE_CONFIG"].MAX_AGE,
        path: options.path ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COOKIE_CONFIG"].PATH
    });
}
async function deleteCookie(name) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete(name);
}
}),
"[project]/src/server/infrastructure/services/CookieSessionService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Cookie Session Service Implementation
// Infrastructure layer implementation of ISessionService using Next.js cookies
__turbopack_context__.s([
    "CookieSessionService",
    ()=>CookieSessionService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cookies.ts [app-route] (ecmascript)");
;
;
class CookieSessionService {
    /**
   * Get current session ID from cookies
   * @returns Session ID if exists, null if no session cookie
   */ async getCurrentSessionId() {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COOKIE_NAMES"].SESSION_ID);
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
"[project]/src/server/infrastructure/di/SessionServiceContainer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Session Service Dependency Injection Container
// Provides session service instances with singleton pattern
__turbopack_context__.s([
    "SessionServiceContainer",
    ()=>SessionServiceContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$services$2f$CookieSessionService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/services/CookieSessionService.ts [app-route] (ecmascript)");
;
class SessionServiceContainer {
    static sessionService = null;
    /**
   * Gets session service instance (singleton)
   * Currently only supports Cookie-based implementation
   * Can be extended for other session storage mechanisms (JWT, Redis, etc.)
   */ static getSessionService() {
        if (!SessionServiceContainer.sessionService) {
            SessionServiceContainer.sessionService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$services$2f$CookieSessionService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CookieSessionService"]();
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
"[project]/src/generated/prisma/internal/class.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/generated/prisma/internal/prismaNamespace.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/generated/prisma/enums.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/generated/prisma/client.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$class$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/internal/class.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$prismaNamespace$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/internal/prismaNamespace.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$class$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$prismaNamespace$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$class$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$prismaNamespace$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const PrismaClient = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$class$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPrismaClientClass"](("TURBOPACK compile-time value", "/ROOT/src/generated/prisma"));
;
// file annotations for bundling tools to include these files
__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"](("TURBOPACK compile-time value", "/ROOT/src/generated/prisma"), "libquery_engine-darwin-arm64.dylib.node");
__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"](__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["cwd"](), "src/generated/prisma/libquery_engine-darwin-arm64.dylib.node");
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/server/domain/entities/Answer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Domain Entity: Answer
// Represents a participant's answer submission for a game
__turbopack_context__.s([
    "AnswerEntity",
    ()=>AnswerEntity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
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
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
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
"[project]/src/server/infrastructure/repositories/PrismaAnswerRepository.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Infrastructure: Prisma Answer Repository
// Implements IAnswerRepository interface using Prisma ORM
__turbopack_context__.s([
    "PrismaAnswerRepository",
    ()=>PrismaAnswerRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Answer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Answer.ts [app-route] (ecmascript)");
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Answer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnswerEntity"].reconstruct({
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
"[project]/src/server/domain/errors/ValidationError.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/server/domain/entities/Episode.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Episode Entity
// Feature: 002-game-preparation
// Encapsulates episode data with validation (1-1000 chars, isLie boolean)
__turbopack_context__.s([
    "Episode",
    ()=>Episode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/errors/ValidationError.ts [app-route] (ecmascript)");
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]('Episode text cannot be empty');
        }
        if (props.text.length > 1000) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]('Episode text cannot exceed 1000 characters');
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
"[project]/src/server/domain/errors/InvalidStatusTransitionError.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/server/domain/value-objects/GameStatus.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/server/domain/entities/Game.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$InvalidStatusTransitionError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/errors/InvalidStatusTransitionError.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/errors/ValidationError.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameStatus$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/GameStatus.ts [app-route] (ecmascript)");
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
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]('Game name must be 100 characters or less');
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]('Player limit must be between 1 and 100');
        }
        // New limit must be >= current players
        if (newLimit < this._currentPlayers) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"](`New player limit (${newLimit}) cannot be less than current players (${this._currentPlayers})`);
        }
        this._maxPlayers = newLimit;
        this._updatedAt = new Date();
    }
    /**
   * Transitions game from 準備中 to 出題中 (FR-001)
   * @throws InvalidStatusTransitionError if not in 準備中 status
   */ startAccepting() {
        if (!this._status.isPreparation()) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$InvalidStatusTransitionError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidStatusTransitionError"](this._status.toString(), '出題中', 'Can only start accepting from 準備中 status');
        }
        this._status = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameStatus$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GameStatus"].acceptingResponses();
        this._updatedAt = new Date();
    }
    /**
   * Transitions game from 出題中 to 締切 (FR-001)
   * @throws InvalidStatusTransitionError if not in 出題中 status
   */ close() {
        if (!this._status.isAcceptingResponses()) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$InvalidStatusTransitionError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidStatusTransitionError"](this._status.toString(), '締切', 'Can only close from 出題中 status');
        }
        this._status = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameStatus$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GameStatus"].closed();
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
"[project]/src/server/domain/entities/Presenter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Presenter Entity
// Feature: 002-game-preparation
// Encapsulates presenter data with episode validation (exactly 3 episodes required)
__turbopack_context__.s([
    "Presenter",
    ()=>Presenter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/errors/ValidationError.ts [app-route] (ecmascript)");
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]('Presenter nickname cannot be empty');
        }
        // Validate episode count (FR-004: exactly 3 episodes required)
        if (props.episodes.length !== 3) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"](`Presenter must have exactly 3 episodes (has ${props.episodes.length})`);
        }
        // Validate exactly one lie among episodes
        const lieCount = props.episodes.filter((ep)=>ep.isLie).length;
        if (lieCount !== 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"](`Presenter must have exactly 1 lie episode (has ${lieCount})`);
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"]('Presenter nickname cannot be empty');
        }
        // Allow any number of episodes (0-3) for incomplete presenters
        if (props.episodes.length > 3) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationError"](`Presenter cannot have more than 3 episodes (has ${props.episodes.length})`);
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
"[project]/src/server/domain/value-objects/GameId.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/server/infrastructure/repositories/PrismaGameRepository.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// PrismaGameRepository
// Feature: 002-game-preparation
// Implementation of IGameRepository using Prisma ORM for SQLite persistence
__turbopack_context__.s([
    "PrismaGameRepository",
    ()=>PrismaGameRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Episode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Episode.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Game.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Presenter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Presenter.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameId$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/GameId.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameStatus$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/value-objects/GameStatus.ts [app-route] (ecmascript)");
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Presenter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Presenter"].create({
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
        const episodes = prismaPresenter.episodes.map((episode)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Episode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Episode"].create({
                id: episode.id,
                presenterId: episode.presenterId,
                text: episode.text,
                isLie: episode.isLie,
                createdAt: episode.createdAt
            }));
        // Use createIncomplete to allow partial episode sets during creation
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Presenter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Presenter"].createIncomplete({
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Episode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Episode"].create({
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
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Game$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Game"](new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameId$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GameId"](prismaGame.id), prismaGame.name, new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$value$2d$objects$2f$GameStatus$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GameStatus"](prismaGame.status), prismaGame.maxPlayers, prismaGame.currentPlayers, prismaGame.createdAt, prismaGame.updatedAt, prismaGame.creatorId || '');
    }
}
}),
"[project]/src/server/domain/entities/Participation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Domain Entity: Participation
// Represents a participant's registration in a game
__turbopack_context__.s([
    "ParticipationEntity",
    ()=>ParticipationEntity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
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
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
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
"[project]/src/server/infrastructure/repositories/PrismaParticipationRepository.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Infrastructure: Prisma Participation Repository
// Implements IParticipationRepository interface using Prisma ORM
__turbopack_context__.s([
    "PrismaParticipationRepository",
    ()=>PrismaParticipationRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Participation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/domain/entities/Participation.ts [app-route] (ecmascript)");
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$domain$2f$entities$2f$Participation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParticipationEntity"].create({
            sessionId: participation.sessionId,
            gameId: participation.gameId,
            nickname: participation.nickname
        });
    }
}
}),
"[project]/src/server/infrastructure/repositories/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/generated/prisma/client.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$PrismaAnswerRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/repositories/PrismaAnswerRepository.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$PrismaGameRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/repositories/PrismaGameRepository.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$PrismaParticipationRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/repositories/PrismaParticipationRepository.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
        prismaClient = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrismaClient"]();
    }
    return prismaClient;
}
function createGameRepository() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$PrismaGameRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaGameRepository"](getPrismaClient());
}
function createAnswerRepository() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$PrismaAnswerRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaAnswerRepository"](getPrismaClient());
}
function createParticipationRepository() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$PrismaParticipationRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaParticipationRepository"](getPrismaClient());
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
"[project]/src/app/api/games/[gameId]/presenters/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// API Route: Game Presenters List
// Feature: 003-presenter-episode-inline
// Returns list of presenters with episodes for a specific game (requires session)
__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$games$2f$GetPresentersByGameId$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/application/use-cases/games/GetPresentersByGameId.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$di$2f$SessionServiceContainer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/infrastructure/di/SessionServiceContainer.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/server/infrastructure/repositories/index.ts [app-route] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function GET(_request, { params }) {
    try {
        // Validate session (required for presenter management)
        let sessionId;
        try {
            const sessionService = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$di$2f$SessionServiceContainer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SessionServiceContainer"].getSessionService();
            sessionId = await sessionService.requireCurrentSession();
        } catch  {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized',
                details: 'Session required'
            }, {
                status: 401
            });
        }
        // Extract gameId from params
        const { gameId } = await params;
        // Execute GetPresentersByGameId use case
        const repository = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$infrastructure$2f$repositories$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createGameRepository"])();
        const useCase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$application$2f$use$2d$cases$2f$games$2f$GetPresentersByGameId$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GetPresentersByGameId"](repository);
        const result = await useCase.execute({
            gameId,
            requesterId: sessionId
        });
        // Return successful response
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            presenters: result.presenters
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Presenters API error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal Server Error',
            details: error instanceof Error ? error.message : 'An unexpected error occurred'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cd4a53a7._.js.map