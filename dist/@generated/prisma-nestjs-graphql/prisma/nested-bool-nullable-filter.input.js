"use strict";
var NestedBoolNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolNullableFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let NestedBoolNullableFilter = NestedBoolNullableFilter_1 = class NestedBoolNullableFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], NestedBoolNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedBoolNullableFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedBoolNullableFilter)
], NestedBoolNullableFilter.prototype, "not", void 0);
NestedBoolNullableFilter = NestedBoolNullableFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedBoolNullableFilter);
exports.NestedBoolNullableFilter = NestedBoolNullableFilter;
