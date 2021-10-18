import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyWhereInput } from './quick-reply-where.input';
import { QuickReplyOrderByWithRelationInput } from './quick-reply-order-by-with-relation.input';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';
import { Int } from '@nestjs/graphql';
import { QuickReplyScalarFieldEnum } from './quick-reply-scalar-field.enum';

@ArgsType()
export class FindFirstQuickReplyArgs {

    @Field(() => QuickReplyWhereInput, {nullable:true})
    where?: QuickReplyWhereInput;

    @Field(() => [QuickReplyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuickReplyOrderByWithRelationInput>;

    @Field(() => QuickReplyWhereUniqueInput, {nullable:true})
    cursor?: QuickReplyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [QuickReplyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof QuickReplyScalarFieldEnum>;
}
