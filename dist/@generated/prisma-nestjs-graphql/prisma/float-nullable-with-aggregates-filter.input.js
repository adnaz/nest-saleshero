"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nested_float_nullable_with_aggregates_filter_input_1 = require("./nested-float-nullable-with-aggregates-filter.input");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_float_nullable_filter_input_1 = require("./nested-float-nullable-filter.input");
let FloatNullableWithAggregatesFilter = class FloatNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FloatNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FloatNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_float_nullable_with_aggregates_filter_input_1.NestedFloatNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_float_nullable_with_aggregates_filter_input_1.NestedFloatNullableWithAggregatesFilter)
], FloatNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_max", void 0);
FloatNullableWithAggregatesFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FloatNullableWithAggregatesFilter);
exports.FloatNullableWithAggregatesFilter = FloatNullableWithAggregatesFilter;
