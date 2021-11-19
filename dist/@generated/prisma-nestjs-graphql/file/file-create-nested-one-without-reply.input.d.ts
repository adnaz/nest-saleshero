import { FileCreateWithoutReplyInput } from './file-create-without-reply.input';
import { FileCreateOrConnectWithoutReplyInput } from './file-create-or-connect-without-reply.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
export declare class FileCreateNestedOneWithoutReplyInput {
    create?: FileCreateWithoutReplyInput;
    connectOrCreate?: FileCreateOrConnectWithoutReplyInput;
    connect?: FileWhereUniqueInput;
}
