"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_bool_nullable_with_aggregates_filter_input_1 = require("./nested-bool-nullable-with-aggregates-filter.input");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_bool_nullable_filter_input_1 = require("./nested-bool-nullable-filter.input");
let BoolNullableWithAggregatesFilter = class BoolNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BoolNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_bool_nullable_with_aggregates_filter_input_1.NestedBoolNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_bool_nullable_with_aggregates_filter_input_1.NestedBoolNullableWithAggregatesFilter)
], BoolNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], BoolNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_bool_nullable_filter_input_1.NestedBoolNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_bool_nullable_filter_input_1.NestedBoolNullableFilter)
], BoolNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_bool_nullable_filter_input_1.NestedBoolNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_bool_nullable_filter_input_1.NestedBoolNullableFilter)
], BoolNullableWithAggregatesFilter.prototype, "_max", void 0);
BoolNullableWithAggregatesFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], BoolNullableWithAggregatesFilter);
exports.BoolNullableWithAggregatesFilter = BoolNullableWithAggregatesFilter;
