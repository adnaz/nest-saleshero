import { UserCreateWithoutSectionsInput } from './user-create-without-sections.input';
import { UserCreateOrConnectWithoutSectionsInput } from './user-create-or-connect-without-sections.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutSectionsInput {
    create?: UserCreateWithoutSectionsInput;
    connectOrCreate?: UserCreateOrConnectWithoutSectionsInput;
    connect?: UserWhereUniqueInput;
}
