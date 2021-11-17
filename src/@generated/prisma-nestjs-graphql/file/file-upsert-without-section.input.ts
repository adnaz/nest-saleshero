import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutSectionInput } from './file-update-without-section.input';
import { FileCreateWithoutSectionInput } from './file-create-without-section.input';

@InputType()
export class FileUpsertWithoutSectionInput {

    @Field(() => FileUpdateWithoutSectionInput, {nullable:false})
    update!: FileUpdateWithoutSectionInput;

    @Field(() => FileCreateWithoutSectionInput, {nullable:false})
    create!: FileCreateWithoutSectionInput;
}
