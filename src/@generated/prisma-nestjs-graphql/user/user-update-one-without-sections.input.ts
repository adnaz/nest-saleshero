import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSectionsInput } from './user-create-without-sections.input';
import { UserCreateOrConnectWithoutSectionsInput } from './user-create-or-connect-without-sections.input';
import { UserUpsertWithoutSectionsInput } from './user-upsert-without-sections.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSectionsInput } from './user-update-without-sections.input';

@InputType()
export class UserUpdateOneWithoutSectionsInput {

    @Field(() => UserCreateWithoutSectionsInput, {nullable:true})
    create?: UserCreateWithoutSectionsInput;

    @Field(() => UserCreateOrConnectWithoutSectionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutSectionsInput;

    @Field(() => UserUpsertWithoutSectionsInput, {nullable:true})
    upsert?: UserUpsertWithoutSectionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSectionsInput, {nullable:true})
    update?: UserUpdateWithoutSectionsInput;
}
