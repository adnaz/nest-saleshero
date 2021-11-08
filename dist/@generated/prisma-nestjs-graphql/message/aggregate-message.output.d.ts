import { MessageCountAggregate } from './message-count-aggregate.output';
import { MessageAvgAggregate } from './message-avg-aggregate.output';
import { MessageSumAggregate } from './message-sum-aggregate.output';
import { MessageMinAggregate } from './message-min-aggregate.output';
import { MessageMaxAggregate } from './message-max-aggregate.output';
export declare class AggregateMessage {
    _count?: MessageCountAggregate;
    _avg?: MessageAvgAggregate;
    _sum?: MessageSumAggregate;
    _min?: MessageMinAggregate;
    _max?: MessageMaxAggregate;
}
