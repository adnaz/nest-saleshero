import { TypeSection } from '../prisma/type-section.enum';
import { ReplyUncheckedCreateNestedManyWithoutSectionInput } from '../reply/reply-unchecked-create-nested-many-without-section.input';
export declare class SectionUncheckedCreateWithoutImageInput {
    id?: number;
    title: string;
    description?: string;
    type?: keyof typeof TypeSection;
    courseId?: number;
    published?: boolean;
    authorId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    replies?: ReplyUncheckedCreateNestedManyWithoutSectionInput;
}
