import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeSection } from './type-section.enum';

@InputType()
export class NullableEnumTypeSectionFieldUpdateOperationsInput {

    @Field(() => TypeSection, {nullable:true})
    set?: keyof typeof TypeSection;
}
