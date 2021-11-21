"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolNullableFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_bool_nullable_filter_input_1 = require("./nested-bool-nullable-filter.input");
let BoolNullableFilter = class BoolNullableFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BoolNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_bool_nullable_filter_input_1.NestedBoolNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_bool_nullable_filter_input_1.NestedBoolNullableFilter)
], BoolNullableFilter.prototype, "not", void 0);
BoolNullableFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], BoolNullableFilter);
exports.BoolNullableFilter = BoolNullableFilter;
