import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutQuickReplyInput } from './reply-create-without-quick-reply.input';
import { ReplyCreateOrConnectWithoutQuickReplyInput } from './reply-create-or-connect-without-quick-reply.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@InputType()
export class ReplyUncheckedCreateNestedOneWithoutQuickReplyInput {

    @Field(() => ReplyCreateWithoutQuickReplyInput, {nullable:true})
    create?: ReplyCreateWithoutQuickReplyInput;

    @Field(() => ReplyCreateOrConnectWithoutQuickReplyInput, {nullable:true})
    connectOrCreate?: ReplyCreateOrConnectWithoutQuickReplyInput;

    @Field(() => ReplyWhereUniqueInput, {nullable:true})
    connect?: ReplyWhereUniqueInput;
}
