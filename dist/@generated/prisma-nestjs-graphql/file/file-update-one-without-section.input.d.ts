import { FileCreateWithoutSectionInput } from './file-create-without-section.input';
import { FileCreateOrConnectWithoutSectionInput } from './file-create-or-connect-without-section.input';
import { FileUpsertWithoutSectionInput } from './file-upsert-without-section.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutSectionInput } from './file-update-without-section.input';
export declare class FileUpdateOneWithoutSectionInput {
    create?: FileCreateWithoutSectionInput;
    connectOrCreate?: FileCreateOrConnectWithoutSectionInput;
    upsert?: FileUpsertWithoutSectionInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: FileWhereUniqueInput;
    update?: FileUpdateWithoutSectionInput;
}
