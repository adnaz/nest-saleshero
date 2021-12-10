import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutAffirmationInput } from './file-create-without-affirmation.input';
import { FileCreateOrConnectWithoutAffirmationInput } from './file-create-or-connect-without-affirmation.input';
import { FileUpsertWithoutAffirmationInput } from './file-upsert-without-affirmation.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutAffirmationInput } from './file-update-without-affirmation.input';

@InputType()
export class FileUpdateOneWithoutAffirmationInput {

    @Field(() => FileCreateWithoutAffirmationInput, {nullable:true})
    create?: FileCreateWithoutAffirmationInput;

    @Field(() => FileCreateOrConnectWithoutAffirmationInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutAffirmationInput;

    @Field(() => FileUpsertWithoutAffirmationInput, {nullable:true})
    upsert?: FileUpsertWithoutAffirmationInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutAffirmationInput, {nullable:true})
    update?: FileUpdateWithoutAffirmationInput;
}
