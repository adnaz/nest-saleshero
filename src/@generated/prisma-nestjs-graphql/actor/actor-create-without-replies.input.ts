import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutActorInput } from '../file/file-create-nested-one-without-actor.input';

@InputType()
export class ActorCreateWithoutRepliesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FileCreateNestedOneWithoutActorInput, {nullable:true})
    avatar?: FileCreateNestedOneWithoutActorInput;
}
