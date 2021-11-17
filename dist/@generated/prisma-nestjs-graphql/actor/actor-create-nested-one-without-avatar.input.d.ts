import { ActorCreateWithoutAvatarInput } from './actor-create-without-avatar.input';
import { ActorCreateOrConnectWithoutAvatarInput } from './actor-create-or-connect-without-avatar.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
export declare class ActorCreateNestedOneWithoutAvatarInput {
    create?: ActorCreateWithoutAvatarInput;
    connectOrCreate?: ActorCreateOrConnectWithoutAvatarInput;
    connect?: ActorWhereUniqueInput;
}
