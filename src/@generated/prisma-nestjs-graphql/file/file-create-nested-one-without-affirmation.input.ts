import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutAffirmationInput } from './file-create-without-affirmation.input';
import { FileCreateOrConnectWithoutAffirmationInput } from './file-create-or-connect-without-affirmation.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutAffirmationInput {

    @Field(() => FileCreateWithoutAffirmationInput, {nullable:true})
    create?: FileCreateWithoutAffirmationInput;

    @Field(() => FileCreateOrConnectWithoutAffirmationInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutAffirmationInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;
}
