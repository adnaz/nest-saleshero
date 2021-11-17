import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutSectionInput } from './reply-create-without-section.input';
import { ReplyCreateOrConnectWithoutSectionInput } from './reply-create-or-connect-without-section.input';
import { ReplyCreateManySectionInputEnvelope } from './reply-create-many-section-input-envelope.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@InputType()
export class ReplyUncheckedCreateNestedManyWithoutSectionInput {

    @Field(() => [ReplyCreateWithoutSectionInput], {nullable:true})
    create?: Array<ReplyCreateWithoutSectionInput>;

    @Field(() => [ReplyCreateOrConnectWithoutSectionInput], {nullable:true})
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutSectionInput>;

    @Field(() => ReplyCreateManySectionInputEnvelope, {nullable:true})
    createMany?: ReplyCreateManySectionInputEnvelope;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    connect?: Array<ReplyWhereUniqueInput>;
}
