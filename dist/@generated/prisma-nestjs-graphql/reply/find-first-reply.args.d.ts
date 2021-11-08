import { ReplyWhereInput } from './reply-where.input';
import { ReplyOrderByWithRelationInput } from './reply-order-by-with-relation.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyScalarFieldEnum } from './reply-scalar-field.enum';
export declare class FindFirstReplyArgs {
    where?: ReplyWhereInput;
    orderBy?: Array<ReplyOrderByWithRelationInput>;
    cursor?: ReplyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ReplyScalarFieldEnum>;
}
