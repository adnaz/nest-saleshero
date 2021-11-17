import { FileCreateWithoutReplyInput } from './file-create-without-reply.input';
import { FileCreateOrConnectWithoutReplyInput } from './file-create-or-connect-without-reply.input';
import { FileUpsertWithoutReplyInput } from './file-upsert-without-reply.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutReplyInput } from './file-update-without-reply.input';
export declare class FileUpdateOneWithoutReplyInput {
    create?: FileCreateWithoutReplyInput;
    connectOrCreate?: FileCreateOrConnectWithoutReplyInput;
    upsert?: FileUpsertWithoutReplyInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: FileWhereUniqueInput;
    update?: FileUpdateWithoutReplyInput;
}
