import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateNestedManyWithoutUserInput } from '../reply/reply-create-nested-many-without-user.input';

@InputType()
export class ActorCreateWithoutAvatarInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReplyCreateNestedManyWithoutUserInput, {nullable:true})
    replies?: ReplyCreateNestedManyWithoutUserInput;
}
