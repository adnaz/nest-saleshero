import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithoutUserInput } from './reply-update-without-user.input';
import { ReplyCreateWithoutUserInput } from './reply-create-without-user.input';

@InputType()
export class ReplyUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyUpdateWithoutUserInput, {nullable:false})
    update!: ReplyUpdateWithoutUserInput;

    @Field(() => ReplyCreateWithoutUserInput, {nullable:false})
    create!: ReplyCreateWithoutUserInput;
}
