import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';
import { SectionOrderByWithRelationInput } from '../section/section-order-by-with-relation.input';
import { ActorOrderByWithRelationInput } from '../actor/actor-order-by-with-relation.input';
import { QuickReplyOrderByWithRelationInput } from '../quick-reply/quick-reply-order-by-with-relation.input';

@InputType()
export class ReplyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => FileOrderByWithRelationInput, {nullable:true})
    file?: FileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    fileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reply?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SectionOrderByWithRelationInput, {nullable:true})
    section?: SectionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    sectionId?: keyof typeof SortOrder;

    @Field(() => ActorOrderByWithRelationInput, {nullable:true})
    user?: ActorOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    actorId?: keyof typeof SortOrder;

    @Field(() => QuickReplyOrderByWithRelationInput, {nullable:true})
    quickReply?: QuickReplyOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    quickReplyId?: keyof typeof SortOrder;
}
