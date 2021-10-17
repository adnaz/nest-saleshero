import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorUpdateOneWithoutMessagesInput } from '../actor/actor-update-one-without-messages.input';

@InputType()
export class MessageUpdateInput {

    @Field(() => ActorUpdateOneWithoutMessagesInput, {nullable:true})
    user?: ActorUpdateOneWithoutMessagesInput;
}
