import { SectionCreateNestedOneWithoutRepliesInput } from '../section/section-create-nested-one-without-replies.input';
import { ActorCreateNestedOneWithoutRepliesInput } from '../actor/actor-create-nested-one-without-replies.input';
import { QuickReplyCreateNestedOneWithoutReplyInput } from '../quick-reply/quick-reply-create-nested-one-without-reply.input';
export declare class ReplyCreateWithoutFileInput {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    section: SectionCreateNestedOneWithoutRepliesInput;
    user?: ActorCreateNestedOneWithoutRepliesInput;
    quickReplies?: QuickReplyCreateNestedOneWithoutReplyInput;
}
