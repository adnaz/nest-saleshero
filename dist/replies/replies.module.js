"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepliesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const replies_service_1 = require("./replies.service");
const replies_resolver_1 = require("./replies.resolver");
const sections_service_1 = require("../sections/sections.service");
const prisma_service_1 = require("../prisma.service");
const quick_replies_service_1 = require("../quick-replies/quick-replies.service");
const actors_service_1 = require("../actors/actors.service");
const files_service_1 = require("../files/files.service");
let RepliesModule = class RepliesModule {
};
RepliesModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [replies_resolver_1.RepliesResolver, replies_service_1.RepliesService, sections_service_1.SectionsService, prisma_service_1.PrismaService, quick_replies_service_1.QuickRepliesService, actors_service_1.ActorsService, files_service_1.FilesService]
    })
], RepliesModule);
exports.RepliesModule = RepliesModule;
