import { SectionCreateWithoutImageInput } from './section-create-without-image.input';
import { SectionCreateOrConnectWithoutImageInput } from './section-create-or-connect-without-image.input';
import { SectionUpsertWithoutImageInput } from './section-upsert-without-image.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithoutImageInput } from './section-update-without-image.input';
export declare class SectionUncheckedUpdateOneWithoutImageInput {
    create?: SectionCreateWithoutImageInput;
    connectOrCreate?: SectionCreateOrConnectWithoutImageInput;
    upsert?: SectionUpsertWithoutImageInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: SectionWhereUniqueInput;
    update?: SectionUpdateWithoutImageInput;
}
