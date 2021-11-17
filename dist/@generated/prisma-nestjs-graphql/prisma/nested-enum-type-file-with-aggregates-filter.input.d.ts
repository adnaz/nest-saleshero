import { TypeFile } from './type-file.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTypeFileFilter } from './nested-enum-type-file-filter.input';
export declare class NestedEnumTypeFileWithAggregatesFilter {
    equals?: keyof typeof TypeFile;
    in?: Array<keyof typeof TypeFile>;
    notIn?: Array<keyof typeof TypeFile>;
    not?: NestedEnumTypeFileWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumTypeFileFilter;
    _max?: NestedEnumTypeFileFilter;
}
