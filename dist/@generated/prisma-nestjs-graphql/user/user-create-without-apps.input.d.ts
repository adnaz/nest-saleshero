import { Role } from '../prisma/role.enum';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { CourseCreateNestedManyWithoutAuthorInput } from '../course/course-create-nested-many-without-author.input';
import { SectionCreateNestedManyWithoutAuthorInput } from '../section/section-create-nested-many-without-author.input';
export declare class UserCreateWithoutAppsInput {
    email: string;
    username?: string;
    name?: string;
    password: string;
    role: keyof typeof Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    courses?: CourseCreateNestedManyWithoutAuthorInput;
    sections?: SectionCreateNestedManyWithoutAuthorInput;
}
