import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { UpdateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user.args';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { CoursesService } from 'src/courses/courses.service';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private usersService;
    private coursesService;
    constructor(usersService: UsersService, coursesService: CoursesService);
    whoAmI(user: User): Promise<import(".prisma/client").User>;
    users(findManyUserArgs: FindManyUserArgs): Promise<User[]>;
    user(id: number): Promise<import(".prisma/client").User>;
    createUser(userCreateInput: UserCreateInput): Promise<import(".prisma/client").User>;
    updateUser(updateOneUserArgs: UpdateOneUserArgs): Promise<import(".prisma/client").User>;
    removeUser(id: number): Promise<import(".prisma/client").User>;
    courses(user: User): Promise<import(".prisma/client").Course[]>;
}
