import { UserCreateWithoutAppsInput } from './user-create-without-apps.input';
import { UserCreateOrConnectWithoutAppsInput } from './user-create-or-connect-without-apps.input';
import { UserUpsertWithoutAppsInput } from './user-upsert-without-apps.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAppsInput } from './user-update-without-apps.input';
export declare class UserUpdateOneWithoutAppsInput {
    create?: UserCreateWithoutAppsInput;
    connectOrCreate?: UserCreateOrConnectWithoutAppsInput;
    upsert?: UserUpsertWithoutAppsInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutAppsInput;
}
