import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyUpdateWithoutReplyInput } from './quick-reply-update-without-reply.input';
import { QuickReplyCreateWithoutReplyInput } from './quick-reply-create-without-reply.input';

@InputType()
export class QuickReplyUpsertWithoutReplyInput {

    @Field(() => QuickReplyUpdateWithoutReplyInput, {nullable:false})
    update!: QuickReplyUpdateWithoutReplyInput;

    @Field(() => QuickReplyCreateWithoutReplyInput, {nullable:false})
    create!: QuickReplyCreateWithoutReplyInput;
}
