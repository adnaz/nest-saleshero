import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CourseSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    audioId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageId?: keyof typeof SortOrder;

    @HideField()
    authorId?: keyof typeof SortOrder;
}
