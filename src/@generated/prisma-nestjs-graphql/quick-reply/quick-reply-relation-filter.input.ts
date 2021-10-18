import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyWhereInput } from './quick-reply-where.input';

@InputType()
export class QuickReplyRelationFilter {

    @Field(() => QuickReplyWhereInput, {nullable:true})
    is?: QuickReplyWhereInput;

    @Field(() => QuickReplyWhereInput, {nullable:true})
    isNot?: QuickReplyWhereInput;
}
