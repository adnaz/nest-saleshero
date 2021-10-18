import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyValueWhereInput } from './quick-reply-value-where.input';
import { QuickReplyValueOrderByWithRelationInput } from './quick-reply-value-order-by-with-relation.input';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';
import { Int } from '@nestjs/graphql';
import { QuickReplyValueScalarFieldEnum } from './quick-reply-value-scalar-field.enum';

@ArgsType()
export class FindFirstQuickReplyValueArgs {

    @Field(() => QuickReplyValueWhereInput, {nullable:true})
    where?: QuickReplyValueWhereInput;

    @Field(() => [QuickReplyValueOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuickReplyValueOrderByWithRelationInput>;

    @Field(() => QuickReplyValueWhereUniqueInput, {nullable:true})
    cursor?: QuickReplyValueWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [QuickReplyValueScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof QuickReplyValueScalarFieldEnum>;
}
