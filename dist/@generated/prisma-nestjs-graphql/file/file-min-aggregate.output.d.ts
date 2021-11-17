import { TypeFile } from '../prisma/type-file.enum';
export declare class FileMinAggregate {
    id?: number;
    link?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type?: keyof typeof TypeFile;
}
