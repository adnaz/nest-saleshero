import { QuickReplyValueWhereInput } from './quick-reply-value-where.input';
import { QuickReplyValueOrderByWithRelationInput } from './quick-reply-value-order-by-with-relation.input';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';
import { QuickReplyValueCountAggregateInput } from './quick-reply-value-count-aggregate.input';
import { QuickReplyValueAvgAggregateInput } from './quick-reply-value-avg-aggregate.input';
import { QuickReplyValueSumAggregateInput } from './quick-reply-value-sum-aggregate.input';
import { QuickReplyValueMinAggregateInput } from './quick-reply-value-min-aggregate.input';
import { QuickReplyValueMaxAggregateInput } from './quick-reply-value-max-aggregate.input';
export declare class QuickReplyValueAggregateArgs {
    where?: QuickReplyValueWhereInput;
    orderBy?: Array<QuickReplyValueOrderByWithRelationInput>;
    cursor?: QuickReplyValueWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: QuickReplyValueCountAggregateInput;
    _avg?: QuickReplyValueAvgAggregateInput;
    _sum?: QuickReplyValueSumAggregateInput;
    _min?: QuickReplyValueMinAggregateInput;
    _max?: QuickReplyValueMaxAggregateInput;
}
