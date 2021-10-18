import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateManyUserInput } from './reply-create-many-user.input';

@InputType()
export class ReplyCreateManyUserInputEnvelope {

    @Field(() => [ReplyCreateManyUserInput], {nullable:false})
    data!: Array<ReplyCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
