import { TypeSection } from './type-section.enum';
import { NestedEnumTypeSectionNullableFilter } from './nested-enum-type-section-nullable-filter.input';
export declare class EnumTypeSectionNullableFilter {
    equals?: keyof typeof TypeSection;
    in?: Array<keyof typeof TypeSection>;
    notIn?: Array<keyof typeof TypeSection>;
    not?: NestedEnumTypeSectionNullableFilter;
}
