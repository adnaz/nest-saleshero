import { FileWhereInput } from './file-where.input';
import { FileOrderByWithRelationInput } from './file-order-by-with-relation.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileScalarFieldEnum } from './file-scalar-field.enum';
export declare class FindManyFileArgs {
    where?: FileWhereInput;
    orderBy?: Array<FileOrderByWithRelationInput>;
    cursor?: FileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FileScalarFieldEnum>;
}
