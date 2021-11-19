import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CourseCreateInput } from 'src/@generated/prisma-nestjs-graphql/course/course-create.input';
import { Course } from 'src/@generated/prisma-nestjs-graphql/course/course.model';
import { FindManyCourseArgs } from 'src/@generated/prisma-nestjs-graphql/course/find-many-course.args';
import { UpdateOneCourseArgs } from 'src/@generated/prisma-nestjs-graphql/course/update-one-course.args';
import { Role } from 'src/@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { Authorize } from 'src/auth/roles.decorator';
import { FilesService } from 'src/files/files.service';
import { UsersService } from 'src/users/users.service';
import { CoursesService } from './courses.service';
@Resolver( Course)
export class CoursesResolver {

    constructor(private coursesService: CoursesService, private usersService: UsersService,private filesService: FilesService) { }


    @Query(returns => [Course])
    courses(@Args() findManyCourseArgs : FindManyCourseArgs): Promise<Course[]> {
        return this.coursesService.courses(findManyCourseArgs);
    }

    @Query(retuns => Course)
    async course(@Args('id', { type: () => Int }) id: number) {
        return this.coursesService.course({ id })
    }

  @UseGuards(GqlAuthGuard)
  @Authorize(Role.ADMIN)
    @Mutation(returns =>User)
    createCourse(@CurrentUser() user: User,@Args('courseCreateInput') courseCreateInput:CourseCreateInput ){
        return this.coursesService.createCourse({...courseCreateInput, "author": {
            "connect": {
              "username": user.username
            }
          }})
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
        const { authorId } = course;
        return this.usersService.user({ id:authorId });
    }

    @ResolveField()
    async image(@Parent() course: Course) {
        const { imageId } = course;
        if(imageId){
            return this.filesService.file({ id:imageId });

        }
    }
}
