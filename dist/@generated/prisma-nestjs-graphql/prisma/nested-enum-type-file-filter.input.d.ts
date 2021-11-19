import { TypeFile } from './type-file.enum';
export declare class NestedEnumTypeFileFilter {
    equals?: keyof typeof TypeFile;
    in?: Array<keyof typeof TypeFile>;
    notIn?: Array<keyof typeof TypeFile>;
    not?: NestedEnumTypeFileFilter;
}
