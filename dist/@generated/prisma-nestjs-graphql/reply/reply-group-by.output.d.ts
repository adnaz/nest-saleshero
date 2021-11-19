import { ReplyCountAggregate } from './reply-count-aggregate.output';
import { ReplyAvgAggregate } from './reply-avg-aggregate.output';
import { ReplySumAggregate } from './reply-sum-aggregate.output';
import { ReplyMinAggregate } from './reply-min-aggregate.output';
import { ReplyMaxAggregate } from './reply-max-aggregate.output';
export declare class ReplyGroupBy {
    id: number;
    fileId?: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    sectionId: number;
    actorId?: number;
    quickRepliesId?: number;
    _count?: ReplyCountAggregate;
    _avg?: ReplyAvgAggregate;
    _sum?: ReplySumAggregate;
    _min?: ReplyMinAggregate;
    _max?: ReplyMaxAggregate;
}
