"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nested_int_nullable_with_aggregates_filter_input_1 = require("./nested-int-nullable-with-aggregates-filter.input");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_float_nullable_filter_input_1 = require("./nested-float-nullable-filter.input");
let IntNullableWithAggregatesFilter = class IntNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], IntNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], IntNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntNullableWithAggregatesFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntNullableWithAggregatesFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntNullableWithAggregatesFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntNullableWithAggregatesFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_with_aggregates_filter_input_1.NestedIntNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_with_aggregates_filter_input_1.NestedIntNullableWithAggregatesFilter)
], IntNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], IntNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], IntNullableWithAggregatesFilter.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], IntNullableWithAggregatesFilter.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], IntNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], IntNullableWithAggregatesFilter.prototype, "_max", void 0);
IntNullableWithAggregatesFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], IntNullableWithAggregatesFilter);
exports.IntNullableWithAggregatesFilter = IntNullableWithAggregatesFilter;
