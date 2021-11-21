import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReplyOrderByWithRelationInput } from '../reply/reply-order-by-with-relation.input';
import { QuickReplyValueOrderByRelationAggregateInput } from '../quick-reply-value/quick-reply-value-order-by-relation-aggregate.input';

@InputType()
export class QuickReplyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ReplyOrderByWithRelationInput, {nullable:true})
    reply?: ReplyOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    keepIt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => QuickReplyValueOrderByRelationAggregateInput, {nullable:true})
    values?: QuickReplyValueOrderByRelationAggregateInput;
}
