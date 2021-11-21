"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const files_service_1 = require("./files.service");
const files_controller_1 = require("./files.controller");
const s3_service_1 = require("./s3.service");
const prisma_service_1 = require("../prisma.service");
const files_resolver_1 = require("./files.resolver");
let FilesModule = class FilesModule {
};
FilesModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [files_controller_1.FilesController],
        providers: [files_service_1.FilesService, s3_service_1.S3Service, prisma_service_1.PrismaService, files_resolver_1.FilesResolver],
    })
], FilesModule);
exports.FilesModule = FilesModule;
