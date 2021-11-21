import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Actor } from 'src/@generated/prisma-nestjs-graphql/actor/actor.model';
import { FindManyActorArgs } from 'src/@generated/prisma-nestjs-graphql/actor/find-many-actor.args';
import { UsersService } from 'src/users/users.service';
import { ActorsService } from './actors.service';
import { CoursesService } from 'src/courses/courses.service';
import { File } from 'src/@generated/prisma-nestjs-graphql/file/file.model';
import { FilesService } from 'src/files/files.service';
import { Prisma } from '@prisma/client';
import { ActorCreateInput } from 'src/@generated/prisma-nestjs-graphql/actor/actor-create.input';
import { UpdateOneActorArgs } from 'src/@generated/prisma-nestjs-graphql/actor/update-one-actor.args';
@Resolver( Actor)
export class ActorsResolver {

    constructor(private actorsService: ActorsService,private filesService: FilesService) { }


    @Query(returns => [Actor])
    actors(@Args() findManyActorArgs : FindManyActorArgs): Promise<Actor[]> {
        return this.actorsService.actors(findManyActorArgs);
    }

    @Query(retuns => Actor)
    async actor(@Args('id', { type: () => Int }) id: number) {
        return this.actorsService.actor({ id })
    }

    @Mutation(returns =>Actor)
    createActor(@Args('actorCreateInput') actorCreateInput: ActorCreateInput ){
        return this.actorsService.createActor(actorCreateInput)
    }
    
    @Mutation(()=>Actor)
    updateActor(@Args() updateOneActorArgs: UpdateOneActorArgs ){
        return this.actorsService.updateActor(updateOneActorArgs)
    }

    @Mutation(()=>Actor)
    removeActor(@Args('id', { type: () => Int }) id: number){
        return this.actorsService.deleteActor({id});
    }

    @ResolveField(()=>File)
    async avatar(@Parent() actor: Actor) {
        const { fileId } = actor;
        if(fileId){
            return this.filesService.file({id:fileId})
        }
        return null
    }

}
