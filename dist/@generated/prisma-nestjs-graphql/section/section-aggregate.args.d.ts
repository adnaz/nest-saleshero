import { SectionWhereInput } from './section-where.input';
import { SectionOrderByWithRelationInput } from './section-order-by-with-relation.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionCountAggregateInput } from './section-count-aggregate.input';
import { SectionAvgAggregateInput } from './section-avg-aggregate.input';
import { SectionSumAggregateInput } from './section-sum-aggregate.input';
import { SectionMinAggregateInput } from './section-min-aggregate.input';
import { SectionMaxAggregateInput } from './section-max-aggregate.input';
export declare class SectionAggregateArgs {
    where?: SectionWhereInput;
    orderBy?: Array<SectionOrderByWithRelationInput>;
    cursor?: SectionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: SectionCountAggregateInput;
    _avg?: SectionAvgAggregateInput;
    _sum?: SectionSumAggregateInput;
    _min?: SectionMinAggregateInput;
    _max?: SectionMaxAggregateInput;
}
