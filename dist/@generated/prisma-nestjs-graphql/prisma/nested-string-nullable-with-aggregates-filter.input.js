"use strict";
var NestedStringNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedStringNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_string_nullable_filter_input_1 = require("./nested-string-nullable-filter.input");
let NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter_1 = class NestedStringNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedStringNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedStringNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "contains", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedStringNullableWithAggregatesFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedStringNullableWithAggregatesFilter)
], NestedStringNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], NestedStringNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_string_nullable_filter_input_1.NestedStringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_string_nullable_filter_input_1.NestedStringNullableFilter)
], NestedStringNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_string_nullable_filter_input_1.NestedStringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_string_nullable_filter_input_1.NestedStringNullableFilter)
], NestedStringNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedStringNullableWithAggregatesFilter);
exports.NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter;
