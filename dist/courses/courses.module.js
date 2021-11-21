"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const courses_service_1 = require("./courses.service");
const courses_resolver_1 = require("./courses.resolver");
const prisma_service_1 = require("../prisma.service");
const users_service_1 = require("../users/users.service");
const users_module_1 = require("../users/users.module");
const files_service_1 = require("../files/files.service");
let CoursesModule = class CoursesModule {
};
CoursesModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule],
        providers: [courses_service_1.CoursesService, courses_resolver_1.CoursesResolver, prisma_service_1.PrismaService, files_service_1.FilesService]
    })
], CoursesModule);
exports.CoursesModule = CoursesModule;
