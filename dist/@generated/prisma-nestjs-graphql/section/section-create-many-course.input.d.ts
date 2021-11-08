import { TypeSection } from '../prisma/type-section.enum';
export declare class SectionCreateManyCourseInput {
    id?: number;
    title: string;
    description?: string;
    image?: string;
    type?: keyof typeof TypeSection;
    published?: boolean;
    authorId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
