import { AppWhereInput } from './app-where.input';
import { AppOrderByWithAggregationInput } from './app-order-by-with-aggregation.input';
import { AppScalarFieldEnum } from './app-scalar-field.enum';
import { AppScalarWhereWithAggregatesInput } from './app-scalar-where-with-aggregates.input';
import { AppCountAggregateInput } from './app-count-aggregate.input';
import { AppAvgAggregateInput } from './app-avg-aggregate.input';
import { AppSumAggregateInput } from './app-sum-aggregate.input';
import { AppMinAggregateInput } from './app-min-aggregate.input';
import { AppMaxAggregateInput } from './app-max-aggregate.input';
export declare class AppGroupByArgs {
    where?: AppWhereInput;
    orderBy?: Array<AppOrderByWithAggregationInput>;
    by: Array<keyof typeof AppScalarFieldEnum>;
    having?: AppScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppCountAggregateInput;
    _avg?: AppAvgAggregateInput;
    _sum?: AppSumAggregateInput;
    _min?: AppMinAggregateInput;
    _max?: AppMaxAggregateInput;
}
