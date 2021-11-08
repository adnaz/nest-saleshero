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
exports.CoursesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const course_create_input_1 = require("../@generated/prisma-nestjs-graphql/course/course-create.input");
const course_model_1 = require("../@generated/prisma-nestjs-graphql/course/course.model");
const find_many_course_args_1 = require("../@generated/prisma-nestjs-graphql/course/find-many-course.args");
const update_one_course_args_1 = require("../@generated/prisma-nestjs-graphql/course/update-one-course.args");
const users_service_1 = require("../users/users.service");
const courses_service_1 = require("./courses.service");
let CoursesResolver = class CoursesResolver {
    constructor(coursesService, usersService) {
        this.coursesService = coursesService;
        this.usersService = usersService;
    }
    courses(findManyCourseArgs) {
        return this.coursesService.courses(findManyCourseArgs);
    }
    async course(id) {
        return this.coursesService.course({ id });
    }
    createCourse(courseCreateInput) {
        return this.coursesService.createCourse(courseCreateInput);
    }
    updateCourse(updateOneCourseArgs) {
        return this.coursesService.updateCourse(updateOneCourseArgs);
    }
    removeCourse(id) {
        return this.coursesService.deleteCourse({ id });
    }
    async author(course) {
        const { id } = course;
        return this.usersService.user({ id });
    }
};
__decorate([
    (0, graphql_1.Query)(returns => [course_model_1.Course]),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_course_args_1.FindManyCourseArgs]),
    __metadata("design:returntype", Promise)
], CoursesResolver.prototype, "courses", null);
__decorate([
    (0, graphql_1.Query)(retuns => course_model_1.Course),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoursesResolver.prototype, "course", null);
__decorate([
    (0, graphql_1.Mutation)(returns => course_model_1.Course),
    __param(0, (0, graphql_1.Args)('courseCreateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_create_input_1.CourseCreateInput]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "createCourse", null);
__decorate([
    (0, graphql_1.Mutation)(() => course_model_1.Course),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_one_course_args_1.UpdateOneCourseArgs]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "updateCourse", null);
__decorate([
    (0, graphql_1.Mutation)(() => course_model_1.Course),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "removeCourse", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_model_1.Course]),
    __metadata("design:returntype", Promise)
], CoursesResolver.prototype, "author", null);
CoursesResolver = __decorate([
    (0, graphql_1.Resolver)(course_model_1.Course),
    __metadata("design:paramtypes", [courses_service_1.CoursesService, users_service_1.UsersService])
], CoursesResolver);
exports.CoursesResolver = CoursesResolver;
//# sourceMappingURL=courses.resolver.js.map