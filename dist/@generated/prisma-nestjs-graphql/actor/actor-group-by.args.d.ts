import { ActorWhereInput } from './actor-where.input';
import { ActorOrderByWithAggregationInput } from './actor-order-by-with-aggregation.input';
import { ActorScalarFieldEnum } from './actor-scalar-field.enum';
import { ActorScalarWhereWithAggregatesInput } from './actor-scalar-where-with-aggregates.input';
import { ActorCountAggregateInput } from './actor-count-aggregate.input';
import { ActorAvgAggregateInput } from './actor-avg-aggregate.input';
import { ActorSumAggregateInput } from './actor-sum-aggregate.input';
import { ActorMinAggregateInput } from './actor-min-aggregate.input';
import { ActorMaxAggregateInput } from './actor-max-aggregate.input';
export declare class ActorGroupByArgs {
    where?: ActorWhereInput;
    orderBy?: Array<ActorOrderByWithAggregationInput>;
    by: Array<keyof typeof ActorScalarFieldEnum>;
    having?: ActorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActorCountAggregateInput;
    _avg?: ActorAvgAggregateInput;
    _sum?: ActorSumAggregateInput;
    _min?: ActorMinAggregateInput;
    _max?: ActorMaxAggregateInput;
}
