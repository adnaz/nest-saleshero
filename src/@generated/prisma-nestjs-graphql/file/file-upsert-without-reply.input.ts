import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutReplyInput } from './file-update-without-reply.input';
import { FileCreateWithoutReplyInput } from './file-create-without-reply.input';

@InputType()
export class FileUpsertWithoutReplyInput {

    @Field(() => FileUpdateWithoutReplyInput, {nullable:false})
    update!: FileUpdateWithoutReplyInput;

    @Field(() => FileCreateWithoutReplyInput, {nullable:false})
    create!: FileCreateWithoutReplyInput;
}
