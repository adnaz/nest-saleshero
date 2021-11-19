import { QuickReplyCreateWithoutReplyInput } from './quick-reply-create-without-reply.input';
import { QuickReplyCreateOrConnectWithoutReplyInput } from './quick-reply-create-or-connect-without-reply.input';
import { QuickReplyUpsertWithoutReplyInput } from './quick-reply-upsert-without-reply.input';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';
import { QuickReplyUpdateWithoutReplyInput } from './quick-reply-update-without-reply.input';
export declare class QuickReplyUpdateOneWithoutReplyInput {
    create?: QuickReplyCreateWithoutReplyInput;
    connectOrCreate?: QuickReplyCreateOrConnectWithoutReplyInput;
    upsert?: QuickReplyUpsertWithoutReplyInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: QuickReplyWhereUniqueInput;
    update?: QuickReplyUpdateWithoutReplyInput;
}
