import { MessageCreateWithoutAuthorInput } from './message-create-without-author.input';
import { MessageCreateOrConnectWithoutAuthorInput } from './message-create-or-connect-without-author.input';
import { MessageUpsertWithWhereUniqueWithoutAuthorInput } from './message-upsert-with-where-unique-without-author.input';
import { MessageCreateManyAuthorInputEnvelope } from './message-create-many-author-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutAuthorInput } from './message-update-with-where-unique-without-author.input';
import { MessageUpdateManyWithWhereWithoutAuthorInput } from './message-update-many-with-where-without-author.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';
export declare class MessageUncheckedUpdateManyWithoutAuthorInput {
    create?: Array<MessageCreateWithoutAuthorInput>;
    connectOrCreate?: Array<MessageCreateOrConnectWithoutAuthorInput>;
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutAuthorInput>;
    createMany?: MessageCreateManyAuthorInputEnvelope;
    connect?: Array<MessageWhereUniqueInput>;
    set?: Array<MessageWhereUniqueInput>;
    disconnect?: Array<MessageWhereUniqueInput>;
    delete?: Array<MessageWhereUniqueInput>;
    update?: Array<MessageUpdateWithWhereUniqueWithoutAuthorInput>;
    updateMany?: Array<MessageUpdateManyWithWhereWithoutAuthorInput>;
    deleteMany?: Array<MessageScalarWhereInput>;
}
