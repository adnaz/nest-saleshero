import { UserCreateWithoutAppsInput } from './user-create-without-apps.input';
import { UserCreateOrConnectWithoutAppsInput } from './user-create-or-connect-without-apps.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutAppsInput {
    create?: UserCreateWithoutAppsInput;
    connectOrCreate?: UserCreateOrConnectWithoutAppsInput;
    connect?: UserWhereUniqueInput;
}
