import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAppsInput } from '../user/user-create-nested-one-without-apps.input';

@InputType()
export class AppCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutAppsInput, {nullable:true})
    author?: UserCreateNestedOneWithoutAppsInput;
}
