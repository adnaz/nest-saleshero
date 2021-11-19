import { TypeSection } from '../prisma/type-section.enum';
import { ReplyUncheckedCreateNestedManyWithoutSectionInput } from '../reply/reply-unchecked-create-nested-many-without-section.input';
export declare class SectionUncheckedCreateWithoutAuthorInput {
    id?: number;
    title: string;
    description?: string;
    imageId?: number;
    type?: keyof typeof TypeSection;
    courseId?: number;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    replies?: ReplyUncheckedCreateNestedManyWithoutSectionInput;
}
