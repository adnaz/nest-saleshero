import { FileCreateNestedOneWithoutActorInput } from '../file/file-create-nested-one-without-actor.input';
import { ReplyCreateNestedManyWithoutUserInput } from '../reply/reply-create-nested-many-without-user.input';
export declare class ActorCreateInput {
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: FileCreateNestedOneWithoutActorInput;
    replies?: ReplyCreateNestedManyWithoutUserInput;
}
