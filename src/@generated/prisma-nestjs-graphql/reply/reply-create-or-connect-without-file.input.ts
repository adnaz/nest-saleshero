import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyCreateWithoutFileInput } from './reply-create-without-file.input';

@InputType()
export class ReplyCreateOrConnectWithoutFileInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyCreateWithoutFileInput, {nullable:false})
    create!: ReplyCreateWithoutFileInput;
}
