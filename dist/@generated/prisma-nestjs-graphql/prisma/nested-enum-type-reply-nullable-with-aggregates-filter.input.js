"use strict";
var NestedEnumTypeReplyNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTypeReplyNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_reply_enum_1 = require("./type-reply.enum");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_enum_type_reply_nullable_filter_input_1 = require("./nested-enum-type-reply-nullable-filter.input");
let NestedEnumTypeReplyNullableWithAggregatesFilter = NestedEnumTypeReplyNullableWithAggregatesFilter_1 = class NestedEnumTypeReplyNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedEnumTypeReplyNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_reply_enum_1.TypeReply], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumTypeReplyNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_reply_enum_1.TypeReply], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumTypeReplyNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedEnumTypeReplyNullableWithAggregatesFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedEnumTypeReplyNullableWithAggregatesFilter)
], NestedEnumTypeReplyNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], NestedEnumTypeReplyNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_reply_nullable_filter_input_1.NestedEnumTypeReplyNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_reply_nullable_filter_input_1.NestedEnumTypeReplyNullableFilter)
], NestedEnumTypeReplyNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_reply_nullable_filter_input_1.NestedEnumTypeReplyNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_reply_nullable_filter_input_1.NestedEnumTypeReplyNullableFilter)
], NestedEnumTypeReplyNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumTypeReplyNullableWithAggregatesFilter = NestedEnumTypeReplyNullableWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedEnumTypeReplyNullableWithAggregatesFilter);
exports.NestedEnumTypeReplyNullableWithAggregatesFilter = NestedEnumTypeReplyNullableWithAggregatesFilter;
