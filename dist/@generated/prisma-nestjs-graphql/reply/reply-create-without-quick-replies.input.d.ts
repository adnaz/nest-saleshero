import { FileCreateNestedOneWithoutReplyInput } from '../file/file-create-nested-one-without-reply.input';
import { SectionCreateNestedOneWithoutRepliesInput } from '../section/section-create-nested-one-without-replies.input';
import { ActorCreateNestedOneWithoutRepliesInput } from '../actor/actor-create-nested-one-without-replies.input';
export declare class ReplyCreateWithoutQuickRepliesInput {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    file?: FileCreateNestedOneWithoutReplyInput;
    section: SectionCreateNestedOneWithoutRepliesInput;
    user?: ActorCreateNestedOneWithoutRepliesInput;
}
