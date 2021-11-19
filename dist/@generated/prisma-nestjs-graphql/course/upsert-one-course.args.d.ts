import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseCreateInput } from './course-create.input';
import { CourseUpdateInput } from './course-update.input';
export declare class UpsertOneCourseArgs {
    where: CourseWhereUniqueInput;
    create: CourseCreateInput;
    update: CourseUpdateInput;
}
