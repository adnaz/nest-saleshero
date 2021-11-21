import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ReplyAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sectionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quickReplyId?: keyof typeof SortOrder;
}
