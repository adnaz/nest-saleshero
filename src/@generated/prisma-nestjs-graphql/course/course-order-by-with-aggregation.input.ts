import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { CourseCountOrderByAggregateInput } from './course-count-order-by-aggregate.input';
import { CourseAvgOrderByAggregateInput } from './course-avg-order-by-aggregate.input';
import { CourseMaxOrderByAggregateInput } from './course-max-order-by-aggregate.input';
import { CourseMinOrderByAggregateInput } from './course-min-order-by-aggregate.input';
import { CourseSumOrderByAggregateInput } from './course-sum-order-by-aggregate.input';

@InputType()
export class CourseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    audioId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @HideField()
    authorId?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CourseCountOrderByAggregateInput, {nullable:true})
    _count?: CourseCountOrderByAggregateInput;

    @Field(() => CourseAvgOrderByAggregateInput, {nullable:true})
    _avg?: CourseAvgOrderByAggregateInput;

    @Field(() => CourseMaxOrderByAggregateInput, {nullable:true})
    _max?: CourseMaxOrderByAggregateInput;

    @Field(() => CourseMinOrderByAggregateInput, {nullable:true})
    _min?: CourseMinOrderByAggregateInput;

    @Field(() => CourseSumOrderByAggregateInput, {nullable:true})
    _sum?: CourseSumOrderByAggregateInput;
}
