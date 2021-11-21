import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AppCreateInput } from 'src/@generated/prisma-nestjs-graphql/app/app-create.input';
import { App } from 'src/@generated/prisma-nestjs-graphql/app/app.model';
import { FindManyAppArgs } from 'src/@generated/prisma-nestjs-graphql/app/find-many-app.args';
import { UpdateOneAppArgs } from 'src/@generated/prisma-nestjs-graphql/app/update-one-app.args';
import { UsersService } from 'src/users/users.service';
import { AppsService } from './apps.service';
import { CoursesService } from 'src/courses/courses.service';
import { Prisma } from '@prisma/client';
@Resolver( App)
export class AppsResolver {

    constructor(private appsService: AppsService) { }


    @Query(returns => [App])
    apps(@Args() findManyAppArgs : FindManyAppArgs): Promise<App[]> {
        return this.appsService.apps(findManyAppArgs);
    }

    @Query(retuns => App)
    async app(@Args('id', { type: () => Int }) id: number) {
        return this.appsService.app({ id })
    }

    @Mutation(returns =>App)
    createApp(@Args('appCreateInput') appCreateInput:AppCreateInput ){
        return this.appsService.createApp(appCreateInput)
    }
    
    @Mutation(()=>App)
    updateApp(@Args() updateOneAppArgs: UpdateOneAppArgs ){
        return this.appsService.updateApp(updateOneAppArgs)
    }

    @Mutation(()=>App)
    removeApp(@Args('id', { type: () => Int }) id: number){
        return this.appsService.deleteApp({id});
    }


}
