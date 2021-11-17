import { TypeSection } from '../prisma/type-section.enum';
import { CourseCreateNestedOneWithoutSectionsInput } from '../course/course-create-nested-one-without-sections.input';
import { ReplyCreateNestedManyWithoutSectionInput } from '../reply/reply-create-nested-many-without-section.input';
import { UserCreateNestedOneWithoutSectionsInput } from '../user/user-create-nested-one-without-sections.input';
export declare class SectionCreateWithoutImageInput {
    title: string;
    description?: string;
    type?: keyof typeof TypeSection;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    course?: CourseCreateNestedOneWithoutSectionsInput;
    replies?: ReplyCreateNestedManyWithoutSectionInput;
    author?: UserCreateNestedOneWithoutSectionsInput;
}
