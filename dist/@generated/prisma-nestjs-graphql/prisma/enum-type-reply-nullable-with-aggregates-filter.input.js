"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTypeReplyNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_reply_enum_1 = require("./type-reply.enum");
const nested_enum_type_reply_nullable_with_aggregates_filter_input_1 = require("./nested-enum-type-reply-nullable-with-aggregates-filter.input");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_enum_type_reply_nullable_filter_input_1 = require("./nested-enum-type-reply-nullable-filter.input");
let EnumTypeReplyNullableWithAggregatesFilter = class EnumTypeReplyNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], EnumTypeReplyNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_reply_enum_1.TypeReply], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumTypeReplyNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_reply_enum_1.TypeReply], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumTypeReplyNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_reply_nullable_with_aggregates_filter_input_1.NestedEnumTypeReplyNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_reply_nullable_with_aggregates_filter_input_1.NestedEnumTypeReplyNullableWithAggregatesFilter)
], EnumTypeReplyNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], EnumTypeReplyNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_reply_nullable_filter_input_1.NestedEnumTypeReplyNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_reply_nullable_filter_input_1.NestedEnumTypeReplyNullableFilter)
], EnumTypeReplyNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_reply_nullable_filter_input_1.NestedEnumTypeReplyNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_reply_nullable_filter_input_1.NestedEnumTypeReplyNullableFilter)
], EnumTypeReplyNullableWithAggregatesFilter.prototype, "_max", void 0);
EnumTypeReplyNullableWithAggregatesFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], EnumTypeReplyNullableWithAggregatesFilter);
exports.EnumTypeReplyNullableWithAggregatesFilter = EnumTypeReplyNullableWithAggregatesFilter;
