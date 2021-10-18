import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';

@ArgsType()
export class DeleteOneQuickReplyArgs {

    @Field(() => QuickReplyWhereUniqueInput, {nullable:false})
    where!: QuickReplyWhereUniqueInput;
}
