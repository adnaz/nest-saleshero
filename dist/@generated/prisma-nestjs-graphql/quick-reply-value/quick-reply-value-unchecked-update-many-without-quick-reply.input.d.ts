import { QuickReplyValueCreateWithoutQuickReplyInput } from './quick-reply-value-create-without-quick-reply.input';
import { QuickReplyValueCreateOrConnectWithoutQuickReplyInput } from './quick-reply-value-create-or-connect-without-quick-reply.input';
import { QuickReplyValueUpsertWithWhereUniqueWithoutQuickReplyInput } from './quick-reply-value-upsert-with-where-unique-without-quick-reply.input';
import { QuickReplyValueCreateManyQuickReplyInputEnvelope } from './quick-reply-value-create-many-quick-reply-input-envelope.input';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';
import { QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput } from './quick-reply-value-update-with-where-unique-without-quick-reply.input';
import { QuickReplyValueUpdateManyWithWhereWithoutQuickReplyInput } from './quick-reply-value-update-many-with-where-without-quick-reply.input';
import { QuickReplyValueScalarWhereInput } from './quick-reply-value-scalar-where.input';
export declare class QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput {
    create?: Array<QuickReplyValueCreateWithoutQuickReplyInput>;
    connectOrCreate?: Array<QuickReplyValueCreateOrConnectWithoutQuickReplyInput>;
    upsert?: Array<QuickReplyValueUpsertWithWhereUniqueWithoutQuickReplyInput>;
    createMany?: QuickReplyValueCreateManyQuickReplyInputEnvelope;
    set?: Array<QuickReplyValueWhereUniqueInput>;
    disconnect?: Array<QuickReplyValueWhereUniqueInput>;
    delete?: Array<QuickReplyValueWhereUniqueInput>;
    connect?: Array<QuickReplyValueWhereUniqueInput>;
    update?: Array<QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput>;
    updateMany?: Array<QuickReplyValueUpdateManyWithWhereWithoutQuickReplyInput>;
    deleteMany?: Array<QuickReplyValueScalarWhereInput>;
}
