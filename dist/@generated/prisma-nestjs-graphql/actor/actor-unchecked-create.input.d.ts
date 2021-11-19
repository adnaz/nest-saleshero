import { ReplyUncheckedCreateNestedManyWithoutUserInput } from '../reply/reply-unchecked-create-nested-many-without-user.input';
export declare class ActorUncheckedCreateInput {
    id?: number;
    name?: string;
    fileId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    replies?: ReplyUncheckedCreateNestedManyWithoutUserInput;
}
