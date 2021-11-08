import { SectionUncheckedCreateNestedManyWithoutCourseInput } from '../section/section-unchecked-create-nested-many-without-course.input';
export declare class CourseUncheckedCreateInput {
    id?: number;
    title: string;
    description?: string;
    audio?: string;
    image?: string;
    published?: boolean;
    authorId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput;
}
