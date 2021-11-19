import { Role } from '../prisma/role.enum';
import { AppCreateNestedManyWithoutAuthorInput } from '../app/app-create-nested-many-without-author.input';
import { CourseCreateNestedManyWithoutAuthorInput } from '../course/course-create-nested-many-without-author.input';
import { SectionCreateNestedManyWithoutAuthorInput } from '../section/section-create-nested-many-without-author.input';
export declare class UserCreateWithoutPostsInput {
    email: string;
    username?: string;
    name?: string;
    password: string;
    role: keyof typeof Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    apps?: AppCreateNestedManyWithoutAuthorInput;
    courses?: CourseCreateNestedManyWithoutAuthorInput;
    sections?: SectionCreateNestedManyWithoutAuthorInput;
}
