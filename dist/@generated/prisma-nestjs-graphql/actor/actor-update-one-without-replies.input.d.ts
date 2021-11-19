import { ActorCreateWithoutRepliesInput } from './actor-create-without-replies.input';
import { ActorCreateOrConnectWithoutRepliesInput } from './actor-create-or-connect-without-replies.input';
import { ActorUpsertWithoutRepliesInput } from './actor-upsert-without-replies.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorUpdateWithoutRepliesInput } from './actor-update-without-replies.input';
export declare class ActorUpdateOneWithoutRepliesInput {
    create?: ActorCreateWithoutRepliesInput;
    connectOrCreate?: ActorCreateOrConnectWithoutRepliesInput;
    upsert?: ActorUpsertWithoutRepliesInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: ActorWhereUniqueInput;
    update?: ActorUpdateWithoutRepliesInput;
}
