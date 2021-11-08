import { UserCreateWithoutSectionsInput } from './user-create-without-sections.input';
import { UserCreateOrConnectWithoutSectionsInput } from './user-create-or-connect-without-sections.input';
import { UserUpsertWithoutSectionsInput } from './user-upsert-without-sections.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSectionsInput } from './user-update-without-sections.input';
export declare class UserUpdateOneWithoutSectionsInput {
    create?: UserCreateWithoutSectionsInput;
    connectOrCreate?: UserCreateOrConnectWithoutSectionsInput;
    upsert?: UserUpsertWithoutSectionsInput;
    connect?: UserWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: UserUpdateWithoutSectionsInput;
}
