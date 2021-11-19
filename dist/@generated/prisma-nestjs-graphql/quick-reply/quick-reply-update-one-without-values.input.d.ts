import { QuickReplyCreateWithoutValuesInput } from './quick-reply-create-without-values.input';
import { QuickReplyCreateOrConnectWithoutValuesInput } from './quick-reply-create-or-connect-without-values.input';
import { QuickReplyUpsertWithoutValuesInput } from './quick-reply-upsert-without-values.input';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';
import { QuickReplyUpdateWithoutValuesInput } from './quick-reply-update-without-values.input';
export declare class QuickReplyUpdateOneWithoutValuesInput {
    create?: QuickReplyCreateWithoutValuesInput;
    connectOrCreate?: QuickReplyCreateOrConnectWithoutValuesInput;
    upsert?: QuickReplyUpsertWithoutValuesInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: QuickReplyWhereUniqueInput;
    update?: QuickReplyUpdateWithoutValuesInput;
}
