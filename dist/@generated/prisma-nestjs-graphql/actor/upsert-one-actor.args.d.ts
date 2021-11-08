import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorCreateInput } from './actor-create.input';
import { ActorUpdateInput } from './actor-update.input';
export declare class UpsertOneActorArgs {
    where: ActorWhereUniqueInput;
    create: ActorCreateInput;
    update: ActorUpdateInput;
}
