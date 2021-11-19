import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppUpdateWithoutAuthorInput } from './app-update-without-author.input';
import { AppCreateWithoutAuthorInput } from './app-create-without-author.input';

@InputType()
export class AppUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    where!: AppWhereUniqueInput;

    @Field(() => AppUpdateWithoutAuthorInput, {nullable:false})
    update!: AppUpdateWithoutAuthorInput;

    @Field(() => AppCreateWithoutAuthorInput, {nullable:false})
    create!: AppCreateWithoutAuthorInput;
}
