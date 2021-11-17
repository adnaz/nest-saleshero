import { ReplyCreateWithoutSectionInput } from './reply-create-without-section.input';
import { ReplyCreateOrConnectWithoutSectionInput } from './reply-create-or-connect-without-section.input';
import { ReplyUpsertWithWhereUniqueWithoutSectionInput } from './reply-upsert-with-where-unique-without-section.input';
import { ReplyCreateManySectionInputEnvelope } from './reply-create-many-section-input-envelope.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithWhereUniqueWithoutSectionInput } from './reply-update-with-where-unique-without-section.input';
import { ReplyUpdateManyWithWhereWithoutSectionInput } from './reply-update-many-with-where-without-section.input';
import { ReplyScalarWhereInput } from './reply-scalar-where.input';
export declare class ReplyUncheckedUpdateManyWithoutSectionInput {
    create?: Array<ReplyCreateWithoutSectionInput>;
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutSectionInput>;
    upsert?: Array<ReplyUpsertWithWhereUniqueWithoutSectionInput>;
    createMany?: ReplyCreateManySectionInputEnvelope;
    set?: Array<ReplyWhereUniqueInput>;
    disconnect?: Array<ReplyWhereUniqueInput>;
    delete?: Array<ReplyWhereUniqueInput>;
    connect?: Array<ReplyWhereUniqueInput>;
    update?: Array<ReplyUpdateWithWhereUniqueWithoutSectionInput>;
    updateMany?: Array<ReplyUpdateManyWithWhereWithoutSectionInput>;
    deleteMany?: Array<ReplyScalarWhereInput>;
}
