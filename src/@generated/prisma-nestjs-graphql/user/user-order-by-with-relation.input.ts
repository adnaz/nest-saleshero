import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AppOrderByRelationAggregateInput } from '../app/app-order-by-relation-aggregate.input';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { CourseOrderByRelationAggregateInput } from '../course/course-order-by-relation-aggregate.input';
import { SectionOrderByRelationAggregateInput } from '../section/section-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => AppOrderByRelationAggregateInput, {nullable:true})
    apps?: AppOrderByRelationAggregateInput;

    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: PostOrderByRelationAggregateInput;

    @Field(() => CourseOrderByRelationAggregateInput, {nullable:true})
    courses?: CourseOrderByRelationAggregateInput;

    @Field(() => SectionOrderByRelationAggregateInput, {nullable:true})
    sections?: SectionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
