import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutReplyInput } from './file-create-without-reply.input';
import { FileCreateOrConnectWithoutReplyInput } from './file-create-or-connect-without-reply.input';
import { FileUpsertWithoutReplyInput } from './file-upsert-without-reply.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutReplyInput } from './file-update-without-reply.input';

@InputType()
export class FileUpdateOneWithoutReplyInput {

    @Field(() => FileCreateWithoutReplyInput, {nullable:true})
    create?: FileCreateWithoutReplyInput;

    @Field(() => FileCreateOrConnectWithoutReplyInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutReplyInput;

    @Field(() => FileUpsertWithoutReplyInput, {nullable:true})
    upsert?: FileUpsertWithoutReplyInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutReplyInput, {nullable:true})
    update?: FileUpdateWithoutReplyInput;
}
