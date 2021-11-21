"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTypeReplyNullableFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_reply_enum_1 = require("./type-reply.enum");
const nested_enum_type_reply_nullable_filter_input_1 = require("./nested-enum-type-reply-nullable-filter.input");
let EnumTypeReplyNullableFilter = class EnumTypeReplyNullableFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], EnumTypeReplyNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_reply_enum_1.TypeReply], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumTypeReplyNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_reply_enum_1.TypeReply], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumTypeReplyNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_reply_nullable_filter_input_1.NestedEnumTypeReplyNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_reply_nullable_filter_input_1.NestedEnumTypeReplyNullableFilter)
], EnumTypeReplyNullableFilter.prototype, "not", void 0);
EnumTypeReplyNullableFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], EnumTypeReplyNullableFilter);
exports.EnumTypeReplyNullableFilter = EnumTypeReplyNullableFilter;
