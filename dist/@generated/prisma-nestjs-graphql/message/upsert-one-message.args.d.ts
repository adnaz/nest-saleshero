import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageCreateInput } from './message-create.input';
import { MessageUpdateInput } from './message-update.input';
export declare class UpsertOneMessageArgs {
    where: MessageWhereUniqueInput;
    create: MessageCreateInput;
    update: MessageUpdateInput;
}
