"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const sections_service_1 = require("./sections.service");
const sections_resolver_1 = require("./sections.resolver");
const users_module_1 = require("../users/users.module");
const prisma_service_1 = require("../prisma.service");
const courses_service_1 = require("../courses/courses.service");
const replies_service_1 = require("../replies/replies.service");
let SectionsModule = class SectionsModule {
};
SectionsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule],
        providers: [sections_resolver_1.SectionsResolver, sections_service_1.SectionsService, prisma_service_1.PrismaService, courses_service_1.CoursesService, replies_service_1.RepliesService]
    })
], SectionsModule);
exports.SectionsModule = SectionsModule;
