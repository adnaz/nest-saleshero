import { TypeSection } from '../prisma/type-section.enum';
import { CourseCreateNestedOneWithoutSectionsInput } from '../course/course-create-nested-one-without-sections.input';
import { UserCreateNestedOneWithoutSectionsInput } from '../user/user-create-nested-one-without-sections.input';
export declare class SectionCreateInput {
    title: string;
    description?: string;
    image?: string;
    type?: keyof typeof TypeSection;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    course?: CourseCreateNestedOneWithoutSectionsInput;
    author?: UserCreateNestedOneWithoutSectionsInput;
}
