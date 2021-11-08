import { TypeReply } from '../prisma/type-reply.enum';
import { QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-unchecked-create-nested-many-without-quick-reply.input';
export declare class QuickReplyUncheckedCreateInput {
    id?: number;
    type: keyof typeof TypeReply;
    values?: QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput;
}
