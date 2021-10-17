import { Role } from '../prisma/role.enum';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
export declare class UserCreateWithoutCoursesInput {
    email: string;
    username?: string;
    name?: string;
    password: string;
    role: keyof typeof Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
}
