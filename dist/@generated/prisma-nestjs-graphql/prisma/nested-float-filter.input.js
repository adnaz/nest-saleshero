"use strict";
var NestedFloatFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedFloatFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let NestedFloatFilter = NestedFloatFilter_1 = class NestedFloatFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedFloatFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedFloatFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedFloatFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedFloatFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedFloatFilter)
], NestedFloatFilter.prototype, "not", void 0);
NestedFloatFilter = NestedFloatFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedFloatFilter);
exports.NestedFloatFilter = NestedFloatFilter;
