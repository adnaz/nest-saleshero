import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { MessageCountOrderByAggregateInput } from './message-count-order-by-aggregate.input';
import { MessageAvgOrderByAggregateInput } from './message-avg-order-by-aggregate.input';
import { MessageMaxOrderByAggregateInput } from './message-max-order-by-aggregate.input';
import { MessageMinOrderByAggregateInput } from './message-min-order-by-aggregate.input';
import { MessageSumOrderByAggregateInput } from './message-sum-order-by-aggregate.input';

@InputType()
export class MessageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @HideField()
    authorId?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MessageCountOrderByAggregateInput, {nullable:true})
    _count?: MessageCountOrderByAggregateInput;

    @Field(() => MessageAvgOrderByAggregateInput, {nullable:true})
    _avg?: MessageAvgOrderByAggregateInput;

    @Field(() => MessageMaxOrderByAggregateInput, {nullable:true})
    _max?: MessageMaxOrderByAggregateInput;

    @Field(() => MessageMinOrderByAggregateInput, {nullable:true})
    _min?: MessageMinOrderByAggregateInput;

    @Field(() => MessageSumOrderByAggregateInput, {nullable:true})
    _sum?: MessageSumOrderByAggregateInput;
}
