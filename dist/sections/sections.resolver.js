"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionsResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const section_create_input_1 = require("../@generated/prisma-nestjs-graphql/section/section-create.input");
const section_model_1 = require("../@generated/prisma-nestjs-graphql/section/section.model");
const find_many_section_args_1 = require("../@generated/prisma-nestjs-graphql/section/find-many-section.args");
const update_one_section_args_1 = require("../@generated/prisma-nestjs-graphql/section/update-one-section.args");
const users_service_1 = require("../users/users.service");
const sections_service_1 = require("./sections.service");
const courses_service_1 = require("../courses/courses.service");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../auth/gql-auth.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const role_enum_1 = require("../@generated/prisma-nestjs-graphql/prisma/role.enum");
const user_model_1 = require("../@generated/prisma-nestjs-graphql/user/user.model");
const current_user_decorator_1 = require("../auth/current-user.decorator");
let SectionsResolver = class SectionsResolver {
    constructor(sectionsService, usersService, coursesService) {
        this.sectionsService = sectionsService;
        this.usersService = usersService;
        this.coursesService = coursesService;
    }
    sections(findManySectionArgs) {
        return this.sectionsService.sections(findManySectionArgs);
    }
    async section(id) {
        return this.sectionsService.section({ id });
    }
    createSection(user, sectionCreateInput) {
        return this.sectionsService.createSection({
            ...sectionCreateInput, "author": {
                "connect": {
                    "username": user.username
                }
            }
        });
    }
    updateSection(updateOneSectionArgs) {
        return this.sectionsService.updateSection(updateOneSectionArgs);
    }
    removeSection(id) {
        return this.sectionsService.deleteSection({ id });
    }
    async author(section) {
        const { authorId } = section;
        if (authorId) {
            return this.usersService.user({ id: authorId });
        }
    }
    async course(section) {
        const { courseId } = section;
        return this.coursesService.course({ id: courseId });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(returns => [section_model_1.Section]),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [find_many_section_args_1.FindManySectionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SectionsResolver.prototype, "sections", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(retuns => section_model_1.Section),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SectionsResolver.prototype, "section", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, roles_decorator_1.Authorize)(role_enum_1.Role.ADMIN),
    (0, graphql_1.Mutation)(returns => section_model_1.Section),
    (0, tslib_1.__param)(0, (0, current_user_decorator_1.CurrentUser)()),
    (0, tslib_1.__param)(1, (0, graphql_1.Args)('sectionCreateInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [user_model_1.User, section_create_input_1.SectionCreateInput]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], SectionsResolver.prototype, "createSection", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => section_model_1.Section),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [update_one_section_args_1.UpdateOneSectionArgs]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], SectionsResolver.prototype, "updateSection", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => section_model_1.Section),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], SectionsResolver.prototype, "removeSection", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [section_model_1.Section]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SectionsResolver.prototype, "author", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [section_model_1.Section]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SectionsResolver.prototype, "course", null);
SectionsResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(section_model_1.Section),
    (0, tslib_1.__metadata)("design:paramtypes", [sections_service_1.SectionsService, users_service_1.UsersService, courses_service_1.CoursesService])
], SectionsResolver);
exports.SectionsResolver = SectionsResolver;
