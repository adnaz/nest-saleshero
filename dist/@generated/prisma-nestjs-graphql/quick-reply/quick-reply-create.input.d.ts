import { TypeReply } from '../prisma/type-reply.enum';
import { ReplyCreateNestedOneWithoutQuickRepliesInput } from '../reply/reply-create-nested-one-without-quick-replies.input';
import { QuickReplyValueCreateNestedManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-create-nested-many-without-quick-reply.input';
export declare class QuickReplyCreateInput {
    keepIt?: boolean;
    type: keyof typeof TypeReply;
    reply?: ReplyCreateNestedOneWithoutQuickRepliesInput;
    values?: QuickReplyValueCreateNestedManyWithoutQuickReplyInput;
}
