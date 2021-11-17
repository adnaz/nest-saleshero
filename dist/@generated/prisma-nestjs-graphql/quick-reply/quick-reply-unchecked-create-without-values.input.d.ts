import { TypeReply } from '../prisma/type-reply.enum';
import { ReplyUncheckedCreateNestedOneWithoutQuickRepliesInput } from '../reply/reply-unchecked-create-nested-one-without-quick-replies.input';
export declare class QuickReplyUncheckedCreateWithoutValuesInput {
    id?: number;
    keepIt?: boolean;
    type: keyof typeof TypeReply;
    reply?: ReplyUncheckedCreateNestedOneWithoutQuickRepliesInput;
}
