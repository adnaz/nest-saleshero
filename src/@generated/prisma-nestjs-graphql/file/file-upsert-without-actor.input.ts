import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutActorInput } from './file-update-without-actor.input';
import { FileCreateWithoutActorInput } from './file-create-without-actor.input';

@InputType()
export class FileUpsertWithoutActorInput {

    @Field(() => FileUpdateWithoutActorInput, {nullable:false})
    update!: FileUpdateWithoutActorInput;

    @Field(() => FileCreateWithoutActorInput, {nullable:false})
    create!: FileCreateWithoutActorInput;
}
