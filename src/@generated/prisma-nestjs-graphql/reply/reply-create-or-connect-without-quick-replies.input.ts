import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyCreateWithoutQuickRepliesInput } from './reply-create-without-quick-replies.input';

@InputType()
export class ReplyCreateOrConnectWithoutQuickRepliesInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyCreateWithoutQuickRepliesInput, {nullable:false})
    create!: ReplyCreateWithoutQuickRepliesInput;
}
