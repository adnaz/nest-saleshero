import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private usersService;
    constructor(usersService: UsersService);
    whoAmI(user: User): Promise<import(".prisma/client").User>;
}
