import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorCreateWithoutMessagesInput } from './actor-create-without-messages.input';

@InputType()
export class ActorCreateOrConnectWithoutMessagesInput {

    @Field(() => ActorWhereUniqueInput, {nullable:false})
    where!: ActorWhereUniqueInput;

    @Field(() => ActorCreateWithoutMessagesInput, {nullable:false})
    create!: ActorCreateWithoutMessagesInput;
}
