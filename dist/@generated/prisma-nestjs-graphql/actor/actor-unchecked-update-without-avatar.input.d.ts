import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReplyUncheckedUpdateManyWithoutUserInput } from '../reply/reply-unchecked-update-many-without-user.input';
export declare class ActorUncheckedUpdateWithoutAvatarInput {
    id?: IntFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    replies?: ReplyUncheckedUpdateManyWithoutUserInput;
}
