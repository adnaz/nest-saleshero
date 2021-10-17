import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorUpdateWithoutMessagesInput } from './actor-update-without-messages.input';
import { ActorCreateWithoutMessagesInput } from './actor-create-without-messages.input';

@InputType()
export class ActorUpsertWithoutMessagesInput {

    @Field(() => ActorUpdateWithoutMessagesInput, {nullable:false})
    update!: ActorUpdateWithoutMessagesInput;

    @Field(() => ActorCreateWithoutMessagesInput, {nullable:false})
    create!: ActorCreateWithoutMessagesInput;
}
