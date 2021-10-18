import { MessageCreateWithoutAuthorInput } from './message-create-without-author.input';
import { MessageCreateOrConnectWithoutAuthorInput } from './message-create-or-connect-without-author.input';
import { MessageCreateManyAuthorInputEnvelope } from './message-create-many-author-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
export declare class MessageCreateNestedManyWithoutAuthorInput {
    create?: Array<MessageCreateWithoutAuthorInput>;
    connectOrCreate?: Array<MessageCreateOrConnectWithoutAuthorInput>;
    createMany?: MessageCreateManyAuthorInputEnvelope;
    connect?: Array<MessageWhereUniqueInput>;
}
