import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyWhereInput } from './quick-reply-where.input';

@ArgsType()
export class DeleteManyQuickReplyArgs {

    @Field(() => QuickReplyWhereInput, {nullable:true})
    where?: QuickReplyWhereInput;
}
