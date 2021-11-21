"use strict";
var NestedBoolNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_bool_nullable_filter_input_1 = require("./nested-bool-nullable-filter.input");
let NestedBoolNullableWithAggregatesFilter = NestedBoolNullableWithAggregatesFilter_1 = class NestedBoolNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], NestedBoolNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedBoolNullableWithAggregatesFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedBoolNullableWithAggregatesFilter)
], NestedBoolNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], NestedBoolNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_bool_nullable_filter_input_1.NestedBoolNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_bool_nullable_filter_input_1.NestedBoolNullableFilter)
], NestedBoolNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_bool_nullable_filter_input_1.NestedBoolNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_bool_nullable_filter_input_1.NestedBoolNullableFilter)
], NestedBoolNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedBoolNullableWithAggregatesFilter = NestedBoolNullableWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedBoolNullableWithAggregatesFilter);
exports.NestedBoolNullableWithAggregatesFilter = NestedBoolNullableWithAggregatesFilter;
