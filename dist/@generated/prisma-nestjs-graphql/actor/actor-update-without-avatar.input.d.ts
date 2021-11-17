import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReplyUpdateManyWithoutUserInput } from '../reply/reply-update-many-without-user.input';
export declare class ActorUpdateWithoutAvatarInput {
    name?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    replies?: ReplyUpdateManyWithoutUserInput;
}
