import { Role } from '.prisma/client';
import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { Authorize, Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) { }
  @Query(returns => User)
  // @UseGuards(GqlAuthGuard)
  @Authorize(Role.USER)
  // @Roles(Role.USER,'ADMIN')
  whoAmI(@CurrentUser() user: User) {
    return this.usersService.findOne(user.username);
  }
}
