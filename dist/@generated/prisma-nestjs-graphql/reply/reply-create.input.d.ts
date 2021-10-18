import { ActorCreateNestedOneWithoutRepliesInput } from '../actor/actor-create-nested-one-without-replies.input';
export declare class ReplyCreateInput {
    text?: string;
    audio?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: ActorCreateNestedOneWithoutRepliesInput;
}
