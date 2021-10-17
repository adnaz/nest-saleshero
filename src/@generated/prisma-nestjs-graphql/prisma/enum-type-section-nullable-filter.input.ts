import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeSection } from './type-section.enum';
import { NestedEnumTypeSectionNullableFilter } from './nested-enum-type-section-nullable-filter.input';

@InputType()
export class EnumTypeSectionNullableFilter {

    @Field(() => TypeSection, {nullable:true})
    equals?: keyof typeof TypeSection;

    @Field(() => [TypeSection], {nullable:true})
    in?: Array<keyof typeof TypeSection>;

    @Field(() => [TypeSection], {nullable:true})
    notIn?: Array<keyof typeof TypeSection>;

    @Field(() => NestedEnumTypeSectionNullableFilter, {nullable:true})
    not?: NestedEnumTypeSectionNullableFilter;
}
