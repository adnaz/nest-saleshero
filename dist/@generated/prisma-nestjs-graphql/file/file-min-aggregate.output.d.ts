import { TypeFile } from '../prisma/type-file.enum';
export declare class FileMinAggregate {
    id?: number;
    link?: string;
    location?: string;
    key?: string;
    bucket?: string;
    etag?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type?: keyof typeof TypeFile;
}
