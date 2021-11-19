import { Role } from '../prisma/role.enum';
import { AppUncheckedCreateNestedManyWithoutAuthorInput } from '../app/app-unchecked-create-nested-many-without-author.input';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';
import { CourseUncheckedCreateNestedManyWithoutAuthorInput } from '../course/course-unchecked-create-nested-many-without-author.input';
export declare class UserUncheckedCreateWithoutSectionsInput {
    id?: number;
    email: string;
    username?: string;
    name?: string;
    password: string;
    role: keyof typeof Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    apps?: AppUncheckedCreateNestedManyWithoutAuthorInput;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    courses?: CourseUncheckedCreateNestedManyWithoutAuthorInput;
}
