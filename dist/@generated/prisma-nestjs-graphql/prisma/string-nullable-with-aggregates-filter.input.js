"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_string_nullable_with_aggregates_filter_input_1 = require("./nested-string-nullable-with-aggregates-filter.input");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_string_nullable_filter_input_1 = require("./nested-string-nullable-filter.input");
let StringNullableWithAggregatesFilter = class StringNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], StringNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], StringNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "contains", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_string_nullable_with_aggregates_filter_input_1.NestedStringNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_string_nullable_with_aggregates_filter_input_1.NestedStringNullableWithAggregatesFilter)
], StringNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], StringNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_string_nullable_filter_input_1.NestedStringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_string_nullable_filter_input_1.NestedStringNullableFilter)
], StringNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_string_nullable_filter_input_1.NestedStringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_string_nullable_filter_input_1.NestedStringNullableFilter)
], StringNullableWithAggregatesFilter.prototype, "_max", void 0);
StringNullableWithAggregatesFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], StringNullableWithAggregatesFilter);
exports.StringNullableWithAggregatesFilter = StringNullableWithAggregatesFilter;
