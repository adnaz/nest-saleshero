import { TypeSection } from '../prisma/type-section.enum';
export declare class SectionMinAggregate {
    id?: number;
    title?: string;
    description?: string;
    image?: string;
    type?: keyof typeof TypeSection;
    courseId?: number;
    published?: boolean;
    authorId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
