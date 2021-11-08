import { TypeReply } from './type-reply.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTypeReplyFilter } from './nested-enum-type-reply-filter.input';
export declare class NestedEnumTypeReplyWithAggregatesFilter {
    equals?: keyof typeof TypeReply;
    in?: Array<keyof typeof TypeReply>;
    notIn?: Array<keyof typeof TypeReply>;
    not?: NestedEnumTypeReplyWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumTypeReplyFilter;
    _max?: NestedEnumTypeReplyFilter;
}
