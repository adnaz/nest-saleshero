import { TypeSection } from '../prisma/type-section.enum';
import { ReplyUncheckedCreateNestedManyWithoutSectionInput } from '../reply/reply-unchecked-create-nested-many-without-section.input';
export declare class SectionUncheckedCreateWithoutCourseInput {
    id?: number;
    title: string;
    description?: string;
    imageId?: number;
    type?: keyof typeof TypeSection;
    published?: boolean;
    authorId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    replies?: ReplyUncheckedCreateNestedManyWithoutSectionInput;
}
