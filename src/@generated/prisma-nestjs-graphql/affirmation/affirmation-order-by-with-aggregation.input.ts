import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AffirmationCountOrderByAggregateInput } from './affirmation-count-order-by-aggregate.input';
import { AffirmationAvgOrderByAggregateInput } from './affirmation-avg-order-by-aggregate.input';
import { AffirmationMaxOrderByAggregateInput } from './affirmation-max-order-by-aggregate.input';
import { AffirmationMinOrderByAggregateInput } from './affirmation-min-order-by-aggregate.input';
import { AffirmationSumOrderByAggregateInput } from './affirmation-sum-order-by-aggregate.input';

@InputType()
export class AffirmationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => AffirmationCountOrderByAggregateInput, {nullable:true})
    _count?: AffirmationCountOrderByAggregateInput;

    @Field(() => AffirmationAvgOrderByAggregateInput, {nullable:true})
    _avg?: AffirmationAvgOrderByAggregateInput;

    @Field(() => AffirmationMaxOrderByAggregateInput, {nullable:true})
    _max?: AffirmationMaxOrderByAggregateInput;

    @Field(() => AffirmationMinOrderByAggregateInput, {nullable:true})
    _min?: AffirmationMinOrderByAggregateInput;

    @Field(() => AffirmationSumOrderByAggregateInput, {nullable:true})
    _sum?: AffirmationSumOrderByAggregateInput;
}
