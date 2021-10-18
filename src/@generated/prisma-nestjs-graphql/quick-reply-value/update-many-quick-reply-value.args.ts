import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyValueUpdateManyMutationInput } from './quick-reply-value-update-many-mutation.input';
import { QuickReplyValueWhereInput } from './quick-reply-value-where.input';

@ArgsType()
export class UpdateManyQuickReplyValueArgs {

    @Field(() => QuickReplyValueUpdateManyMutationInput, {nullable:false})
    data!: QuickReplyValueUpdateManyMutationInput;

    @Field(() => QuickReplyValueWhereInput, {nullable:true})
    where?: QuickReplyValueWhereInput;
}
