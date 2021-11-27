"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesResolver = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const course_create_input_1 = require("../@generated/prisma-nestjs-graphql/course/course-create.input");
const course_model_1 = require("../@generated/prisma-nestjs-graphql/course/course.model");
const find_many_course_args_1 = require("../@generated/prisma-nestjs-graphql/course/find-many-course.args");
const update_one_course_args_1 = require("../@generated/prisma-nestjs-graphql/course/update-one-course.args");
const role_enum_1 = require("../@generated/prisma-nestjs-graphql/prisma/role.enum");
const section_model_1 = require("../@generated/prisma-nestjs-graphql/section/section.model");
const user_model_1 = require("../@generated/prisma-nestjs-graphql/user/user.model");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const gql_auth_guard_1 = require("../auth/gql-auth.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const files_service_1 = require("../files/files.service");
const sections_service_1 = require("../sections/sections.service");
const users_service_1 = require("../users/users.service");
const courses_service_1 = require("./courses.service");
let CoursesResolver = class CoursesResolver {
    constructor(coursesService, usersService, filesService, sectionsService) {
        this.coursesService = coursesService;
        this.usersService = usersService;
        this.filesService = filesService;
        this.sectionsService = sectionsService;
    }
    courses(findManyCourseArgs) {
        return this.coursesService.courses(findManyCourseArgs);
    }
    async course(id) {
        return this.coursesService.course({ id });
    }
    createCourse(user, courseCreateInput) {
        return this.coursesService.createCourse({ ...courseCreateInput, "author": {
                "connect": {
                    "username": user.username
                }
            } });
    }
    updateCourse(updateOneCourseArgs) {
        return this.coursesService.updateCourse(updateOneCourseArgs);
    }
    removeCourse(id) {
        return this.coursesService.deleteCourse({ id });
    }
    async author(course) {
        const { authorId } = course;
        if (authorId) {
            return this.usersService.user({ id: authorId });
        }
    }
    async image(course) {
        const { imageId } = course;
        if (imageId) {
            return this.filesService.file({ id: imageId });
        }
    }
    async sections(course) {
        const { id } = course;
        return this.sectionsService.sections({ where: { courseId: { equals: id } } });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(returns => [course_model_1.Course]),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [find_many_course_args_1.FindManyCourseArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CoursesResolver.prototype, "courses", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(retuns => course_model_1.Course),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CoursesResolver.prototype, "course", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, roles_decorator_1.Authorize)(role_enum_1.Role.ADMIN),
    (0, graphql_1.Mutation)(returns => course_model_1.Course),
    (0, tslib_1.__param)(0, (0, current_user_decorator_1.CurrentUser)()),
    (0, tslib_1.__param)(1, (0, graphql_1.Args)('courseCreateInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [user_model_1.User, course_create_input_1.CourseCreateInput]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CoursesResolver.prototype, "createCourse", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => course_model_1.Course),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [update_one_course_args_1.UpdateOneCourseArgs]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CoursesResolver.prototype, "updateCourse", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => course_model_1.Course),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CoursesResolver.prototype, "removeCourse", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [course_model_1.Course]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CoursesResolver.prototype, "author", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [course_model_1.Course]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CoursesResolver.prototype, "image", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => [section_model_1.Section]),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [course_model_1.Course]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CoursesResolver.prototype, "sections", null);
CoursesResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(course_model_1.Course),
    (0, tslib_1.__metadata)("design:paramtypes", [courses_service_1.CoursesService, users_service_1.UsersService, files_service_1.FilesService, sections_service_1.SectionsService])
], CoursesResolver);
exports.CoursesResolver = CoursesResolver;
