import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';
import { SectionOrderByRelationAggregateInput } from '../section/section-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class CourseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => FileOrderByWithRelationInput, {nullable:true})
    audio?: FileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    audioId?: keyof typeof SortOrder;

    @Field(() => FileOrderByWithRelationInput, {nullable:true})
    image?: FileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    imageId?: keyof typeof SortOrder;

    @Field(() => SectionOrderByRelationAggregateInput, {nullable:true})
    sections?: SectionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
