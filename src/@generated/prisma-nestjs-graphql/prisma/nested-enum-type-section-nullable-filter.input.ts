import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeSection } from './type-section.enum';

@InputType()
export class NestedEnumTypeSectionNullableFilter {

    @Field(() => TypeSection, {nullable:true})
    equals?: keyof typeof TypeSection;

    @Field(() => [TypeSection], {nullable:true})
    in?: Array<keyof typeof TypeSection>;

    @Field(() => [TypeSection], {nullable:true})
    notIn?: Array<keyof typeof TypeSection>;

    @Field(() => NestedEnumTypeSectionNullableFilter, {nullable:true})
    not?: NestedEnumTypeSectionNullableFilter;
}
