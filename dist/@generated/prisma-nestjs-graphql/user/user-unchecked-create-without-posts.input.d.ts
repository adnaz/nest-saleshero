import { Role } from '../prisma/role.enum';
import { AppUncheckedCreateNestedManyWithoutAuthorInput } from '../app/app-unchecked-create-nested-many-without-author.input';
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
    apps?: AppUncheckedCreateNestedManyWithoutAuthorInput;
    courses?: CourseUncheckedCreateNestedManyWithoutAuthorInput;
    sections?: SectionUncheckedCreateNestedManyWithoutAuthorInput;
}
