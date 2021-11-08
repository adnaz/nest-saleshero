import { SectionCreateNestedManyWithoutCourseInput } from '../section/section-create-nested-many-without-course.input';
export declare class CourseCreateWithoutAuthorInput {
    title: string;
    description?: string;
    audio?: string;
    image?: string;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: SectionCreateNestedManyWithoutCourseInput;
}
