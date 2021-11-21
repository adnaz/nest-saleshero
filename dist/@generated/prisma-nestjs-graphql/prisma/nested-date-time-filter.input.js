"use strict";
var NestedDateTimeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let NestedDateTimeFilter = NestedDateTimeFilter_1 = class NestedDateTimeFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedDateTimeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedDateTimeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedDateTimeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedDateTimeFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedDateTimeFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedDateTimeFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedDateTimeFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedDateTimeFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedDateTimeFilter)
], NestedDateTimeFilter.prototype, "not", void 0);
NestedDateTimeFilter = NestedDateTimeFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedDateTimeFilter);
exports.NestedDateTimeFilter = NestedDateTimeFilter;
