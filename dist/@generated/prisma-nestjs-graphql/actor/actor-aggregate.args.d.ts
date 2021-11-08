import { ActorWhereInput } from './actor-where.input';
import { ActorOrderByWithRelationInput } from './actor-order-by-with-relation.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorCountAggregateInput } from './actor-count-aggregate.input';
import { ActorAvgAggregateInput } from './actor-avg-aggregate.input';
import { ActorSumAggregateInput } from './actor-sum-aggregate.input';
import { ActorMinAggregateInput } from './actor-min-aggregate.input';
import { ActorMaxAggregateInput } from './actor-max-aggregate.input';
export declare class ActorAggregateArgs {
    where?: ActorWhereInput;
    orderBy?: Array<ActorOrderByWithRelationInput>;
    cursor?: ActorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: ActorCountAggregateInput;
    _avg?: ActorAvgAggregateInput;
    _sum?: ActorSumAggregateInput;
    _min?: ActorMinAggregateInput;
    _max?: ActorMaxAggregateInput;
}
