import { CourseCountAggregate } from './course-count-aggregate.output';
import { CourseAvgAggregate } from './course-avg-aggregate.output';
import { CourseSumAggregate } from './course-sum-aggregate.output';
import { CourseMinAggregate } from './course-min-aggregate.output';
import { CourseMaxAggregate } from './course-max-aggregate.output';
export declare class AggregateCourse {
    _count?: CourseCountAggregate;
    _avg?: CourseAvgAggregate;
    _sum?: CourseSumAggregate;
    _min?: CourseMinAggregate;
    _max?: CourseMaxAggregate;
}
