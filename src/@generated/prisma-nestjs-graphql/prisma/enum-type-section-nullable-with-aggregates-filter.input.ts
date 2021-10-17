import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeSection } from './type-section.enum';
import { NestedEnumTypeSectionNullableWithAggregatesFilter } from './nested-enum-type-section-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTypeSectionNullableFilter } from './nested-enum-type-section-nullable-filter.input';

@InputType()
export class EnumTypeSectionNullableWithAggregatesFilter {

    @Field(() => TypeSection, {nullable:true})
    equals?: keyof typeof TypeSection;

    @Field(() => [TypeSection], {nullable:true})
    in?: Array<keyof typeof TypeSection>;

    @Field(() => [TypeSection], {nullable:true})
    notIn?: Array<keyof typeof TypeSection>;

    @Field(() => NestedEnumTypeSectionNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTypeSectionNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumTypeSectionNullableFilter, {nullable:true})
    _min?: NestedEnumTypeSectionNullableFilter;

    @Field(() => NestedEnumTypeSectionNullableFilter, {nullable:true})
    _max?: NestedEnumTypeSectionNullableFilter;
}
