"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const section_create_input_1 = require("../@generated/prisma-nestjs-graphql/section/section-create.input");
const section_model_1 = require("../@generated/prisma-nestjs-graphql/section/section.model");
const find_many_section_args_1 = require("../@generated/prisma-nestjs-graphql/section/find-many-section.args");
const update_one_section_args_1 = require("../@generated/prisma-nestjs-graphql/section/update-one-section.args");
const users_service_1 = require("../users/users.service");
const sections_service_1 = require("./sections.service");
const courses_service_1 = require("../courses/courses.service");
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
    createSection(sectionCreateInput) {
        return this.sectionsService.createSection(sectionCreateInput);
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
__decorate([
    (0, graphql_1.Query)(returns => [section_model_1.Section]),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_section_args_1.FindManySectionArgs]),
    __metadata("design:returntype", Promise)
], SectionsResolver.prototype, "sections", null);
__decorate([
    (0, graphql_1.Query)(retuns => section_model_1.Section),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SectionsResolver.prototype, "section", null);
__decorate([
    (0, graphql_1.Mutation)(returns => section_model_1.Section),
    __param(0, (0, graphql_1.Args)('sectionCreateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [section_create_input_1.SectionCreateInput]),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "createSection", null);
__decorate([
    (0, graphql_1.Mutation)(() => section_model_1.Section),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_one_section_args_1.UpdateOneSectionArgs]),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "updateSection", null);
__decorate([
    (0, graphql_1.Mutation)(() => section_model_1.Section),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "removeSection", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [section_model_1.Section]),
    __metadata("design:returntype", Promise)
], SectionsResolver.prototype, "author", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [section_model_1.Section]),
    __metadata("design:returntype", Promise)
], SectionsResolver.prototype, "course", null);
SectionsResolver = __decorate([
    (0, graphql_1.Resolver)(section_model_1.Section),
    __metadata("design:paramtypes", [sections_service_1.SectionsService, users_service_1.UsersService, courses_service_1.CoursesService])
], SectionsResolver);
exports.SectionsResolver = SectionsResolver;
//# sourceMappingURL=sections.resolver.js.map