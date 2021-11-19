import { AppCreateInput } from 'src/@generated/prisma-nestjs-graphql/app/app-create.input';
import { App } from 'src/@generated/prisma-nestjs-graphql/app/app.model';
import { FindManyAppArgs } from 'src/@generated/prisma-nestjs-graphql/app/find-many-app.args';
import { UpdateOneAppArgs } from 'src/@generated/prisma-nestjs-graphql/app/update-one-app.args';
import { AppsService } from './apps.service';
export declare class AppsResolver {
    private appsService;
    constructor(appsService: AppsService);
    apps(findManyAppArgs: FindManyAppArgs): Promise<App[]>;
    app(id: number): Promise<import(".prisma/client").App>;
    createApp(appCreateInput: AppCreateInput): Promise<import(".prisma/client").App>;
    updateApp(updateOneAppArgs: UpdateOneAppArgs): Promise<import(".prisma/client").App>;
    removeApp(id: number): Promise<import(".prisma/client").App>;
}
