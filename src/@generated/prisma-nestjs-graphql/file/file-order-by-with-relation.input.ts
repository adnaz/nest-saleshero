import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReplyOrderByWithRelationInput } from '../reply/reply-order-by-with-relation.input';
import { ActorOrderByWithRelationInput } from '../actor/actor-order-by-with-relation.input';
import { CourseOrderByWithRelationInput } from '../course/course-order-by-with-relation.input';
import { SectionOrderByWithRelationInput } from '../section/section-order-by-with-relation.input';

@InputType()
export class FileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bucket?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    etag?: keyof typeof SortOrder;

    @Field(() => ReplyOrderByWithRelationInput, {nullable:true})
    reply?: ReplyOrderByWithRelationInput;

    @Field(() => ActorOrderByWithRelationInput, {nullable:true})
    actor?: ActorOrderByWithRelationInput;

    @Field(() => CourseOrderByWithRelationInput, {nullable:true})
    courseImage?: CourseOrderByWithRelationInput;

    @Field(() => CourseOrderByWithRelationInput, {nullable:true})
    courseAudio?: CourseOrderByWithRelationInput;

    @Field(() => SectionOrderByWithRelationInput, {nullable:true})
    section?: SectionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
}
