import { PrismaService } from '../prisma.service';
import { Course, Prisma } from '@prisma/client';
import { FindManyCourseArgs } from 'src/@generated/prisma-nestjs-graphql/course/find-many-course.args';
import { CourseCreateInput } from 'src/@generated/prisma-nestjs-graphql/course/course-create.input';
export declare class CoursesService {
    private prisma;
    constructor(prisma: PrismaService);
    course(courseWhereUniqueInput: Prisma.CourseWhereUniqueInput): Promise<Course | null>;
    courses(params: FindManyCourseArgs): Promise<Course[]>;
    createCourse(data: CourseCreateInput): Promise<Course>;
    updateCourse(params: {
        where: Prisma.CourseWhereUniqueInput;
        data: Prisma.CourseUpdateInput;
    }): Promise<Course>;
    deleteCourse(where: Prisma.CourseWhereUniqueInput): Promise<Course>;
}
