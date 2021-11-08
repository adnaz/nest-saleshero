import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ActorRelationFilter } from '../actor/actor-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
export declare class ReplyWhereInput {
    AND?: Array<ReplyWhereInput>;
    OR?: Array<ReplyWhereInput>;
    NOT?: Array<ReplyWhereInput>;
    id?: IntFilter;
    text?: StringNullableFilter;
    audio?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    user?: ActorRelationFilter;
    userId?: IntNullableFilter;
}
