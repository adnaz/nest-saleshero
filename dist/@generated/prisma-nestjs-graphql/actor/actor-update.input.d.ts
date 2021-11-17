import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutActorInput } from '../file/file-update-one-without-actor.input';
import { ReplyUpdateManyWithoutUserInput } from '../reply/reply-update-many-without-user.input';
export declare class ActorUpdateInput {
    name?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    avatar?: FileUpdateOneWithoutActorInput;
    replies?: ReplyUpdateManyWithoutUserInput;
}
