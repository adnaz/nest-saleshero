import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuickReplyOrderByWithRelationInput } from '../quick-reply/quick-reply-order-by-with-relation.input';

@InputType()
export class QuickReplyValueOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => QuickReplyOrderByWithRelationInput, {nullable:true})
    quickReply?: QuickReplyOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    quickReplyId?: keyof typeof SortOrder;
}
