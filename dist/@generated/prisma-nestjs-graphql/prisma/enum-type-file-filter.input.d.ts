import { TypeFile } from './type-file.enum';
import { NestedEnumTypeFileFilter } from './nested-enum-type-file-filter.input';
export declare class EnumTypeFileFilter {
    equals?: keyof typeof TypeFile;
    in?: Array<keyof typeof TypeFile>;
    notIn?: Array<keyof typeof TypeFile>;
    not?: NestedEnumTypeFileFilter;
}
