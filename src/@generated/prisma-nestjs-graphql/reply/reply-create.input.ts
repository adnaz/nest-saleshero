import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutReplyInput } from '../file/file-create-nested-one-without-reply.input';
import { SectionCreateNestedOneWithoutRepliesInput } from '../section/section-create-nested-one-without-replies.input';
import { ActorCreateNestedOneWithoutRepliesInput } from '../actor/actor-create-nested-one-without-replies.input';
import { QuickReplyCreateNestedOneWithoutReplyInput } from '../quick-reply/quick-reply-create-nested-one-without-reply.input';

@InputType()
export class ReplyCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FileCreateNestedOneWithoutReplyInput, {nullable:true})
    file?: FileCreateNestedOneWithoutReplyInput;

    @Field(() => SectionCreateNestedOneWithoutRepliesInput, {nullable:false})
    section!: SectionCreateNestedOneWithoutRepliesInput;

    @Field(() => ActorCreateNestedOneWithoutRepliesInput, {nullable:true})
    user?: ActorCreateNestedOneWithoutRepliesInput;

    @Field(() => QuickReplyCreateNestedOneWithoutReplyInput, {nullable:true})
    quickReplies?: QuickReplyCreateNestedOneWithoutReplyInput;
}
