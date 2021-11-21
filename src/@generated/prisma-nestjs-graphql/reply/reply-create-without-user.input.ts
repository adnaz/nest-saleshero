import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutReplyInput } from '../file/file-create-nested-one-without-reply.input';
import { SectionCreateNestedOneWithoutRepliesInput } from '../section/section-create-nested-one-without-replies.input';
import { QuickReplyCreateNestedOneWithoutReplyInput } from '../quick-reply/quick-reply-create-nested-one-without-reply.input';

@InputType()
export class ReplyCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FileCreateNestedOneWithoutReplyInput, {nullable:true})
    file?: FileCreateNestedOneWithoutReplyInput;

    @Field(() => SectionCreateNestedOneWithoutRepliesInput, {nullable:true})
    section?: SectionCreateNestedOneWithoutRepliesInput;

    @Field(() => QuickReplyCreateNestedOneWithoutReplyInput, {nullable:true})
    quickReply?: QuickReplyCreateNestedOneWithoutReplyInput;
}
