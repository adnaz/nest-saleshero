import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAppsInput } from './user-create-without-apps.input';
import { UserCreateOrConnectWithoutAppsInput } from './user-create-or-connect-without-apps.input';
import { UserUpsertWithoutAppsInput } from './user-upsert-without-apps.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAppsInput } from './user-update-without-apps.input';

@InputType()
export class UserUpdateOneWithoutAppsInput {

    @Field(() => UserCreateWithoutAppsInput, {nullable:true})
    create?: UserCreateWithoutAppsInput;

    @Field(() => UserCreateOrConnectWithoutAppsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAppsInput;

    @Field(() => UserUpsertWithoutAppsInput, {nullable:true})
    upsert?: UserUpsertWithoutAppsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAppsInput, {nullable:true})
    update?: UserUpdateWithoutAppsInput;
}
