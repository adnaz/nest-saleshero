import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyCreateInput } from './quick-reply-create.input';

@ArgsType()
export class CreateOneQuickReplyArgs {

    @Field(() => QuickReplyCreateInput, {nullable:false})
    data!: QuickReplyCreateInput;
}
