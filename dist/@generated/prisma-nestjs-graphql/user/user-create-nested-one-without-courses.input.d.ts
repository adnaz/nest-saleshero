import { UserCreateWithoutCoursesInput } from './user-create-without-courses.input';
import { UserCreateOrConnectWithoutCoursesInput } from './user-create-or-connect-without-courses.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutCoursesInput {
    create?: UserCreateWithoutCoursesInput;
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput;
    connect?: UserWhereUniqueInput;
}
