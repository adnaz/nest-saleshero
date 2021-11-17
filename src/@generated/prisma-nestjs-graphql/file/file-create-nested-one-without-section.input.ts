import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutSectionInput } from './file-create-without-section.input';
import { FileCreateOrConnectWithoutSectionInput } from './file-create-or-connect-without-section.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutSectionInput {

    @Field(() => FileCreateWithoutSectionInput, {nullable:true})
    create?: FileCreateWithoutSectionInput;

    @Field(() => FileCreateOrConnectWithoutSectionInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutSectionInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;
}
