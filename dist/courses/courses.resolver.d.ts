import { CourseCreateInput } from 'src/@generated/prisma-nestjs-graphql/course/course-create.input';
import { Course } from 'src/@generated/prisma-nestjs-graphql/course/course.model';
import { FindManyCourseArgs } from 'src/@generated/prisma-nestjs-graphql/course/find-many-course.args';
import { UpdateOneCourseArgs } from 'src/@generated/prisma-nestjs-graphql/course/update-one-course.args';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { FilesService } from 'src/files/files.service';
import { UsersService } from 'src/users/users.service';
import { CoursesService } from './courses.service';
export declare class CoursesResolver {
    private coursesService;
    private usersService;
    private filesService;
    constructor(coursesService: CoursesService, usersService: UsersService, filesService: FilesService);
    courses(findManyCourseArgs: FindManyCourseArgs): Promise<Course[]>;
    course(id: number): Promise<import(".prisma/client").Course>;
    createCourse(user: User, courseCreateInput: CourseCreateInput): Promise<import(".prisma/client").Course>;
    updateCourse(updateOneCourseArgs: UpdateOneCourseArgs): Promise<import(".prisma/client").Course>;
    removeCourse(id: number): Promise<import(".prisma/client").Course>;
    author(course: Course): Promise<import(".prisma/client").User>;
    image(course: Course): Promise<import(".prisma/client").File>;
}
