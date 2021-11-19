import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAppsInput } from './user-create-without-apps.input';
import { UserCreateOrConnectWithoutAppsInput } from './user-create-or-connect-without-apps.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAppsInput {

    @Field(() => UserCreateWithoutAppsInput, {nullable:true})
    create?: UserCreateWithoutAppsInput;

    @Field(() => UserCreateOrConnectWithoutAppsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAppsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
