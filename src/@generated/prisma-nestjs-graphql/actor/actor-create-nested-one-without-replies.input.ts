import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorCreateWithoutRepliesInput } from './actor-create-without-replies.input';
import { ActorCreateOrConnectWithoutRepliesInput } from './actor-create-or-connect-without-replies.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';

@InputType()
export class ActorCreateNestedOneWithoutRepliesInput {

    @Field(() => ActorCreateWithoutRepliesInput, {nullable:true})
    create?: ActorCreateWithoutRepliesInput;

    @Field(() => ActorCreateOrConnectWithoutRepliesInput, {nullable:true})
    connectOrCreate?: ActorCreateOrConnectWithoutRepliesInput;

    @Field(() => ActorWhereUniqueInput, {nullable:true})
    connect?: ActorWhereUniqueInput;
}
