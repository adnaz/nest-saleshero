import { AppWhereInput } from './app-where.input';
import { AppOrderByWithRelationInput } from './app-order-by-with-relation.input';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppCountAggregateInput } from './app-count-aggregate.input';
import { AppAvgAggregateInput } from './app-avg-aggregate.input';
import { AppSumAggregateInput } from './app-sum-aggregate.input';
import { AppMinAggregateInput } from './app-min-aggregate.input';
import { AppMaxAggregateInput } from './app-max-aggregate.input';
export declare class AppAggregateArgs {
    where?: AppWhereInput;
    orderBy?: Array<AppOrderByWithRelationInput>;
    cursor?: AppWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: AppCountAggregateInput;
    _avg?: AppAvgAggregateInput;
    _sum?: AppSumAggregateInput;
    _min?: AppMinAggregateInput;
    _max?: AppMaxAggregateInput;
}
