import { ReplyCreateNestedManyWithoutUserInput } from '../reply/reply-create-nested-many-without-user.input';
export declare class ActorCreateInput {
    name?: string;
    avatar?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    replies?: ReplyCreateNestedManyWithoutUserInput;
}
