import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyCreateWithoutUserInput } from './reply-create-without-user.input';

@InputType()
export class ReplyCreateOrConnectWithoutUserInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyCreateWithoutUserInput, {nullable:false})
    create!: ReplyCreateWithoutUserInput;
}
