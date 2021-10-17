import { Role } from '.prisma/client';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth.guard';
import { RolesGuard } from './roles.guard';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
export const  Authorize = (roles?: string | string[]) =>
applyDecorators(
  SetMetadata('roles', [roles].flat()),
  UseGuards(GqlAuthGuard, RolesGuard),
);