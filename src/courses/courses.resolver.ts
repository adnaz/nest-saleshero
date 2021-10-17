import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CourseCreateInput } from 'src/@generated/prisma-nestjs-graphql/course/course-create.input';
import { Course } from 'src/@generated/prisma-nestjs-graphql/course/course.model';
import { FindManyCourseArgs } from 'src/@generated/prisma-nestjs-graphql/course/find-many-course.args';
import { UpdateOneCourseArgs } from 'src/@generated/prisma-nestjs-graphql/course/update-one-course.args';
import { UsersService } from 'src/users/users.service';
import { CoursesService } from './courses.service';
@Resolver( Course)
export class CoursesResolver {

    constructor(private coursesService: CoursesService, private usersService: UsersService) { }


    @Query(returns => [Course])
    courses(@Args() findManyCourseArgs : FindManyCourseArgs): Promise<Course[]> {
        return this.coursesService.courses(findManyCourseArgs);
    }

    @Query(retuns => Course)
    async course(@Args('id', { type: () => Int }) id: number) {
        return this.coursesService.course({ id })
    }

    @Mutation(returns =>Course)
    createCourse(@Args('courseCreateInput') courseCreateInput:CourseCreateInput ){
        return this.coursesService.createCourse(courseCreateInput)
    }
    
    @Mutation(()=>Course)
    updateCourse(@Args() updateOneCourseArgs:UpdateOneCourseArgs){
        return this.coursesService.updateCourse(updateOneCourseArgs)
    }

    @Mutation(()=>Course)
    removeCourse(@Args('id', { type: () => Int }) id: number){
        return this.coursesService.deleteCourse({id});
    }

    @ResolveField()
    async author(@Parent() course: Course) {
        const { id } = course;
        return this.usersService.user({ id });
    }
}
