import { SectionCreateWithoutAuthorInput } from './section-create-without-author.input';
import { SectionCreateOrConnectWithoutAuthorInput } from './section-create-or-connect-without-author.input';
import { SectionUpsertWithWhereUniqueWithoutAuthorInput } from './section-upsert-with-where-unique-without-author.input';
import { SectionCreateManyAuthorInputEnvelope } from './section-create-many-author-input-envelope.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithWhereUniqueWithoutAuthorInput } from './section-update-with-where-unique-without-author.input';
import { SectionUpdateManyWithWhereWithoutAuthorInput } from './section-update-many-with-where-without-author.input';
import { SectionScalarWhereInput } from './section-scalar-where.input';
export declare class SectionUpdateManyWithoutAuthorInput {
    create?: Array<SectionCreateWithoutAuthorInput>;
    connectOrCreate?: Array<SectionCreateOrConnectWithoutAuthorInput>;
    upsert?: Array<SectionUpsertWithWhereUniqueWithoutAuthorInput>;
    createMany?: SectionCreateManyAuthorInputEnvelope;
    set?: Array<SectionWhereUniqueInput>;
    disconnect?: Array<SectionWhereUniqueInput>;
    delete?: Array<SectionWhereUniqueInput>;
    connect?: Array<SectionWhereUniqueInput>;
    update?: Array<SectionUpdateWithWhereUniqueWithoutAuthorInput>;
    updateMany?: Array<SectionUpdateManyWithWhereWithoutAuthorInput>;
    deleteMany?: Array<SectionScalarWhereInput>;
}
