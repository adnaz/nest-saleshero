"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const affirmations_service_1 = require("./affirmations.service");
const affirmations_resolver_1 = require("./affirmations.resolver");
const prisma_service_1 = require("../prisma.service");
const files_service_1 = require("../files/files.service");
let AffirmationsModule = class AffirmationsModule {
};
AffirmationsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [affirmations_resolver_1.AffirmationsResolver, affirmations_service_1.AffirmationsService, prisma_service_1.PrismaService, files_service_1.FilesService]
    })
], AffirmationsModule);
exports.AffirmationsModule = AffirmationsModule;
