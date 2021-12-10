import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutAffirmationInput } from './file-create-without-affirmation.input';

@InputType()
export class FileCreateOrConnectWithoutAffirmationInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutAffirmationInput, {nullable:false})
    create!: FileCreateWithoutAffirmationInput;
}
