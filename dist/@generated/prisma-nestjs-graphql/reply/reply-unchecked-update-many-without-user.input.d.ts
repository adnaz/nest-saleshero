import { ReplyCreateWithoutUserInput } from './reply-create-without-user.input';
import { ReplyCreateOrConnectWithoutUserInput } from './reply-create-or-connect-without-user.input';
import { ReplyUpsertWithWhereUniqueWithoutUserInput } from './reply-upsert-with-where-unique-without-user.input';
import { ReplyCreateManyUserInputEnvelope } from './reply-create-many-user-input-envelope.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithWhereUniqueWithoutUserInput } from './reply-update-with-where-unique-without-user.input';
import { ReplyUpdateManyWithWhereWithoutUserInput } from './reply-update-many-with-where-without-user.input';
import { ReplyScalarWhereInput } from './reply-scalar-where.input';
export declare class ReplyUncheckedUpdateManyWithoutUserInput {
    create?: Array<ReplyCreateWithoutUserInput>;
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutUserInput>;
    upsert?: Array<ReplyUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: ReplyCreateManyUserInputEnvelope;
    connect?: Array<ReplyWhereUniqueInput>;
    set?: Array<ReplyWhereUniqueInput>;
    disconnect?: Array<ReplyWhereUniqueInput>;
    delete?: Array<ReplyWhereUniqueInput>;
    update?: Array<ReplyUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<ReplyUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<ReplyScalarWhereInput>;
}
