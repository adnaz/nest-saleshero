import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppUpdateWithoutAuthorInput } from './app-update-without-author.input';

@InputType()
export class AppUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    where!: AppWhereUniqueInput;

    @Field(() => AppUpdateWithoutAuthorInput, {nullable:false})
    data!: AppUpdateWithoutAuthorInput;
}
