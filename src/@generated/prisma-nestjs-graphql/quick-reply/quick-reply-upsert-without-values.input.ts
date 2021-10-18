import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyUpdateWithoutValuesInput } from './quick-reply-update-without-values.input';
import { QuickReplyCreateWithoutValuesInput } from './quick-reply-create-without-values.input';

@InputType()
export class QuickReplyUpsertWithoutValuesInput {

    @Field(() => QuickReplyUpdateWithoutValuesInput, {nullable:false})
    update!: QuickReplyUpdateWithoutValuesInput;

    @Field(() => QuickReplyCreateWithoutValuesInput, {nullable:false})
    create!: QuickReplyCreateWithoutValuesInput;
}
