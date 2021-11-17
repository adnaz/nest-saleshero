import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorCreateWithoutAvatarInput } from './actor-create-without-avatar.input';
import { ActorCreateOrConnectWithoutAvatarInput } from './actor-create-or-connect-without-avatar.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';

@InputType()
export class ActorUncheckedCreateNestedOneWithoutAvatarInput {

    @Field(() => ActorCreateWithoutAvatarInput, {nullable:true})
    create?: ActorCreateWithoutAvatarInput;

    @Field(() => ActorCreateOrConnectWithoutAvatarInput, {nullable:true})
    connectOrCreate?: ActorCreateOrConnectWithoutAvatarInput;

    @Field(() => ActorWhereUniqueInput, {nullable:true})
    connect?: ActorWhereUniqueInput;
}
