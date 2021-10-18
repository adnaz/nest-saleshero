import { TypeSection } from './type-section.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTypeSectionNullableFilter } from './nested-enum-type-section-nullable-filter.input';
export declare class NestedEnumTypeSectionNullableWithAggregatesFilter {
    equals?: keyof typeof TypeSection;
    in?: Array<keyof typeof TypeSection>;
    notIn?: Array<keyof typeof TypeSection>;
    not?: NestedEnumTypeSectionNullableWithAggregatesFilter;
    _count?: NestedIntNullableFilter;
    _min?: NestedEnumTypeSectionNullableFilter;
    _max?: NestedEnumTypeSectionNullableFilter;
}
