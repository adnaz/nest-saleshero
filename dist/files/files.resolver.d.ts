import { FileCreateInput } from 'src/@generated/prisma-nestjs-graphql/file/file-create.input';
import { File } from 'src/@generated/prisma-nestjs-graphql/file/file.model';
import { FindManyFileArgs } from 'src/@generated/prisma-nestjs-graphql/file/find-many-file.args';
import { UpdateOneFileArgs } from 'src/@generated/prisma-nestjs-graphql/file/update-one-file.args';
import { FilesService } from './files.service';
export declare class FilesResolver {
    private filesService;
    constructor(filesService: FilesService);
    files(findManyFileArgs: FindManyFileArgs): Promise<File[]>;
    file(id: number): Promise<import(".prisma/client").File>;
    createFile(fileCreateInput: FileCreateInput): Promise<import(".prisma/client").File>;
    updateFile(updateOneFileArgs: UpdateOneFileArgs): Promise<import(".prisma/client").File>;
    removeFile(id: number): Promise<import(".prisma/client").File>;
}
