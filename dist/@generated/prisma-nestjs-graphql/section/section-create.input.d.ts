import { TypeSection } from '../prisma/type-section.enum';
import { FileCreateNestedOneWithoutSectionInput } from '../file/file-create-nested-one-without-section.input';
import { CourseCreateNestedOneWithoutSectionsInput } from '../course/course-create-nested-one-without-sections.input';
import { ReplyCreateNestedManyWithoutSectionInput } from '../reply/reply-create-nested-many-without-section.input';
import { UserCreateNestedOneWithoutSectionsInput } from '../user/user-create-nested-one-without-sections.input';
export declare class SectionCreateInput {
    title: string;
    description?: string;
    type?: keyof typeof TypeSection;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: FileCreateNestedOneWithoutSectionInput;
    course?: CourseCreateNestedOneWithoutSectionsInput;
    replies?: ReplyCreateNestedManyWithoutSectionInput;
    author?: UserCreateNestedOneWithoutSectionsInput;
}
