import { TypeFile } from '../prisma/type-file.enum';
export declare class FileMaxAggregate {
    id?: number;
    link?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type?: keyof typeof TypeFile;
}
