import { ReplyCreateWithoutQuickRepliesInput } from './reply-create-without-quick-replies.input';
import { ReplyCreateOrConnectWithoutQuickRepliesInput } from './reply-create-or-connect-without-quick-replies.input';
import { ReplyUpsertWithoutQuickRepliesInput } from './reply-upsert-without-quick-replies.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithoutQuickRepliesInput } from './reply-update-without-quick-replies.input';
export declare class ReplyUpdateOneWithoutQuickRepliesInput {
    create?: ReplyCreateWithoutQuickRepliesInput;
    connectOrCreate?: ReplyCreateOrConnectWithoutQuickRepliesInput;
    upsert?: ReplyUpsertWithoutQuickRepliesInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: ReplyWhereUniqueInput;
    update?: ReplyUpdateWithoutQuickRepliesInput;
}
