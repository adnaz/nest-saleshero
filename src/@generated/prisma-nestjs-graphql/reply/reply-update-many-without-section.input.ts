import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutSectionInput } from './reply-create-without-section.input';
import { ReplyCreateOrConnectWithoutSectionInput } from './reply-create-or-connect-without-section.input';
import { ReplyUpsertWithWhereUniqueWithoutSectionInput } from './reply-upsert-with-where-unique-without-section.input';
import { ReplyCreateManySectionInputEnvelope } from './reply-create-many-section-input-envelope.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithWhereUniqueWithoutSectionInput } from './reply-update-with-where-unique-without-section.input';
import { ReplyUpdateManyWithWhereWithoutSectionInput } from './reply-update-many-with-where-without-section.input';
import { ReplyScalarWhereInput } from './reply-scalar-where.input';

@InputType()
export class ReplyUpdateManyWithoutSectionInput {

    @Field(() => [ReplyCreateWithoutSectionInput], {nullable:true})
    create?: Array<ReplyCreateWithoutSectionInput>;

    @Field(() => [ReplyCreateOrConnectWithoutSectionInput], {nullable:true})
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutSectionInput>;

    @Field(() => [ReplyUpsertWithWhereUniqueWithoutSectionInput], {nullable:true})
    upsert?: Array<ReplyUpsertWithWhereUniqueWithoutSectionInput>;

    @Field(() => ReplyCreateManySectionInputEnvelope, {nullable:true})
    createMany?: ReplyCreateManySectionInputEnvelope;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    set?: Array<ReplyWhereUniqueInput>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReplyWhereUniqueInput>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    delete?: Array<ReplyWhereUniqueInput>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    connect?: Array<ReplyWhereUniqueInput>;

    @Field(() => [ReplyUpdateWithWhereUniqueWithoutSectionInput], {nullable:true})
    update?: Array<ReplyUpdateWithWhereUniqueWithoutSectionInput>;

    @Field(() => [ReplyUpdateManyWithWhereWithoutSectionInput], {nullable:true})
    updateMany?: Array<ReplyUpdateManyWithWhereWithoutSectionInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReplyScalarWhereInput>;
}
