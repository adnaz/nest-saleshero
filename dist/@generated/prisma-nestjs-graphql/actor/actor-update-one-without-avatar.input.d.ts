import { ActorCreateWithoutAvatarInput } from './actor-create-without-avatar.input';
import { ActorCreateOrConnectWithoutAvatarInput } from './actor-create-or-connect-without-avatar.input';
import { ActorUpsertWithoutAvatarInput } from './actor-upsert-without-avatar.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorUpdateWithoutAvatarInput } from './actor-update-without-avatar.input';
export declare class ActorUpdateOneWithoutAvatarInput {
    create?: ActorCreateWithoutAvatarInput;
    connectOrCreate?: ActorCreateOrConnectWithoutAvatarInput;
    upsert?: ActorUpsertWithoutAvatarInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: ActorWhereUniqueInput;
    update?: ActorUpdateWithoutAvatarInput;
}
