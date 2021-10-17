import { FileUpload } from 'graphql-upload';
export declare class FileResolver {
    constructor();
    uploadFile({ createReadStream, filename }: FileUpload): Promise<boolean>;
}
