import { QuickReplyWhereInput } from './quick-reply-where.input';
import { QuickReplyOrderByWithRelationInput } from './quick-reply-order-by-with-relation.input';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';
import { QuickReplyScalarFieldEnum } from './quick-reply-scalar-field.enum';
export declare class FindManyQuickReplyArgs {
    where?: QuickReplyWhereInput;
    orderBy?: Array<QuickReplyOrderByWithRelationInput>;
    cursor?: QuickReplyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof QuickReplyScalarFieldEnum>;
}
