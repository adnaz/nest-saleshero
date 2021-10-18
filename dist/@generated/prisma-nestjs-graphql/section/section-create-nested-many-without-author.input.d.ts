import { SectionCreateWithoutAuthorInput } from './section-create-without-author.input';
import { SectionCreateOrConnectWithoutAuthorInput } from './section-create-or-connect-without-author.input';
import { SectionCreateManyAuthorInputEnvelope } from './section-create-many-author-input-envelope.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
export declare class SectionCreateNestedManyWithoutAuthorInput {
    create?: Array<SectionCreateWithoutAuthorInput>;
    connectOrCreate?: Array<SectionCreateOrConnectWithoutAuthorInput>;
    createMany?: SectionCreateManyAuthorInputEnvelope;
    connect?: Array<SectionWhereUniqueInput>;
}
