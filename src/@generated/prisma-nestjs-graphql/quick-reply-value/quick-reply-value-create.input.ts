import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyCreateNestedOneWithoutValuesInput } from '../quick-reply/quick-reply-create-nested-one-without-values.input';

@InputType()
export class QuickReplyValueCreateInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    value?: string;

    @Field(() => QuickReplyCreateNestedOneWithoutValuesInput, {nullable:true})
    quickReply?: QuickReplyCreateNestedOneWithoutValuesInput;
}
