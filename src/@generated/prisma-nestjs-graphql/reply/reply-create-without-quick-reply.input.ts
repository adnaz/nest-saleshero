import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutReplyInput } from '../file/file-create-nested-one-without-reply.input';
import { SectionCreateNestedOneWithoutRepliesInput } from '../section/section-create-nested-one-without-replies.input';
import { ActorCreateNestedOneWithoutRepliesInput } from '../actor/actor-create-nested-one-without-replies.input';

@InputType()
export class ReplyCreateWithoutQuickReplyInput {

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => String, {nullable:true})
    reply?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FileCreateNestedOneWithoutReplyInput, {nullable:true})
    file?: FileCreateNestedOneWithoutReplyInput;

    @Field(() => SectionCreateNestedOneWithoutRepliesInput, {nullable:true})
    section?: SectionCreateNestedOneWithoutRepliesInput;

    @Field(() => ActorCreateNestedOneWithoutRepliesInput, {nullable:true})
    user?: ActorCreateNestedOneWithoutRepliesInput;
}
