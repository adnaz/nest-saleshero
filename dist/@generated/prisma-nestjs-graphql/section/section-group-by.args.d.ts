import { SectionWhereInput } from './section-where.input';
import { SectionOrderByWithAggregationInput } from './section-order-by-with-aggregation.input';
import { SectionScalarFieldEnum } from './section-scalar-field.enum';
import { SectionScalarWhereWithAggregatesInput } from './section-scalar-where-with-aggregates.input';
import { SectionCountAggregateInput } from './section-count-aggregate.input';
import { SectionAvgAggregateInput } from './section-avg-aggregate.input';
import { SectionSumAggregateInput } from './section-sum-aggregate.input';
import { SectionMinAggregateInput } from './section-min-aggregate.input';
import { SectionMaxAggregateInput } from './section-max-aggregate.input';
export declare class SectionGroupByArgs {
    where?: SectionWhereInput;
    orderBy?: Array<SectionOrderByWithAggregationInput>;
    by: Array<keyof typeof SectionScalarFieldEnum>;
    having?: SectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SectionCountAggregateInput;
    _avg?: SectionAvgAggregateInput;
    _sum?: SectionSumAggregateInput;
    _min?: SectionMinAggregateInput;
    _max?: SectionMaxAggregateInput;
}
