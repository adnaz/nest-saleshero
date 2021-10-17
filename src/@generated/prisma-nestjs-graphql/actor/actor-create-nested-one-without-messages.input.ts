import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorCreateWithoutMessagesInput } from './actor-create-without-messages.input';
import { ActorCreateOrConnectWithoutMessagesInput } from './actor-create-or-connect-without-messages.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';

@InputType()
export class ActorCreateNestedOneWithoutMessagesInput {

    @Field(() => ActorCreateWithoutMessagesInput, {nullable:true})
    create?: ActorCreateWithoutMessagesInput;

    @Field(() => ActorCreateOrConnectWithoutMessagesInput, {nullable:true})
    connectOrCreate?: ActorCreateOrConnectWithoutMessagesInput;

    @Field(() => ActorWhereUniqueInput, {nullable:true})
    connect?: ActorWhereUniqueInput;
}
