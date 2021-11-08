import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { UserCreateOrConnectWithoutPostsInput } from './user-create-or-connect-without-posts.input';
import { UserUpsertWithoutPostsInput } from './user-upsert-without-posts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPostsInput } from './user-update-without-posts.input';
export declare class UserUpdateOneWithoutPostsInput {
    create?: UserCreateWithoutPostsInput;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    upsert?: UserUpsertWithoutPostsInput;
    connect?: UserWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: UserUpdateWithoutPostsInput;
}
