import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorCreateWithoutRepliesInput } from './actor-create-without-replies.input';
import { ActorCreateOrConnectWithoutRepliesInput } from './actor-create-or-connect-without-replies.input';
import { ActorUpsertWithoutRepliesInput } from './actor-upsert-without-replies.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorUpdateWithoutRepliesInput } from './actor-update-without-replies.input';

@InputType()
export class ActorUpdateOneWithoutRepliesInput {

    @Field(() => ActorCreateWithoutRepliesInput, {nullable:true})
    create?: ActorCreateWithoutRepliesInput;

    @Field(() => ActorCreateOrConnectWithoutRepliesInput, {nullable:true})
    connectOrCreate?: ActorCreateOrConnectWithoutRepliesInput;

    @Field(() => ActorUpsertWithoutRepliesInput, {nullable:true})
    upsert?: ActorUpsertWithoutRepliesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ActorWhereUniqueInput, {nullable:true})
    connect?: ActorWhereUniqueInput;

    @Field(() => ActorUpdateWithoutRepliesInput, {nullable:true})
    update?: ActorUpdateWithoutRepliesInput;
}
