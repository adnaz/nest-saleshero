import { TypeReply } from './type-reply.enum';
import { NestedEnumTypeReplyFilter } from './nested-enum-type-reply-filter.input';
export declare class EnumTypeReplyFilter {
    equals?: keyof typeof TypeReply;
    in?: Array<keyof typeof TypeReply>;
    notIn?: Array<keyof typeof TypeReply>;
    not?: NestedEnumTypeReplyFilter;
}
