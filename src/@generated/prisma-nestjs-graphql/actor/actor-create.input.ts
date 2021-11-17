import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutActorInput } from '../file/file-create-nested-one-without-actor.input';
import { ReplyCreateNestedManyWithoutUserInput } from '../reply/reply-create-nested-many-without-user.input';

@InputType()
export class ActorCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FileCreateNestedOneWithoutActorInput, {nullable:true})
    avatar?: FileCreateNestedOneWithoutActorInput;

    @Field(() => ReplyCreateNestedManyWithoutUserInput, {nullable:true})
    replies?: ReplyCreateNestedManyWithoutUserInput;
}
