import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeFile } from './type-file.enum';

@InputType()
export class NullableEnumTypeFileFieldUpdateOperationsInput {

    @Field(() => TypeFile, {nullable:true})
    set?: keyof typeof TypeFile;
}
