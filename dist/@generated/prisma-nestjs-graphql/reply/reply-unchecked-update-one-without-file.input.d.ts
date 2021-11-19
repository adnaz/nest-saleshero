import { ReplyCreateWithoutFileInput } from './reply-create-without-file.input';
import { ReplyCreateOrConnectWithoutFileInput } from './reply-create-or-connect-without-file.input';
import { ReplyUpsertWithoutFileInput } from './reply-upsert-without-file.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithoutFileInput } from './reply-update-without-file.input';
export declare class ReplyUncheckedUpdateOneWithoutFileInput {
    create?: ReplyCreateWithoutFileInput;
    connectOrCreate?: ReplyCreateOrConnectWithoutFileInput;
    upsert?: ReplyUpsertWithoutFileInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: ReplyWhereUniqueInput;
    update?: ReplyUpdateWithoutFileInput;
}
