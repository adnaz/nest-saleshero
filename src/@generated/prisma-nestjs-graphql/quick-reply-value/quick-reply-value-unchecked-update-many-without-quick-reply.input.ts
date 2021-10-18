import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyValueCreateWithoutQuickReplyInput } from './quick-reply-value-create-without-quick-reply.input';
import { QuickReplyValueCreateOrConnectWithoutQuickReplyInput } from './quick-reply-value-create-or-connect-without-quick-reply.input';
import { QuickReplyValueUpsertWithWhereUniqueWithoutQuickReplyInput } from './quick-reply-value-upsert-with-where-unique-without-quick-reply.input';
import { QuickReplyValueCreateManyQuickReplyInputEnvelope } from './quick-reply-value-create-many-quick-reply-input-envelope.input';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';
import { QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput } from './quick-reply-value-update-with-where-unique-without-quick-reply.input';
import { QuickReplyValueUpdateManyWithWhereWithoutQuickReplyInput } from './quick-reply-value-update-many-with-where-without-quick-reply.input';
import { QuickReplyValueScalarWhereInput } from './quick-reply-value-scalar-where.input';

@InputType()
export class QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput {

    @Field(() => [QuickReplyValueCreateWithoutQuickReplyInput], {nullable:true})
    create?: Array<QuickReplyValueCreateWithoutQuickReplyInput>;

    @Field(() => [QuickReplyValueCreateOrConnectWithoutQuickReplyInput], {nullable:true})
    connectOrCreate?: Array<QuickReplyValueCreateOrConnectWithoutQuickReplyInput>;

    @Field(() => [QuickReplyValueUpsertWithWhereUniqueWithoutQuickReplyInput], {nullable:true})
    upsert?: Array<QuickReplyValueUpsertWithWhereUniqueWithoutQuickReplyInput>;

    @Field(() => QuickReplyValueCreateManyQuickReplyInputEnvelope, {nullable:true})
    createMany?: QuickReplyValueCreateManyQuickReplyInputEnvelope;

    @Field(() => [QuickReplyValueWhereUniqueInput], {nullable:true})
    connect?: Array<QuickReplyValueWhereUniqueInput>;

    @Field(() => [QuickReplyValueWhereUniqueInput], {nullable:true})
    set?: Array<QuickReplyValueWhereUniqueInput>;

    @Field(() => [QuickReplyValueWhereUniqueInput], {nullable:true})
    disconnect?: Array<QuickReplyValueWhereUniqueInput>;

    @Field(() => [QuickReplyValueWhereUniqueInput], {nullable:true})
    delete?: Array<QuickReplyValueWhereUniqueInput>;

    @Field(() => [QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput], {nullable:true})
    update?: Array<QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput>;

    @Field(() => [QuickReplyValueUpdateManyWithWhereWithoutQuickReplyInput], {nullable:true})
    updateMany?: Array<QuickReplyValueUpdateManyWithWhereWithoutQuickReplyInput>;

    @Field(() => [QuickReplyValueScalarWhereInput], {nullable:true})
    deleteMany?: Array<QuickReplyValueScalarWhereInput>;
}
