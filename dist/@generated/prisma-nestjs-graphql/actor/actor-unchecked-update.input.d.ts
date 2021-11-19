import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReplyUncheckedUpdateManyWithoutUserInput } from '../reply/reply-unchecked-update-many-without-user.input';
export declare class ActorUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    fileId?: NullableIntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    replies?: ReplyUncheckedUpdateManyWithoutUserInput;
}
