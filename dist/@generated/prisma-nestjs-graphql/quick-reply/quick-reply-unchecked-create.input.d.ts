import { TypeReply } from '../prisma/type-reply.enum';
import { ReplyUncheckedCreateNestedOneWithoutQuickRepliesInput } from '../reply/reply-unchecked-create-nested-one-without-quick-replies.input';
import { QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-unchecked-create-nested-many-without-quick-reply.input';
export declare class QuickReplyUncheckedCreateInput {
    id?: number;
    keepIt?: boolean;
    type: keyof typeof TypeReply;
    reply?: ReplyUncheckedCreateNestedOneWithoutQuickRepliesInput;
    values?: QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput;
}
