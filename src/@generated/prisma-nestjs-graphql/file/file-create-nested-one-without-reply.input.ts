import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutReplyInput } from './file-create-without-reply.input';
import { FileCreateOrConnectWithoutReplyInput } from './file-create-or-connect-without-reply.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutReplyInput {

    @Field(() => FileCreateWithoutReplyInput, {nullable:true})
    create?: FileCreateWithoutReplyInput;

    @Field(() => FileCreateOrConnectWithoutReplyInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutReplyInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;
}
