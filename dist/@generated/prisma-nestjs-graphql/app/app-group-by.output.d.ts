import { AppCountAggregate } from './app-count-aggregate.output';
import { AppAvgAggregate } from './app-avg-aggregate.output';
import { AppSumAggregate } from './app-sum-aggregate.output';
import { AppMinAggregate } from './app-min-aggregate.output';
import { AppMaxAggregate } from './app-max-aggregate.output';
export declare class AppGroupBy {
    id: number;
    name?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: AppCountAggregate;
    _avg?: AppAvgAggregate;
    _sum?: AppSumAggregate;
    _min?: AppMinAggregate;
    _max?: AppMaxAggregate;
}
