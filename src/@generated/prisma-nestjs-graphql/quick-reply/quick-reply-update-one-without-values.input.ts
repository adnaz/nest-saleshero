import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyCreateWithoutValuesInput } from './quick-reply-create-without-values.input';
import { QuickReplyCreateOrConnectWithoutValuesInput } from './quick-reply-create-or-connect-without-values.input';
import { QuickReplyUpsertWithoutValuesInput } from './quick-reply-upsert-without-values.input';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';
import { QuickReplyUpdateWithoutValuesInput } from './quick-reply-update-without-values.input';

@InputType()
export class QuickReplyUpdateOneWithoutValuesInput {

    @Field(() => QuickReplyCreateWithoutValuesInput, {nullable:true})
    create?: QuickReplyCreateWithoutValuesInput;

    @Field(() => QuickReplyCreateOrConnectWithoutValuesInput, {nullable:true})
    connectOrCreate?: QuickReplyCreateOrConnectWithoutValuesInput;

    @Field(() => QuickReplyUpsertWithoutValuesInput, {nullable:true})
    upsert?: QuickReplyUpsertWithoutValuesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => QuickReplyWhereUniqueInput, {nullable:true})
    connect?: QuickReplyWhereUniqueInput;

    @Field(() => QuickReplyUpdateWithoutValuesInput, {nullable:true})
    update?: QuickReplyUpdateWithoutValuesInput;
}
