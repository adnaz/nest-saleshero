import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypeReply } from '../prisma/type-reply.enum';
import { QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-unchecked-create-nested-many-without-quick-reply.input';

@InputType()
export class QuickReplyUncheckedCreateWithoutReplyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Boolean, {nullable:true})
    keepIt?: boolean;

    @Field(() => TypeReply, {nullable:false})
    type!: keyof typeof TypeReply;

    @Field(() => QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput, {nullable:true})
    values?: QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput;
}
