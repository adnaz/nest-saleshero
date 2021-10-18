import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReplyCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => String, {nullable:true})
    audio?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
