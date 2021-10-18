import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';
import { QuickReplyCreateWithoutValuesInput } from './quick-reply-create-without-values.input';

@InputType()
export class QuickReplyCreateOrConnectWithoutValuesInput {

    @Field(() => QuickReplyWhereUniqueInput, {nullable:false})
    where!: QuickReplyWhereUniqueInput;

    @Field(() => QuickReplyCreateWithoutValuesInput, {nullable:false})
    create!: QuickReplyCreateWithoutValuesInput;
}
