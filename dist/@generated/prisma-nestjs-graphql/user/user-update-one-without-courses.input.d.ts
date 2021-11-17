import { UserCreateWithoutCoursesInput } from './user-create-without-courses.input';
import { UserCreateOrConnectWithoutCoursesInput } from './user-create-or-connect-without-courses.input';
import { UserUpsertWithoutCoursesInput } from './user-upsert-without-courses.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCoursesInput } from './user-update-without-courses.input';
export declare class UserUpdateOneWithoutCoursesInput {
    create?: UserCreateWithoutCoursesInput;
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput;
    upsert?: UserUpsertWithoutCoursesInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutCoursesInput;
}
