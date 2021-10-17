import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSectionsInput } from './user-create-without-sections.input';
import { UserCreateOrConnectWithoutSectionsInput } from './user-create-or-connect-without-sections.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSectionsInput {

    @Field(() => UserCreateWithoutSectionsInput, {nullable:true})
    create?: UserCreateWithoutSectionsInput;

    @Field(() => UserCreateOrConnectWithoutSectionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutSectionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
