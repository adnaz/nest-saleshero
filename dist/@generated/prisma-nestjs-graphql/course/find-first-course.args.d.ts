import { CourseWhereInput } from './course-where.input';
import { CourseOrderByWithRelationInput } from './course-order-by-with-relation.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseScalarFieldEnum } from './course-scalar-field.enum';
export declare class FindFirstCourseArgs {
    where?: CourseWhereInput;
    orderBy?: Array<CourseOrderByWithRelationInput>;
    cursor?: CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CourseScalarFieldEnum>;
}
