import { ReplyWhereInput } from './reply-where.input';
import { ReplyOrderByWithRelationInput } from './reply-order-by-with-relation.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyCountAggregateInput } from './reply-count-aggregate.input';
import { ReplyAvgAggregateInput } from './reply-avg-aggregate.input';
import { ReplySumAggregateInput } from './reply-sum-aggregate.input';
import { ReplyMinAggregateInput } from './reply-min-aggregate.input';
import { ReplyMaxAggregateInput } from './reply-max-aggregate.input';
export declare class ReplyAggregateArgs {
    where?: ReplyWhereInput;
    orderBy?: Array<ReplyOrderByWithRelationInput>;
    cursor?: ReplyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: ReplyCountAggregateInput;
    _avg?: ReplyAvgAggregateInput;
    _sum?: ReplySumAggregateInput;
    _min?: ReplyMinAggregateInput;
    _max?: ReplyMaxAggregateInput;
}
