import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorCreateWithoutMessagesInput } from './actor-create-without-messages.input';
import { ActorCreateOrConnectWithoutMessagesInput } from './actor-create-or-connect-without-messages.input';
import { ActorUpsertWithoutMessagesInput } from './actor-upsert-without-messages.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorUpdateWithoutMessagesInput } from './actor-update-without-messages.input';

@InputType()
export class ActorUpdateOneWithoutMessagesInput {

    @Field(() => ActorCreateWithoutMessagesInput, {nullable:true})
    create?: ActorCreateWithoutMessagesInput;

    @Field(() => ActorCreateOrConnectWithoutMessagesInput, {nullable:true})
    connectOrCreate?: ActorCreateOrConnectWithoutMessagesInput;

    @Field(() => ActorUpsertWithoutMessagesInput, {nullable:true})
    upsert?: ActorUpsertWithoutMessagesInput;

    @Field(() => ActorWhereUniqueInput, {nullable:true})
    connect?: ActorWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ActorUpdateWithoutMessagesInput, {nullable:true})
    update?: ActorUpdateWithoutMessagesInput;
}
