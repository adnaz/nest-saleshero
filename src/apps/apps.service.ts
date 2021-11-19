import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  App,
  Prisma,
} from '@prisma/client';
import { FindManyAppArgs } from 'src/@generated/prisma-nestjs-graphql/app/find-many-app.args';
@Injectable()
export class AppsService {
    constructor(private prisma: PrismaService) {}


    async app(appWhereUniqueInput: Prisma.AppWhereUniqueInput): Promise<App | null> {
        return this.prisma.app.findUnique({
          where: appWhereUniqueInput,
        });
      }
    
      async apps(params: FindManyAppArgs): Promise<App[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.app.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async createApp(data: Prisma.AppCreateInput): Promise<App> {
        return this.prisma.app.create({
          data,
        });
      }
    
      async updateApp(params: {
        where: Prisma.AppWhereUniqueInput;
        data: Prisma.AppUpdateInput;
      }): Promise<App> {
        const { data, where } = params;
        return this.prisma.app.update({
          data,
          where,
        });
      }
    
      async deleteApp(where: Prisma.AppWhereUniqueInput): Promise<App> {
        return this.prisma.app.delete({
          where,
        });
      }
}
