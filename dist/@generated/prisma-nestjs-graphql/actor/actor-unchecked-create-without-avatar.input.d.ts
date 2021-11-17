import { ReplyUncheckedCreateNestedManyWithoutUserInput } from '../reply/reply-unchecked-create-nested-many-without-user.input';
export declare class ActorUncheckedCreateWithoutAvatarInput {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    replies?: ReplyUncheckedCreateNestedManyWithoutUserInput;
}
