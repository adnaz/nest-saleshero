import { ActorCountAggregate } from './actor-count-aggregate.output';
import { ActorAvgAggregate } from './actor-avg-aggregate.output';
import { ActorSumAggregate } from './actor-sum-aggregate.output';
import { ActorMinAggregate } from './actor-min-aggregate.output';
import { ActorMaxAggregate } from './actor-max-aggregate.output';
export declare class AggregateActor {
    _count?: ActorCountAggregate;
    _avg?: ActorAvgAggregate;
    _sum?: ActorSumAggregate;
    _min?: ActorMinAggregate;
    _max?: ActorMaxAggregate;
}
