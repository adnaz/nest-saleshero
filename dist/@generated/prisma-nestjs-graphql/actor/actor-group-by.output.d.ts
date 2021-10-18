import { ActorCountAggregate } from './actor-count-aggregate.output';
import { ActorAvgAggregate } from './actor-avg-aggregate.output';
import { ActorSumAggregate } from './actor-sum-aggregate.output';
import { ActorMinAggregate } from './actor-min-aggregate.output';
import { ActorMaxAggregate } from './actor-max-aggregate.output';
export declare class ActorGroupBy {
    id: number;
    name?: string;
    avatar?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: ActorCountAggregate;
    _avg?: ActorAvgAggregate;
    _sum?: ActorSumAggregate;
    _min?: ActorMinAggregate;
    _max?: ActorMaxAggregate;
}
