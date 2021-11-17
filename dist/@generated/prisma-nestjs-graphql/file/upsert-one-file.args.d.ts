import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateInput } from './file-create.input';
import { FileUpdateInput } from './file-update.input';
export declare class UpsertOneFileArgs {
    where: FileWhereUniqueInput;
    create: FileCreateInput;
    update: FileUpdateInput;
}
