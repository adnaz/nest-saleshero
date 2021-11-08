import { ReplyCreateWithoutUserInput } from './reply-create-without-user.input';
import { ReplyCreateOrConnectWithoutUserInput } from './reply-create-or-connect-without-user.input';
import { ReplyCreateManyUserInputEnvelope } from './reply-create-many-user-input-envelope.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
export declare class ReplyCreateNestedManyWithoutUserInput {
    create?: Array<ReplyCreateWithoutUserInput>;
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutUserInput>;
    createMany?: ReplyCreateManyUserInputEnvelope;
    connect?: Array<ReplyWhereUniqueInput>;
}
