import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutSectionInput } from './file-create-without-section.input';
import { FileCreateOrConnectWithoutSectionInput } from './file-create-or-connect-without-section.input';
import { FileUpsertWithoutSectionInput } from './file-upsert-without-section.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutSectionInput } from './file-update-without-section.input';

@InputType()
export class FileUpdateOneWithoutSectionInput {

    @Field(() => FileCreateWithoutSectionInput, {nullable:true})
    create?: FileCreateWithoutSectionInput;

    @Field(() => FileCreateOrConnectWithoutSectionInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutSectionInput;

    @Field(() => FileUpsertWithoutSectionInput, {nullable:true})
    upsert?: FileUpsertWithoutSectionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutSectionInput, {nullable:true})
    update?: FileUpdateWithoutSectionInput;
}
