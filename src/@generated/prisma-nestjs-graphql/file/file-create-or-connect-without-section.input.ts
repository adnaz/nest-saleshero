import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutSectionInput } from './file-create-without-section.input';

@InputType()
export class FileCreateOrConnectWithoutSectionInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutSectionInput, {nullable:false})
    create!: FileCreateWithoutSectionInput;
}
