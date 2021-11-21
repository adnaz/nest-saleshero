"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_resolver_1 = require("./users.resolver");
const prisma_service_1 = require("../prisma.service");
const courses_service_1 = require("../courses/courses.service");
const files_service_1 = require("../files/files.service");
let UsersModule = class UsersModule {
};
UsersModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [users_service_1.UsersService, users_resolver_1.UsersResolver, prisma_service_1.PrismaService, courses_service_1.CoursesService, files_service_1.FilesService],
        exports: [users_service_1.UsersService]
    })
], UsersModule);
exports.UsersModule = UsersModule;
