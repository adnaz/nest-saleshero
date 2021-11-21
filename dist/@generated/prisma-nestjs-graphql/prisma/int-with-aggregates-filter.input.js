"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nested_int_with_aggregates_filter_input_1 = require("./nested-int-with-aggregates-filter.input");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_float_filter_input_1 = require("./nested-float-filter.input");
let IntWithAggregatesFilter = class IntWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], IntWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], IntWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntWithAggregatesFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntWithAggregatesFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntWithAggregatesFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntWithAggregatesFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_with_aggregates_filter_input_1.NestedIntWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_with_aggregates_filter_input_1.NestedIntWithAggregatesFilter)
], IntWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_filter_input_1.NestedIntFilter)
], IntWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_float_filter_input_1.NestedFloatFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_float_filter_input_1.NestedFloatFilter)
], IntWithAggregatesFilter.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_filter_input_1.NestedIntFilter)
], IntWithAggregatesFilter.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_filter_input_1.NestedIntFilter)
], IntWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_filter_input_1.NestedIntFilter)
], IntWithAggregatesFilter.prototype, "_max", void 0);
IntWithAggregatesFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], IntWithAggregatesFilter);
exports.IntWithAggregatesFilter = IntWithAggregatesFilter;
