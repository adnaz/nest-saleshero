import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyCreateNestedOneWithoutValuesInput } from '../quick-reply/quick-reply-create-nested-one-without-values.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class QuickReplyValueCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @HideField()
    quickReply?: QuickReplyCreateNestedOneWithoutValuesInput;
}
