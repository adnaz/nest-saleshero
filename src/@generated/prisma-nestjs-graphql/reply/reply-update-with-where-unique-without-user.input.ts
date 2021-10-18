import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithoutUserInput } from './reply-update-without-user.input';

@InputType()
export class ReplyUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyUpdateWithoutUserInput, {nullable:false})
    data!: ReplyUpdateWithoutUserInput;
}
