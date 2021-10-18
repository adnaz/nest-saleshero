import { Role } from '../prisma/role.enum';
import { CourseUncheckedCreateNestedManyWithoutAuthorInput } from '../course/course-unchecked-create-nested-many-without-author.input';
import { SectionUncheckedCreateNestedManyWithoutAuthorInput } from '../section/section-unchecked-create-nested-many-without-author.input';
export declare class UserUncheckedCreateWithoutPostsInput {
    id?: number;
    email: string;
    username?: string;
    name?: string;
    password: string;
    role: keyof typeof Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    courses?: CourseUncheckedCreateNestedManyWithoutAuthorInput;
    sections?: SectionUncheckedCreateNestedManyWithoutAuthorInput;
}
