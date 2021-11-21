import { Role } from '.prisma/client';
import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Course } from 'src/@generated/prisma-nestjs-graphql/course/course.model';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { Authorize, Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CoursesService } from 'src/courses/courses.service';
import { UsersService } from './users.service';
import { Prisma } from '.prisma/client';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { UpdateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user.args';

@Resolver(User)
export class UsersResolver {
  constructor(private usersService: UsersService,private coursesService: CoursesService) { }
  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  @Authorize(Role.ADMIN)
  // @Roles(Role.USER,Role.ADMIN)
  whoAmI(@CurrentUser() user: User) {
    return this.usersService.findOne(user.username);
  }

  @Query(returns => [User])
  users(@Args() findManyUserArgs : FindManyUserArgs): Promise<User[]> {
      return this.usersService.users(findManyUserArgs);
  }

  @Query(retuns => User)
  async user(@Args('id', { type: () => Int }) id: number) {
      return this.usersService.user({ id })
  }

  @Mutation(returns =>User)
  createUser(@Args('userCreateInput') userCreateInput:UserCreateInput ){
      return this.usersService.createUser(userCreateInput)
  }
  
  @Mutation(()=>User)
  updateUser(@Args() updateOneUserArgs: UpdateOneUserArgs){
      return this.usersService.updateUser(updateOneUserArgs)
  }

  @Mutation(()=>User)
  removeUser(@Args('id', { type: () => Int }) id: number){
      return this.usersService.deleteUser({id});
  }
  @ResolveField(()=>[Course])
    async courses(@Parent() user: User) {
        const { id } = user;
        return this.coursesService.courses({where:{authorId:{equals:id}}})
    }
}
