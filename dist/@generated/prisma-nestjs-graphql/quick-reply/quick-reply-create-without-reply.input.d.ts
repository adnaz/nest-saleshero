import { TypeReply } from '../prisma/type-reply.enum';
import { QuickReplyValueCreateNestedManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-create-nested-many-without-quick-reply.input';
export declare class QuickReplyCreateWithoutReplyInput {
    keepIt?: boolean;
    type: keyof typeof TypeReply;
    values?: QuickReplyValueCreateNestedManyWithoutQuickReplyInput;
}
