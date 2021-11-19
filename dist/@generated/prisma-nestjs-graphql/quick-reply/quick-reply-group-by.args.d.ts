import { QuickReplyWhereInput } from './quick-reply-where.input';
import { QuickReplyOrderByWithAggregationInput } from './quick-reply-order-by-with-aggregation.input';
import { QuickReplyScalarFieldEnum } from './quick-reply-scalar-field.enum';
import { QuickReplyScalarWhereWithAggregatesInput } from './quick-reply-scalar-where-with-aggregates.input';
import { QuickReplyCountAggregateInput } from './quick-reply-count-aggregate.input';
import { QuickReplyAvgAggregateInput } from './quick-reply-avg-aggregate.input';
import { QuickReplySumAggregateInput } from './quick-reply-sum-aggregate.input';
import { QuickReplyMinAggregateInput } from './quick-reply-min-aggregate.input';
import { QuickReplyMaxAggregateInput } from './quick-reply-max-aggregate.input';
export declare class QuickReplyGroupByArgs {
    where?: QuickReplyWhereInput;
    orderBy?: Array<QuickReplyOrderByWithAggregationInput>;
    by: Array<keyof typeof QuickReplyScalarFieldEnum>;
    having?: QuickReplyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuickReplyCountAggregateInput;
    _avg?: QuickReplyAvgAggregateInput;
    _sum?: QuickReplySumAggregateInput;
    _min?: QuickReplyMinAggregateInput;
    _max?: QuickReplyMaxAggregateInput;
}
