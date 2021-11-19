import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuickReplyOrderByWithRelationInput } from '../quick-reply/quick-reply-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class QuickReplyValueOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @HideField()
    quickReply?: QuickReplyOrderByWithRelationInput;

    @HideField()
    quickReplyId?: keyof typeof SortOrder;
}
