import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutActorInput } from '../file/file-update-one-without-actor.input';
import { ReplyUpdateManyWithoutUserInput } from '../reply/reply-update-many-without-user.input';

@InputType()
export class ActorUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FileUpdateOneWithoutActorInput, {nullable:true})
    avatar?: FileUpdateOneWithoutActorInput;

    @Field(() => ReplyUpdateManyWithoutUserInput, {nullable:true})
    replies?: ReplyUpdateManyWithoutUserInput;
}
