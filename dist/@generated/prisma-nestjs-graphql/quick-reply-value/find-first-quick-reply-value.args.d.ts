import { QuickReplyValueWhereInput } from './quick-reply-value-where.input';
import { QuickReplyValueOrderByWithRelationInput } from './quick-reply-value-order-by-with-relation.input';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';
import { QuickReplyValueScalarFieldEnum } from './quick-reply-value-scalar-field.enum';
export declare class FindFirstQuickReplyValueArgs {
    where?: QuickReplyValueWhereInput;
    orderBy?: Array<QuickReplyValueOrderByWithRelationInput>;
    cursor?: QuickReplyValueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof QuickReplyValueScalarFieldEnum>;
}
