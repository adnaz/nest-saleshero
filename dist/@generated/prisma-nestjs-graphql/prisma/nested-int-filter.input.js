"use strict";
var NestedIntFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedIntFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let NestedIntFilter = NestedIntFilter_1 = class NestedIntFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedIntFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedIntFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedIntFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedIntFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedIntFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedIntFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NestedIntFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedIntFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter)
], NestedIntFilter.prototype, "not", void 0);
NestedIntFilter = NestedIntFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedIntFilter);
exports.NestedIntFilter = NestedIntFilter;
