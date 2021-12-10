import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutAffirmationInput } from './file-update-without-affirmation.input';
import { FileCreateWithoutAffirmationInput } from './file-create-without-affirmation.input';

@InputType()
export class FileUpsertWithoutAffirmationInput {

    @Field(() => FileUpdateWithoutAffirmationInput, {nullable:false})
    update!: FileUpdateWithoutAffirmationInput;

    @Field(() => FileCreateWithoutAffirmationInput, {nullable:false})
    create!: FileCreateWithoutAffirmationInput;
}
