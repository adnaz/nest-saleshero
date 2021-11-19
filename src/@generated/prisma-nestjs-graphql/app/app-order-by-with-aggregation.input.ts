import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AppCountOrderByAggregateInput } from './app-count-order-by-aggregate.input';
import { AppAvgOrderByAggregateInput } from './app-avg-order-by-aggregate.input';
import { AppMaxOrderByAggregateInput } from './app-max-order-by-aggregate.input';
import { AppMinOrderByAggregateInput } from './app-min-order-by-aggregate.input';
import { AppSumOrderByAggregateInput } from './app-sum-order-by-aggregate.input';

@InputType()
export class AppOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => AppCountOrderByAggregateInput, {nullable:true})
    _count?: AppCountOrderByAggregateInput;

    @Field(() => AppAvgOrderByAggregateInput, {nullable:true})
    _avg?: AppAvgOrderByAggregateInput;

    @Field(() => AppMaxOrderByAggregateInput, {nullable:true})
    _max?: AppMaxOrderByAggregateInput;

    @Field(() => AppMinOrderByAggregateInput, {nullable:true})
    _min?: AppMinOrderByAggregateInput;

    @Field(() => AppSumOrderByAggregateInput, {nullable:true})
    _sum?: AppSumOrderByAggregateInput;
}
