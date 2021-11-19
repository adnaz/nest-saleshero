import { PrismaService } from '../prisma.service';
import { File, Prisma } from '@prisma/client';
import { FindManyFileArgs } from 'src/@generated/prisma-nestjs-graphql/file/find-many-file.args';
export declare class FilesService {
    private prisma;
    constructor(prisma: PrismaService);
    file(fileWhereUniqueInput: Prisma.FileWhereUniqueInput): Promise<File | null>;
    files(params: FindManyFileArgs): Promise<File[]>;
    createFile(data: Prisma.FileCreateInput): Promise<File>;
    updateFile(params: {
        where: Prisma.FileWhereUniqueInput;
        data: Prisma.FileUpdateInput;
    }): Promise<File>;
    deleteFile(where: Prisma.FileWhereUniqueInput): Promise<File>;
}
