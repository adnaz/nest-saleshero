import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';
import { ReplyUpdateOneWithoutQuickRepliesInput } from '../reply/reply-update-one-without-quick-replies.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class QuickReplyUpdateWithoutValuesInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    keepIt?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumTypeReplyFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTypeReplyFieldUpdateOperationsInput;

    @HideField()
    reply?: ReplyUpdateOneWithoutQuickRepliesInput;
}
