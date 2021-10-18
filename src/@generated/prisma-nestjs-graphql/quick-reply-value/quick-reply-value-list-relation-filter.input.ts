import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyValueWhereInput } from './quick-reply-value-where.input';

@InputType()
export class QuickReplyValueListRelationFilter {

    @Field(() => QuickReplyValueWhereInput, {nullable:true})
    every?: QuickReplyValueWhereInput;

    @Field(() => QuickReplyValueWhereInput, {nullable:true})
    some?: QuickReplyValueWhereInput;

    @Field(() => QuickReplyValueWhereInput, {nullable:true})
    none?: QuickReplyValueWhereInput;
}
