import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageScalarWhereInput } from './message-scalar-where.input';
import { MessageUncheckedUpdateManyWithoutMessagesInput } from './message-unchecked-update-many-without-messages.input';

@InputType()
export class MessageUpdateManyWithWhereWithoutUserInput {

    @Field(() => MessageScalarWhereInput, {nullable:false})
    where!: MessageScalarWhereInput;

    @Field(() => MessageUncheckedUpdateManyWithoutMessagesInput, {nullable:false})
    data!: MessageUncheckedUpdateManyWithoutMessagesInput;
}
