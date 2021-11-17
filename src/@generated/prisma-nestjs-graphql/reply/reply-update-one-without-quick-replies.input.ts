import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutQuickRepliesInput } from './reply-create-without-quick-replies.input';
import { ReplyCreateOrConnectWithoutQuickRepliesInput } from './reply-create-or-connect-without-quick-replies.input';
import { ReplyUpsertWithoutQuickRepliesInput } from './reply-upsert-without-quick-replies.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithoutQuickRepliesInput } from './reply-update-without-quick-replies.input';

@InputType()
export class ReplyUpdateOneWithoutQuickRepliesInput {

    @Field(() => ReplyCreateWithoutQuickRepliesInput, {nullable:true})
    create?: ReplyCreateWithoutQuickRepliesInput;

    @Field(() => ReplyCreateOrConnectWithoutQuickRepliesInput, {nullable:true})
    connectOrCreate?: ReplyCreateOrConnectWithoutQuickRepliesInput;

    @Field(() => ReplyUpsertWithoutQuickRepliesInput, {nullable:true})
    upsert?: ReplyUpsertWithoutQuickRepliesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ReplyWhereUniqueInput, {nullable:true})
    connect?: ReplyWhereUniqueInput;

    @Field(() => ReplyUpdateWithoutQuickRepliesInput, {nullable:true})
    update?: ReplyUpdateWithoutQuickRepliesInput;
}
