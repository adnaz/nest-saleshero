import { FileCreateNestedOneWithoutReplyInput } from '../file/file-create-nested-one-without-reply.input';
import { ActorCreateNestedOneWithoutRepliesInput } from '../actor/actor-create-nested-one-without-replies.input';
import { QuickReplyCreateNestedOneWithoutReplyInput } from '../quick-reply/quick-reply-create-nested-one-without-reply.input';
export declare class ReplyCreateWithoutSectionInput {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    file?: FileCreateNestedOneWithoutReplyInput;
    user?: ActorCreateNestedOneWithoutRepliesInput;
    quickReplies?: QuickReplyCreateNestedOneWithoutReplyInput;
}
