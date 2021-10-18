import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumTypeReplyFilter } from '../prisma/enum-type-reply-filter.input';
import { QuickReplyValueListRelationFilter } from '../quick-reply-value/quick-reply-value-list-relation-filter.input';

@InputType()
export class QuickReplyWhereInput {

    @Field(() => [QuickReplyWhereInput], {nullable:true})
    AND?: Array<QuickReplyWhereInput>;

    @Field(() => [QuickReplyWhereInput], {nullable:true})
    OR?: Array<QuickReplyWhereInput>;

    @Field(() => [QuickReplyWhereInput], {nullable:true})
    NOT?: Array<QuickReplyWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => EnumTypeReplyFilter, {nullable:true})
    type?: EnumTypeReplyFilter;

    @Field(() => QuickReplyValueListRelationFilter, {nullable:true})
    values?: QuickReplyValueListRelationFilter;
}
