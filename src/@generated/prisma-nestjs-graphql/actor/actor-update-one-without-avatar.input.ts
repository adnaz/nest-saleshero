import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorCreateWithoutAvatarInput } from './actor-create-without-avatar.input';
import { ActorCreateOrConnectWithoutAvatarInput } from './actor-create-or-connect-without-avatar.input';
import { ActorUpsertWithoutAvatarInput } from './actor-upsert-without-avatar.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorUpdateWithoutAvatarInput } from './actor-update-without-avatar.input';

@InputType()
export class ActorUpdateOneWithoutAvatarInput {

    @Field(() => ActorCreateWithoutAvatarInput, {nullable:true})
    create?: ActorCreateWithoutAvatarInput;

    @Field(() => ActorCreateOrConnectWithoutAvatarInput, {nullable:true})
    connectOrCreate?: ActorCreateOrConnectWithoutAvatarInput;

    @Field(() => ActorUpsertWithoutAvatarInput, {nullable:true})
    upsert?: ActorUpsertWithoutAvatarInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ActorWhereUniqueInput, {nullable:true})
    connect?: ActorWhereUniqueInput;

    @Field(() => ActorUpdateWithoutAvatarInput, {nullable:true})
    update?: ActorUpdateWithoutAvatarInput;
}
