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
    actor(id: number): Promise<import(".prisma/client").Actor>;
    createActor(actorCreateInput: ActorCreateInput): Promise<import(".prisma/client").Actor>;
    updateActor(updateOneActorArgs: UpdateOneActorArgs): Promise<import(".prisma/client").Actor>;
    removeActor(id: number): Promise<import(".prisma/client").Actor>;
    avatar(actor: Actor): Promise<import(".prisma/client").File>;
}
