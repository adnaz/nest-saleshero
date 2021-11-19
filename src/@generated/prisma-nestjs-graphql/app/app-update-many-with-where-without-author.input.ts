import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppScalarWhereInput } from './app-scalar-where.input';
import { AppUpdateManyMutationInput } from './app-update-many-mutation.input';

@InputType()
export class AppUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => AppScalarWhereInput, {nullable:false})
    where!: AppScalarWhereInput;

    @Field(() => AppUpdateManyMutationInput, {nullable:false})
    data!: AppUpdateManyMutationInput;
}
