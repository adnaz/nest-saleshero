import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUncheckedCreateWithoutUserInput } from './message-unchecked-create-without-user.input';

@InputType()
export class MessageCreateOrConnectWithoutUserInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUncheckedCreateWithoutUserInput, {nullable:false})
    create!: MessageUncheckedCreateWithoutUserInput;
}
