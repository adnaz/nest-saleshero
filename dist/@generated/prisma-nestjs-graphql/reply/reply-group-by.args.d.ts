import { ReplyWhereInput } from './reply-where.input';
import { ReplyOrderByWithAggregationInput } from './reply-order-by-with-aggregation.input';
import { ReplyScalarFieldEnum } from './reply-scalar-field.enum';
import { ReplyScalarWhereWithAggregatesInput } from './reply-scalar-where-with-aggregates.input';
import { ReplyCountAggregateInput } from './reply-count-aggregate.input';
import { ReplyAvgAggregateInput } from './reply-avg-aggregate.input';
import { ReplySumAggregateInput } from './reply-sum-aggregate.input';
import { ReplyMinAggregateInput } from './reply-min-aggregate.input';
import { ReplyMaxAggregateInput } from './reply-max-aggregate.input';
export declare class ReplyGroupByArgs {
    where?: ReplyWhereInput;
    orderBy?: Array<ReplyOrderByWithAggregationInput>;
    by: Array<keyof typeof ReplyScalarFieldEnum>;
    having?: ReplyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReplyCountAggregateInput;
    _avg?: ReplyAvgAggregateInput;
    _sum?: ReplySumAggregateInput;
    _min?: ReplyMinAggregateInput;
    _max?: ReplyMaxAggregateInput;
}
