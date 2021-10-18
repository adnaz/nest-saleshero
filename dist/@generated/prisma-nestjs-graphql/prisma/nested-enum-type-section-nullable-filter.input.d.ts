import { TypeSection } from './type-section.enum';
export declare class NestedEnumTypeSectionNullableFilter {
    equals?: keyof typeof TypeSection;
    in?: Array<keyof typeof TypeSection>;
    notIn?: Array<keyof typeof TypeSection>;
    not?: NestedEnumTypeSectionNullableFilter;
}
