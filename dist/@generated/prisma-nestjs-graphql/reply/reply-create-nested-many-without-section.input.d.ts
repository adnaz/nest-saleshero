import { ReplyCreateWithoutSectionInput } from './reply-create-without-section.input';
import { ReplyCreateOrConnectWithoutSectionInput } from './reply-create-or-connect-without-section.input';
import { ReplyCreateManySectionInputEnvelope } from './reply-create-many-section-input-envelope.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
export declare class ReplyCreateNestedManyWithoutSectionInput {
    create?: Array<ReplyCreateWithoutSectionInput>;
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutSectionInput>;
    createMany?: ReplyCreateManySectionInputEnvelope;
    connect?: Array<ReplyWhereUniqueInput>;
}
