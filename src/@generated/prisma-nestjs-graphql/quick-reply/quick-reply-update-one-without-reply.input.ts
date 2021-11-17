import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyCreateWithoutReplyInput } from './quick-reply-create-without-reply.input';
import { QuickReplyCreateOrConnectWithoutReplyInput } from './quick-reply-create-or-connect-without-reply.input';
import { QuickReplyUpsertWithoutReplyInput } from './quick-reply-upsert-without-reply.input';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';
import { QuickReplyUpdateWithoutReplyInput } from './quick-reply-update-without-reply.input';

@InputType()
export class QuickReplyUpdateOneWithoutReplyInput {

    @Field(() => QuickReplyCreateWithoutReplyInput, {nullable:true})
    create?: QuickReplyCreateWithoutReplyInput;

    @Field(() => QuickReplyCreateOrConnectWithoutReplyInput, {nullable:true})
    connectOrCreate?: QuickReplyCreateOrConnectWithoutReplyInput;

    @Field(() => QuickReplyUpsertWithoutReplyInput, {nullable:true})
    upsert?: QuickReplyUpsertWithoutReplyInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => QuickReplyWhereUniqueInput, {nullable:true})
    connect?: QuickReplyWhereUniqueInput;

    @Field(() => QuickReplyUpdateWithoutReplyInput, {nullable:true})
    update?: QuickReplyUpdateWithoutReplyInput;
}
