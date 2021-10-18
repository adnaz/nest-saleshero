import { TypeReply } from './type-reply.enum';
import { NestedEnumTypeReplyWithAggregatesFilter } from './nested-enum-type-reply-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTypeReplyFilter } from './nested-enum-type-reply-filter.input';
export declare class EnumTypeReplyWithAggregatesFilter {
    equals?: keyof typeof TypeReply;
    in?: Array<keyof typeof TypeReply>;
    notIn?: Array<keyof typeof TypeReply>;
    not?: NestedEnumTypeReplyWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumTypeReplyFilter;
    _max?: NestedEnumTypeReplyFilter;
}
