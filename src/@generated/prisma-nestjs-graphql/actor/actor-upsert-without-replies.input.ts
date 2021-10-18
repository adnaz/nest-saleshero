import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorUpdateWithoutRepliesInput } from './actor-update-without-replies.input';
import { ActorCreateWithoutRepliesInput } from './actor-create-without-replies.input';

@InputType()
export class ActorUpsertWithoutRepliesInput {

    @Field(() => ActorUpdateWithoutRepliesInput, {nullable:false})
    update!: ActorUpdateWithoutRepliesInput;

    @Field(() => ActorCreateWithoutRepliesInput, {nullable:false})
    create!: ActorCreateWithoutRepliesInput;
}
