import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SectionCountOrderByAggregateInput } from './section-count-order-by-aggregate.input';
import { SectionAvgOrderByAggregateInput } from './section-avg-order-by-aggregate.input';
import { SectionMaxOrderByAggregateInput } from './section-max-order-by-aggregate.input';
import { SectionMinOrderByAggregateInput } from './section-min-order-by-aggregate.input';
import { SectionSumOrderByAggregateInput } from './section-sum-order-by-aggregate.input';

@InputType()
export class SectionOrderByWithAggregationInput {

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
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SectionCountOrderByAggregateInput, {nullable:true})
    _count?: SectionCountOrderByAggregateInput;

    @Field(() => SectionAvgOrderByAggregateInput, {nullable:true})
    _avg?: SectionAvgOrderByAggregateInput;

    @Field(() => SectionMaxOrderByAggregateInput, {nullable:true})
    _max?: SectionMaxOrderByAggregateInput;

    @Field(() => SectionMinOrderByAggregateInput, {nullable:true})
    _min?: SectionMinOrderByAggregateInput;

    @Field(() => SectionSumOrderByAggregateInput, {nullable:true})
    _sum?: SectionSumOrderByAggregateInput;
}
