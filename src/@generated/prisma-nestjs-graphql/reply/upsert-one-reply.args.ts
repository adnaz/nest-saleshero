import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyCreateInput } from './reply-create.input';
import { ReplyUpdateInput } from './reply-update.input';

@ArgsType()
export class UpsertOneReplyArgs {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyCreateInput, {nullable:false})
    create!: ReplyCreateInput;

    @Field(() => ReplyUpdateInput, {nullable:false})
    update!: ReplyUpdateInput;
}
