"use strict";
var NestedFloatNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedFloatNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_float_nullable_filter_input_1 = require("./nested-float-nullable-filter.input");
let NestedFloatNullableWithAggregatesFilter = NestedFloatNullableWithAggregatesFilter_1 = class NestedFloatNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedFloatNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedFloatNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableWithAggregatesFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableWithAggregatesFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableWithAggregatesFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableWithAggregatesFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedFloatNullableWithAggregatesFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableWithAggregatesFilter)
], NestedFloatNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], NestedFloatNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], NestedFloatNullableWithAggregatesFilter.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], NestedFloatNullableWithAggregatesFilter.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], NestedFloatNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], NestedFloatNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedFloatNullableWithAggregatesFilter = NestedFloatNullableWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedFloatNullableWithAggregatesFilter);
exports.NestedFloatNullableWithAggregatesFilter = NestedFloatNullableWithAggregatesFilter;
