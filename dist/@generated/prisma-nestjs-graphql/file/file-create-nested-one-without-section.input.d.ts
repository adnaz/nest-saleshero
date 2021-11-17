import { FileCreateWithoutSectionInput } from './file-create-without-section.input';
import { FileCreateOrConnectWithoutSectionInput } from './file-create-or-connect-without-section.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
export declare class FileCreateNestedOneWithoutSectionInput {
    create?: FileCreateWithoutSectionInput;
    connectOrCreate?: FileCreateOrConnectWithoutSectionInput;
    connect?: FileWhereUniqueInput;
}
