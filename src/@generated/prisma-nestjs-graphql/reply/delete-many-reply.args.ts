import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyWhereInput } from './reply-where.input';

@ArgsType()
export class DeleteManyReplyArgs {

    @Field(() => ReplyWhereInput, {nullable:true})
    where?: ReplyWhereInput;
}
