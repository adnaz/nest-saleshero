import { Role } from '.prisma/client';
import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>("roles", context.getHandler());
    const ctx = GqlExecutionContext.create(context);
    
    console.log("roles: ", roles);
    console.log("gqlContext: ", ctx.getContext().req.user);
    const {user} = ctx.getContext().req;
    if(user){
        return roles.includes(user?.role);
    }
    
    return true;
}
}