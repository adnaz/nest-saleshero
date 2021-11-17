import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutReplyInput } from './file-create-without-reply.input';

@InputType()
export class FileCreateOrConnectWithoutReplyInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutReplyInput, {nullable:false})
    create!: FileCreateWithoutReplyInput;
}
