import { ActorCreateInput } from 'src/@generated/prisma-nestjs-graphql/actor/actor-create.input';
import { Actor } from 'src/@generated/prisma-nestjs-graphql/actor/actor.model';
import { FindManyActorArgs } from 'src/@generated/prisma-nestjs-graphql/actor/find-many-actor.args';
import { UpdateOneActorArgs } from 'src/@generated/prisma-nestjs-graphql/actor/update-one-actor.args';
import { ActorsService } from './actors.service';
import { FilesService } from 'src/files/files.service';
export declare class ActorsResolver {
    private actorsService;
    private filesService;
    constructor(actorsService: ActorsService, filesService: FilesService);
    actors(findManyActorArgs: FindManyActorArgs): Promise<Actor[]>;
    actor(id: number): Promise<any>;
    createActor(actorCreateInput: ActorCreateInput): any;
    updateActor(updateOneActorArgs: UpdateOneActorArgs): any;
    removeActor(id: number): any;
    author(actor: Actor): Promise<import(".prisma/client").File>;
}
