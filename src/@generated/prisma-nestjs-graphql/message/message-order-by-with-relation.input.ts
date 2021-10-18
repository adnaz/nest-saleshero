import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CourseOrderByWithRelationInput } from '../course/course-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MessageOrderByWithRelationInput {

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

    @Field(() => CourseOrderByWithRelationInput, {nullable:true})
    course?: CourseOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    courseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @HideField()
    author?: UserOrderByWithRelationInput;

    @HideField()
    authorId?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;
}
