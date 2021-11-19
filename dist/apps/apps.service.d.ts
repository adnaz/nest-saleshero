import { PrismaService } from '../prisma.service';
import { App, Prisma } from '@prisma/client';
import { FindManyAppArgs } from 'src/@generated/prisma-nestjs-graphql/app/find-many-app.args';
export declare class AppsService {
    private prisma;
    constructor(prisma: PrismaService);
    app(appWhereUniqueInput: Prisma.AppWhereUniqueInput): Promise<App | null>;
    apps(params: FindManyAppArgs): Promise<App[]>;
    createApp(data: Prisma.AppCreateInput): Promise<App>;
    updateApp(params: {
        where: Prisma.AppWhereUniqueInput;
        data: Prisma.AppUpdateInput;
    }): Promise<App>;
    deleteApp(where: Prisma.AppWhereUniqueInput): Promise<App>;
}
