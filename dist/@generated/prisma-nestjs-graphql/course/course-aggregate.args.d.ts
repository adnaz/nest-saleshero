import { CourseWhereInput } from './course-where.input';
import { CourseOrderByWithRelationInput } from './course-order-by-with-relation.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseCountAggregateInput } from './course-count-aggregate.input';
import { CourseAvgAggregateInput } from './course-avg-aggregate.input';
import { CourseSumAggregateInput } from './course-sum-aggregate.input';
import { CourseMinAggregateInput } from './course-min-aggregate.input';
import { CourseMaxAggregateInput } from './course-max-aggregate.input';
export declare class CourseAggregateArgs {
    where?: CourseWhereInput;
    orderBy?: Array<CourseOrderByWithRelationInput>;
    cursor?: CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInput;
    _avg?: CourseAvgAggregateInput;
    _sum?: CourseSumAggregateInput;
    _min?: CourseMinAggregateInput;
    _max?: CourseMaxAggregateInput;
}
