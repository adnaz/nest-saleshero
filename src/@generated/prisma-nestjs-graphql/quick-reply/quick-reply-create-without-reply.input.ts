import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeReply } from '../prisma/type-reply.enum';
import { QuickReplyValueCreateNestedManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-create-nested-many-without-quick-reply.input';

@InputType()
export class QuickReplyCreateWithoutReplyInput {

    @Field(() => Boolean, {nullable:true})
    keepIt?: boolean;

    @Field(() => TypeReply, {nullable:false})
    type!: keyof typeof TypeReply;

    @Field(() => QuickReplyValueCreateNestedManyWithoutQuickReplyInput, {nullable:true})
    values?: QuickReplyValueCreateNestedManyWithoutQuickReplyInput;
}
