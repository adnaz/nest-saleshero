import { FilesService } from './files.service';
import { S3Service } from './s3.service';
import { FileCreateInput } from 'src/@generated/prisma-nestjs-graphql/file/file-create.input';
export declare class FilesController {
    private readonly filesService;
    private s3Service;
    constructor(filesService: FilesService, s3Service: S3Service);
    create(fileCreateInput: FileCreateInput): Promise<import(".prisma/client").File>;
    findAll(): Promise<import(".prisma/client").File[]>;
    findOne(id: number): Promise<import(".prisma/client").File>;
    remove(id: number): Promise<import(".prisma/client").File>;
    sendFileToS3(file: any): Promise<import(".prisma/client").File>;
    sendFileReplyToS3(file: any): Promise<import(".prisma/client").File>;
}
