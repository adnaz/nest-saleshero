import { SectionUncheckedCreateNestedManyWithoutCourseInput } from '../section/section-unchecked-create-nested-many-without-course.input';
export declare class CourseUncheckedCreateWithoutAuthorInput {
    id?: number;
    title: string;
    description?: string;
    audioId?: number;
    imageId?: number;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput;
}
