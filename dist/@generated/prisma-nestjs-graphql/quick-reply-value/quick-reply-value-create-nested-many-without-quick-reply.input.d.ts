import { QuickReplyValueCreateWithoutQuickReplyInput } from './quick-reply-value-create-without-quick-reply.input';
import { QuickReplyValueCreateOrConnectWithoutQuickReplyInput } from './quick-reply-value-create-or-connect-without-quick-reply.input';
import { QuickReplyValueCreateManyQuickReplyInputEnvelope } from './quick-reply-value-create-many-quick-reply-input-envelope.input';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';
export declare class QuickReplyValueCreateNestedManyWithoutQuickReplyInput {
    create?: Array<QuickReplyValueCreateWithoutQuickReplyInput>;
    connectOrCreate?: Array<QuickReplyValueCreateOrConnectWithoutQuickReplyInput>;
    createMany?: QuickReplyValueCreateManyQuickReplyInputEnvelope;
    connect?: Array<QuickReplyValueWhereUniqueInput>;
}
