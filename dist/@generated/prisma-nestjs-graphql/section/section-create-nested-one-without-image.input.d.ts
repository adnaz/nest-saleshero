import { SectionCreateWithoutImageInput } from './section-create-without-image.input';
import { SectionCreateOrConnectWithoutImageInput } from './section-create-or-connect-without-image.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
export declare class SectionCreateNestedOneWithoutImageInput {
    create?: SectionCreateWithoutImageInput;
    connectOrCreate?: SectionCreateOrConnectWithoutImageInput;
    connect?: SectionWhereUniqueInput;
}
