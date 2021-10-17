import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActorCountOrderByAggregateInput } from './actor-count-order-by-aggregate.input';
import { ActorAvgOrderByAggregateInput } from './actor-avg-order-by-aggregate.input';
import { ActorMaxOrderByAggregateInput } from './actor-max-order-by-aggregate.input';
import { ActorMinOrderByAggregateInput } from './actor-min-order-by-aggregate.input';
import { ActorSumOrderByAggregateInput } from './actor-sum-order-by-aggregate.input';

@InputType()
export class ActorOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ActorCountOrderByAggregateInput, {nullable:true})
    _count?: ActorCountOrderByAggregateInput;

    @Field(() => ActorAvgOrderByAggregateInput, {nullable:true})
    _avg?: ActorAvgOrderByAggregateInput;

    @Field(() => ActorMaxOrderByAggregateInput, {nullable:true})
    _max?: ActorMaxOrderByAggregateInput;

    @Field(() => ActorMinOrderByAggregateInput, {nullable:true})
    _min?: ActorMinOrderByAggregateInput;

    @Field(() => ActorSumOrderByAggregateInput, {nullable:true})
    _sum?: ActorSumOrderByAggregateInput;
}
