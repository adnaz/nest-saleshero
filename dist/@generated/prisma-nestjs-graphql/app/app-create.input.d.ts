import { UserCreateNestedOneWithoutAppsInput } from '../user/user-create-nested-one-without-apps.input';
export declare class AppCreateInput {
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author?: UserCreateNestedOneWithoutAppsInput;
}
