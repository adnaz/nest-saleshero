import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyUpdateManyMutationInput } from './quick-reply-update-many-mutation.input';
import { QuickReplyWhereInput } from './quick-reply-where.input';

@ArgsType()
export class UpdateManyQuickReplyArgs {

    @Field(() => QuickReplyUpdateManyMutationInput, {nullable:false})
    data!: QuickReplyUpdateManyMutationInput;

    @Field(() => QuickReplyWhereInput, {nullable:true})
    where?: QuickReplyWhereInput;
}
