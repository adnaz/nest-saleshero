import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyValueScalarWhereInput } from './quick-reply-value-scalar-where.input';
import { QuickReplyValueUpdateManyMutationInput } from './quick-reply-value-update-many-mutation.input';

@InputType()
export class QuickReplyValueUpdateManyWithWhereWithoutQuickReplyInput {

    @Field(() => QuickReplyValueScalarWhereInput, {nullable:false})
    where!: QuickReplyValueScalarWhereInput;

    @Field(() => QuickReplyValueUpdateManyMutationInput, {nullable:false})
    data!: QuickReplyValueUpdateManyMutationInput;
}
