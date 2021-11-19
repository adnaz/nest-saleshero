import { ReplyCreateWithoutFileInput } from './reply-create-without-file.input';
import { ReplyCreateOrConnectWithoutFileInput } from './reply-create-or-connect-without-file.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
export declare class ReplyUncheckedCreateNestedOneWithoutFileInput {
    create?: ReplyCreateWithoutFileInput;
    connectOrCreate?: ReplyCreateOrConnectWithoutFileInput;
    connect?: ReplyWhereUniqueInput;
}
