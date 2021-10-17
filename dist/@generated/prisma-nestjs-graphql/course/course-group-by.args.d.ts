import { CourseWhereInput } from './course-where.input';
import { CourseOrderByWithAggregationInput } from './course-order-by-with-aggregation.input';
import { CourseScalarFieldEnum } from './course-scalar-field.enum';
import { CourseScalarWhereWithAggregatesInput } from './course-scalar-where-with-aggregates.input';
import { CourseCountAggregateInput } from './course-count-aggregate.input';
import { CourseAvgAggregateInput } from './course-avg-aggregate.input';
import { CourseSumAggregateInput } from './course-sum-aggregate.input';
import { CourseMinAggregateInput } from './course-min-aggregate.input';
import { CourseMaxAggregateInput } from './course-max-aggregate.input';
export declare class CourseGroupByArgs {
    where?: CourseWhereInput;
    orderBy?: Array<CourseOrderByWithAggregationInput>;
    by: Array<keyof typeof CourseScalarFieldEnum>;
    having?: CourseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInput;
    _avg?: CourseAvgAggregateInput;
    _sum?: CourseSumAggregateInput;
    _min?: CourseMinAggregateInput;
    _max?: CourseMaxAggregateInput;
}
