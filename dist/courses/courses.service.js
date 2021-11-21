"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
// import { Course } from './course.entity';
const prisma_service_1 = require("../prisma.service");
const find_many_course_args_1 = require("../@generated/prisma-nestjs-graphql/course/find-many-course.args");
const course_create_input_1 = require("../@generated/prisma-nestjs-graphql/course/course-create.input");
let CoursesService = class CoursesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async course(courseWhereUniqueInput) {
        return this.prisma.course.findUnique({
            where: courseWhereUniqueInput,
        });
    }
    async courses(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.course.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createCourse(data) {
        return this.prisma.course.create({
            data,
        });
    }
    async updateCourse(params) {
        const { data, where } = params;
        return this.prisma.course.update({
            data,
            where,
        });
    }
    async deleteCourse(where) {
        return this.prisma.course.delete({
            where,
        });
    }
};
CoursesService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_service_1.PrismaService])
], CoursesService);
exports.CoursesService = CoursesService;
