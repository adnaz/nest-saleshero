import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorUpdateWithoutAvatarInput } from './actor-update-without-avatar.input';
import { ActorCreateWithoutAvatarInput } from './actor-create-without-avatar.input';

@InputType()
export class ActorUpsertWithoutAvatarInput {

    @Field(() => ActorUpdateWithoutAvatarInput, {nullable:false})
    update!: ActorUpdateWithoutAvatarInput;

    @Field(() => ActorCreateWithoutAvatarInput, {nullable:false})
    create!: ActorCreateWithoutAvatarInput;
}
