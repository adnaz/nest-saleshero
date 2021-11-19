import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class ReplyScalarWhereInput {
    AND?: Array<ReplyScalarWhereInput>;
    OR?: Array<ReplyScalarWhereInput>;
    NOT?: Array<ReplyScalarWhereInput>;
    id?: IntFilter;
    fileId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    sectionId?: IntFilter;
    actorId?: IntNullableFilter;
    quickRepliesId?: IntNullableFilter;
}
