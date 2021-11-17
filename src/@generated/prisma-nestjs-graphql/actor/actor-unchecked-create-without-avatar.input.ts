import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReplyUncheckedCreateNestedManyWithoutUserInput } from '../reply/reply-unchecked-create-nested-many-without-user.input';

@InputType()
export class ActorUncheckedCreateWithoutAvatarInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReplyUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    replies?: ReplyUncheckedCreateNestedManyWithoutUserInput;
}
