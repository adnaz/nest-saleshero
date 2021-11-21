"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const actors_service_1 = require("./actors.service");
const actors_resolver_1 = require("./actors.resolver");
const prisma_service_1 = require("../prisma.service");
const files_service_1 = require("../files/files.service");
let ActorsModule = class ActorsModule {
};
ActorsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [actors_resolver_1.ActorsResolver, actors_service_1.ActorsService, prisma_service_1.PrismaService, files_service_1.FilesService]
    })
], ActorsModule);
exports.ActorsModule = ActorsModule;
