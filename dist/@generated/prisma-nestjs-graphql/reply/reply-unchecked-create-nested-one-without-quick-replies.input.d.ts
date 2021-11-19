import { ReplyCreateWithoutQuickRepliesInput } from './reply-create-without-quick-replies.input';
import { ReplyCreateOrConnectWithoutQuickRepliesInput } from './reply-create-or-connect-without-quick-replies.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
export declare class ReplyUncheckedCreateNestedOneWithoutQuickRepliesInput {
    create?: ReplyCreateWithoutQuickRepliesInput;
    connectOrCreate?: ReplyCreateOrConnectWithoutQuickRepliesInput;
    connect?: ReplyWhereUniqueInput;
}
