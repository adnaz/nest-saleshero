import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyValueCreateWithoutQuickReplyInput } from './quick-reply-value-create-without-quick-reply.input';
import { QuickReplyValueCreateOrConnectWithoutQuickReplyInput } from './quick-reply-value-create-or-connect-without-quick-reply.input';
import { QuickReplyValueCreateManyQuickReplyInputEnvelope } from './quick-reply-value-create-many-quick-reply-input-envelope.input';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';

@InputType()
export class QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput {

    @Field(() => [QuickReplyValueCreateWithoutQuickReplyInput], {nullable:true})
    create?: Array<QuickReplyValueCreateWithoutQuickReplyInput>;

    @Field(() => [QuickReplyValueCreateOrConnectWithoutQuickReplyInput], {nullable:true})
    connectOrCreate?: Array<QuickReplyValueCreateOrConnectWithoutQuickReplyInput>;

    @Field(() => QuickReplyValueCreateManyQuickReplyInputEnvelope, {nullable:true})
    createMany?: QuickReplyValueCreateManyQuickReplyInputEnvelope;

    @Field(() => [QuickReplyValueWhereUniqueInput], {nullable:true})
    connect?: Array<QuickReplyValueWhereUniqueInput>;
}
