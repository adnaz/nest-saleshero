import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyValueWhereInput } from './quick-reply-value-where.input';

@ArgsType()
export class DeleteManyQuickReplyValueArgs {

    @Field(() => QuickReplyValueWhereInput, {nullable:true})
    where?: QuickReplyValueWhereInput;
}
