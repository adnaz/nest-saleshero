import { TypeSection } from '../prisma/type-section.enum';
export declare class MessageUncheckedCreateWithoutAuthorInput {
    id?: number;
    title: string;
    description?: string;
    image?: string;
    type?: keyof typeof TypeSection;
    courseId?: number;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
