import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutQuickRepliesInput } from './reply-create-without-quick-replies.input';
import { ReplyCreateOrConnectWithoutQuickRepliesInput } from './reply-create-or-connect-without-quick-replies.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@InputType()
export class ReplyUncheckedCreateNestedOneWithoutQuickRepliesInput {

    @Field(() => ReplyCreateWithoutQuickRepliesInput, {nullable:true})
    create?: ReplyCreateWithoutQuickRepliesInput;

    @Field(() => ReplyCreateOrConnectWithoutQuickRepliesInput, {nullable:true})
    connectOrCreate?: ReplyCreateOrConnectWithoutQuickRepliesInput;

    @Field(() => ReplyWhereUniqueInput, {nullable:true})
    connect?: ReplyWhereUniqueInput;
}
