import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAppsInput } from './user-update-without-apps.input';
import { UserCreateWithoutAppsInput } from './user-create-without-apps.input';

@InputType()
export class UserUpsertWithoutAppsInput {

    @Field(() => UserUpdateWithoutAppsInput, {nullable:false})
    update!: UserUpdateWithoutAppsInput;

    @Field(() => UserCreateWithoutAppsInput, {nullable:false})
    create!: UserCreateWithoutAppsInput;
}
