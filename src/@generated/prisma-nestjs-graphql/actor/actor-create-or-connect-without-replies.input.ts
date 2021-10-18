import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorCreateWithoutRepliesInput } from './actor-create-without-replies.input';

@InputType()
export class ActorCreateOrConnectWithoutRepliesInput {

    @Field(() => ActorWhereUniqueInput, {nullable:false})
    where!: ActorWhereUniqueInput;

    @Field(() => ActorCreateWithoutRepliesInput, {nullable:false})
    create!: ActorCreateWithoutRepliesInput;
}
