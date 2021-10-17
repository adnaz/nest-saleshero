import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorCreateNestedOneWithoutMessagesInput } from '../actor/actor-create-nested-one-without-messages.input';

@InputType()
export class MessageCreateInput {

    @Field(() => ActorCreateNestedOneWithoutMessagesInput, {nullable:true})
    user?: ActorCreateNestedOneWithoutMessagesInput;
}
