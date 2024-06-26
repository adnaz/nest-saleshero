"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatNullableFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nested_float_nullable_filter_input_1 = require("./nested-float-nullable-filter.input");
let FloatNullableFilter = class FloatNullableFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FloatNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FloatNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatNullableFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], FloatNullableFilter.prototype, "not", void 0);
FloatNullableFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FloatNullableFilter);
exports.FloatNullableFilter = FloatNullableFilter;
