import { QuickReplyCreateWithoutReplyInput } from './quick-reply-create-without-reply.input';
import { QuickReplyCreateOrConnectWithoutReplyInput } from './quick-reply-create-or-connect-without-reply.input';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';
export declare class QuickReplyCreateNestedOneWithoutReplyInput {
    create?: QuickReplyCreateWithoutReplyInput;
    connectOrCreate?: QuickReplyCreateOrConnectWithoutReplyInput;
    connect?: QuickReplyWhereUniqueInput;
}
