import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutAppsInput } from './user-create-without-apps.input';

@InputType()
export class UserCreateOrConnectWithoutAppsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAppsInput, {nullable:false})
    create!: UserCreateWithoutAppsInput;
}
