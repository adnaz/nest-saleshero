import { Injectable } from '@nestjs/common';
// import { Course } from './course.entity';
import { PrismaService } from '../prisma.service';
import {
  Course,
  Prisma,
} from '@prisma/client';
import { FindManyCourseArgs } from 'src/@generated/prisma-nestjs-graphql/course/find-many-course.args';
import { CourseCreateInput } from 'src/@generated/prisma-nestjs-graphql/course/course-create.input';
@Injectable()
export class CoursesService {
    constructor(private prisma: PrismaService) {}


    async course(courseWhereUniqueInput: Prisma.CourseWhereUniqueInput): Promise<Course | null> {
        return this.prisma.course.findUnique({
          where: courseWhereUniqueInput,
        });
      }
    
      async courses(params: Prisma.CourseFindManyArgs): Promise<Course[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.course.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async createCourse(data: CourseCreateInput): Promise<Course> {
        return this.prisma.course.create({
          data,
        });
      }
    
      async updateCourse(params: {
        where: Prisma.CourseWhereUniqueInput;
        data: Prisma.CourseUpdateInput;
      }): Promise<Course> {
        const { data, where } = params;
        return this.prisma.course.update({
          data,
          where,
        });
      }
    
      async deleteCourse(where: Prisma.CourseWhereUniqueInput): Promise<Course> {
        return this.prisma.course.delete({
          where,
        });
      }
}
