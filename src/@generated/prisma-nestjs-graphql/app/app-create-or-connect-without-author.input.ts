import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppCreateWithoutAuthorInput } from './app-create-without-author.input';

@InputType()
export class AppCreateOrConnectWithoutAuthorInput {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    where!: AppWhereUniqueInput;

    @Field(() => AppCreateWithoutAuthorInput, {nullable:false})
    create!: AppCreateWithoutAuthorInput;
}
