import { CourseCountAggregate } from './course-count-aggregate.output';
import { CourseAvgAggregate } from './course-avg-aggregate.output';
import { CourseSumAggregate } from './course-sum-aggregate.output';
import { CourseMinAggregate } from './course-min-aggregate.output';
import { CourseMaxAggregate } from './course-max-aggregate.output';
export declare class CourseGroupBy {
    id: number;
    title: string;
    description?: string;
    audioId?: number;
    imageId?: number;
    published?: boolean;
    authorId?: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: CourseCountAggregate;
    _avg?: CourseAvgAggregate;
    _sum?: CourseSumAggregate;
    _min?: CourseMinAggregate;
    _max?: CourseMaxAggregate;
}
