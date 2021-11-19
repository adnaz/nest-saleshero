import { TypeReply } from './type-reply.enum';
export declare class NestedEnumTypeReplyFilter {
    equals?: keyof typeof TypeReply;
    in?: Array<keyof typeof TypeReply>;
    notIn?: Array<keyof typeof TypeReply>;
    not?: NestedEnumTypeReplyFilter;
}
