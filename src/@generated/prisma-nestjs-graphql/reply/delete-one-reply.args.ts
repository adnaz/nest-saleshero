import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@ArgsType()
export class DeleteOneReplyArgs {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    where!: ReplyWhereUniqueInput;
}
