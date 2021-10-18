import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyCreateWithoutValuesInput } from './quick-reply-create-without-values.input';
import { QuickReplyCreateOrConnectWithoutValuesInput } from './quick-reply-create-or-connect-without-values.input';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';

@InputType()
export class QuickReplyCreateNestedOneWithoutValuesInput {

    @Field(() => QuickReplyCreateWithoutValuesInput, {nullable:true})
    create?: QuickReplyCreateWithoutValuesInput;

    @Field(() => QuickReplyCreateOrConnectWithoutValuesInput, {nullable:true})
    connectOrCreate?: QuickReplyCreateOrConnectWithoutValuesInput;

    @Field(() => QuickReplyWhereUniqueInput, {nullable:true})
    connect?: QuickReplyWhereUniqueInput;
}
