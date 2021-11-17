import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutActorInput } from './file-create-without-actor.input';

@InputType()
export class FileCreateOrConnectWithoutActorInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutActorInput, {nullable:false})
    create!: FileCreateWithoutActorInput;
}
