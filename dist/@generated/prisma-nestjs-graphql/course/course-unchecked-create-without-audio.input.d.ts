import { SectionUncheckedCreateNestedManyWithoutCourseInput } from '../section/section-unchecked-create-nested-many-without-course.input';
export declare class CourseUncheckedCreateWithoutAudioInput {
    id?: number;
    title: string;
    description?: string;
    imageId?: number;
    published?: boolean;
    authorId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput;
}
