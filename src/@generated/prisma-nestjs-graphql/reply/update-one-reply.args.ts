import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyUpdateInput } from './reply-update.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@ArgsType()
export class UpdateOneReplyArgs {

    @Field(() => ReplyUpdateInput, {nullable:false})
    data!: ReplyUpdateInput;

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    where!: ReplyWhereUniqueInput;
}
