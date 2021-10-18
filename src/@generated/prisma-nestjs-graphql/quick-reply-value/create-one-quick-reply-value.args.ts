import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyValueCreateInput } from './quick-reply-value-create.input';

@ArgsType()
export class CreateOneQuickReplyValueArgs {

    @Field(() => QuickReplyValueCreateInput, {nullable:false})
    data!: QuickReplyValueCreateInput;
}
