import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorCreateWithoutAvatarInput } from './actor-create-without-avatar.input';

@InputType()
export class ActorCreateOrConnectWithoutAvatarInput {

    @Field(() => ActorWhereUniqueInput, {nullable:false})
    where!: ActorWhereUniqueInput;

    @Field(() => ActorCreateWithoutAvatarInput, {nullable:false})
    create!: ActorCreateWithoutAvatarInput;
}
