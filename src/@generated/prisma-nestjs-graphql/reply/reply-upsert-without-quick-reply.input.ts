import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyUpdateWithoutQuickReplyInput } from './reply-update-without-quick-reply.input';
import { ReplyCreateWithoutQuickReplyInput } from './reply-create-without-quick-reply.input';

@InputType()
export class ReplyUpsertWithoutQuickReplyInput {

    @Field(() => ReplyUpdateWithoutQuickReplyInput, {nullable:false})
    update!: ReplyUpdateWithoutQuickReplyInput;

    @Field(() => ReplyCreateWithoutQuickReplyInput, {nullable:false})
    create!: ReplyCreateWithoutQuickReplyInput;
}
