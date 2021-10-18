import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
export declare class QuickReplyValueScalarWhereInput {
    AND?: Array<QuickReplyValueScalarWhereInput>;
    OR?: Array<QuickReplyValueScalarWhereInput>;
    NOT?: Array<QuickReplyValueScalarWhereInput>;
    id?: IntFilter;
    title?: StringFilter;
    value?: StringFilter;
    quickReplyId?: IntNullableFilter;
}
