import { FileCreateNestedOneWithoutReplyInput } from '../file/file-create-nested-one-without-reply.input';
import { SectionCreateNestedOneWithoutRepliesInput } from '../section/section-create-nested-one-without-replies.input';
import { QuickReplyCreateNestedOneWithoutReplyInput } from '../quick-reply/quick-reply-create-nested-one-without-reply.input';
export declare class ReplyCreateWithoutUserInput {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    file?: FileCreateNestedOneWithoutReplyInput;
    section: SectionCreateNestedOneWithoutRepliesInput;
    quickReplies?: QuickReplyCreateNestedOneWithoutReplyInput;
}
