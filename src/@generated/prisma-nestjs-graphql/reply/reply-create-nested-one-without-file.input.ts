import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutFileInput } from './reply-create-without-file.input';
import { ReplyCreateOrConnectWithoutFileInput } from './reply-create-or-connect-without-file.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@InputType()
export class ReplyCreateNestedOneWithoutFileInput {

    @Field(() => ReplyCreateWithoutFileInput, {nullable:true})
    create?: ReplyCreateWithoutFileInput;

    @Field(() => ReplyCreateOrConnectWithoutFileInput, {nullable:true})
    connectOrCreate?: ReplyCreateOrConnectWithoutFileInput;

    @Field(() => ReplyWhereUniqueInput, {nullable:true})
    connect?: ReplyWhereUniqueInput;
}
