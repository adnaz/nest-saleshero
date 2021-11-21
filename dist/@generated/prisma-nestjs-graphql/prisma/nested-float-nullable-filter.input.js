"use strict";
var NestedFloatNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedFloatNullableFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let NestedFloatNullableFilter = NestedFloatNullableFilter_1 = class NestedFloatNullableFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedFloatNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedFloatNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatNullableFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedFloatNullableFilter)
], NestedFloatNullableFilter.prototype, "not", void 0);
NestedFloatNullableFilter = NestedFloatNullableFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedFloatNullableFilter);
exports.NestedFloatNullableFilter = NestedFloatNullableFilter;
