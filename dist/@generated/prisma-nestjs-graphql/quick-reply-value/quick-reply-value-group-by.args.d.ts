import { QuickReplyValueWhereInput } from './quick-reply-value-where.input';
import { QuickReplyValueOrderByWithAggregationInput } from './quick-reply-value-order-by-with-aggregation.input';
import { QuickReplyValueScalarFieldEnum } from './quick-reply-value-scalar-field.enum';
import { QuickReplyValueScalarWhereWithAggregatesInput } from './quick-reply-value-scalar-where-with-aggregates.input';
import { QuickReplyValueCountAggregateInput } from './quick-reply-value-count-aggregate.input';
import { QuickReplyValueAvgAggregateInput } from './quick-reply-value-avg-aggregate.input';
import { QuickReplyValueSumAggregateInput } from './quick-reply-value-sum-aggregate.input';
import { QuickReplyValueMinAggregateInput } from './quick-reply-value-min-aggregate.input';
import { QuickReplyValueMaxAggregateInput } from './quick-reply-value-max-aggregate.input';
export declare class QuickReplyValueGroupByArgs {
    where?: QuickReplyValueWhereInput;
    orderBy?: Array<QuickReplyValueOrderByWithAggregationInput>;
    by: Array<keyof typeof QuickReplyValueScalarFieldEnum>;
    having?: QuickReplyValueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuickReplyValueCountAggregateInput;
    _avg?: QuickReplyValueAvgAggregateInput;
    _sum?: QuickReplyValueSumAggregateInput;
    _min?: QuickReplyValueMinAggregateInput;
    _max?: QuickReplyValueMaxAggregateInput;
}
