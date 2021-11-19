import { ActorCreateWithoutRepliesInput } from './actor-create-without-replies.input';
import { ActorCreateOrConnectWithoutRepliesInput } from './actor-create-or-connect-without-replies.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
export declare class ActorCreateNestedOneWithoutRepliesInput {
    create?: ActorCreateWithoutRepliesInput;
    connectOrCreate?: ActorCreateOrConnectWithoutRepliesInput;
    connect?: ActorWhereUniqueInput;
}
