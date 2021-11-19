import { TypeReply } from '../prisma/type-reply.enum';
import { ReplyCreateNestedOneWithoutQuickRepliesInput } from '../reply/reply-create-nested-one-without-quick-replies.input';
export declare class QuickReplyCreateWithoutValuesInput {
    keepIt?: boolean;
    type: keyof typeof TypeReply;
    reply?: ReplyCreateNestedOneWithoutQuickRepliesInput;
}
