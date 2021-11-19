import { QuickReplyValueCountAggregate } from './quick-reply-value-count-aggregate.output';
import { QuickReplyValueAvgAggregate } from './quick-reply-value-avg-aggregate.output';
import { QuickReplyValueSumAggregate } from './quick-reply-value-sum-aggregate.output';
import { QuickReplyValueMinAggregate } from './quick-reply-value-min-aggregate.output';
import { QuickReplyValueMaxAggregate } from './quick-reply-value-max-aggregate.output';
export declare class QuickReplyValueGroupBy {
    id: number;
    title: string;
    value: string;
    quickReplyId?: number;
    _count?: QuickReplyValueCountAggregate;
    _avg?: QuickReplyValueAvgAggregate;
    _sum?: QuickReplyValueSumAggregate;
    _min?: QuickReplyValueMinAggregate;
    _max?: QuickReplyValueMaxAggregate;
}
