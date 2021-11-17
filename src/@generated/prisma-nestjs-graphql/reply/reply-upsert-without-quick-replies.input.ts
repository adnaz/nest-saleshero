import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyUpdateWithoutQuickRepliesInput } from './reply-update-without-quick-replies.input';
import { ReplyCreateWithoutQuickRepliesInput } from './reply-create-without-quick-replies.input';

@InputType()
export class ReplyUpsertWithoutQuickRepliesInput {

    @Field(() => ReplyUpdateWithoutQuickRepliesInput, {nullable:false})
    update!: ReplyUpdateWithoutQuickRepliesInput;

    @Field(() => ReplyCreateWithoutQuickRepliesInput, {nullable:false})
    create!: ReplyCreateWithoutQuickRepliesInput;
}
