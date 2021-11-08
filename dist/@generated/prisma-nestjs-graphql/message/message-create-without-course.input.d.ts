import { TypeSection } from '../prisma/type-section.enum';
import { UserCreateNestedOneWithoutSectionsInput } from '../user/user-create-nested-one-without-sections.input';
export declare class MessageCreateWithoutCourseInput {
    title: string;
    description?: string;
    image?: string;
    type?: keyof typeof TypeSection;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author?: UserCreateNestedOneWithoutSectionsInput;
}
