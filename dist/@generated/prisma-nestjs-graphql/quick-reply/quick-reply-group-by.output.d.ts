import { TypeReply } from '../prisma/type-reply.enum';
import { QuickReplyCountAggregate } from './quick-reply-count-aggregate.output';
import { QuickReplyAvgAggregate } from './quick-reply-avg-aggregate.output';
import { QuickReplySumAggregate } from './quick-reply-sum-aggregate.output';
import { QuickReplyMinAggregate } from './quick-reply-min-aggregate.output';
import { QuickReplyMaxAggregate } from './quick-reply-max-aggregate.output';
export declare class QuickReplyGroupBy {
    id: number;
    keepIt: boolean;
    type: keyof typeof TypeReply;
    _count?: QuickReplyCountAggregate;
    _avg?: QuickReplyAvgAggregate;
    _sum?: QuickReplySumAggregate;
    _min?: QuickReplyMinAggregate;
    _max?: QuickReplyMaxAggregate;
}
