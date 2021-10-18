import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyCreateInput } from './reply-create.input';

@ArgsType()
export class CreateOneReplyArgs {

    @Field(() => ReplyCreateInput, {nullable:false})
    data!: ReplyCreateInput;
}
