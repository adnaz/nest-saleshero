import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ReplyListRelationFilter } from '../reply/reply-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class ActorWhereInput {
    AND?: Array<ActorWhereInput>;
    OR?: Array<ActorWhereInput>;
    NOT?: Array<ActorWhereInput>;
    id?: IntFilter;
    name?: StringNullableFilter;
    avatar?: StringNullableFilter;
    replies?: ReplyListRelationFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}