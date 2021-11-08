import { QuickReplyWhereInput } from './quick-reply-where.input';
import { QuickReplyOrderByWithRelationInput } from './quick-reply-order-by-with-relation.input';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';
import { QuickReplyCountAggregateInput } from './quick-reply-count-aggregate.input';
import { QuickReplyAvgAggregateInput } from './quick-reply-avg-aggregate.input';
import { QuickReplySumAggregateInput } from './quick-reply-sum-aggregate.input';
import { QuickReplyMinAggregateInput } from './quick-reply-min-aggregate.input';
import { QuickReplyMaxAggregateInput } from './quick-reply-max-aggregate.input';
export declare class QuickReplyAggregateArgs {
    where?: QuickReplyWhereInput;
    orderBy?: Array<QuickReplyOrderByWithRelationInput>;
    cursor?: QuickReplyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: QuickReplyCountAggregateInput;
    _avg?: QuickReplyAvgAggregateInput;
    _sum?: QuickReplySumAggregateInput;
    _min?: QuickReplyMinAggregateInput;
    _max?: QuickReplyMaxAggregateInput;
}
