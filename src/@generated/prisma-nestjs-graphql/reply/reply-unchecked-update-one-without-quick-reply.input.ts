import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutQuickReplyInput } from './reply-create-without-quick-reply.input';
import { ReplyCreateOrConnectWithoutQuickReplyInput } from './reply-create-or-connect-without-quick-reply.input';
import { ReplyUpsertWithoutQuickReplyInput } from './reply-upsert-without-quick-reply.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithoutQuickReplyInput } from './reply-update-without-quick-reply.input';

@InputType()
export class ReplyUncheckedUpdateOneWithoutQuickReplyInput {

    @Field(() => ReplyCreateWithoutQuickReplyInput, {nullable:true})
    create?: ReplyCreateWithoutQuickReplyInput;

    @Field(() => ReplyCreateOrConnectWithoutQuickReplyInput, {nullable:true})
    connectOrCreate?: ReplyCreateOrConnectWithoutQuickReplyInput;

    @Field(() => ReplyUpsertWithoutQuickReplyInput, {nullable:true})
    upsert?: ReplyUpsertWithoutQuickReplyInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ReplyWhereUniqueInput, {nullable:true})
    connect?: ReplyWhereUniqueInput;

    @Field(() => ReplyUpdateWithoutQuickReplyInput, {nullable:true})
    update?: ReplyUpdateWithoutQuickReplyInput;
}
