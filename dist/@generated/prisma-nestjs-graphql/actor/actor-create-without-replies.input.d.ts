import { FileCreateNestedOneWithoutActorInput } from '../file/file-create-nested-one-without-actor.input';
export declare class ActorCreateWithoutRepliesInput {
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: FileCreateNestedOneWithoutActorInput;
}
