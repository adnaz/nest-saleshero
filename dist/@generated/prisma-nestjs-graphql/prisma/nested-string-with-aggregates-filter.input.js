"use strict";
var NestedStringWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedStringWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_string_filter_input_1 = require("./nested-string-filter.input");
let NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = class NestedStringWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedStringWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedStringWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "contains", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "startsWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "endsWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedStringWithAggregatesFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedStringWithAggregatesFilter)
], NestedStringWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_filter_input_1.NestedIntFilter)
], NestedStringWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_string_filter_input_1.NestedStringFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_string_filter_input_1.NestedStringFilter)
], NestedStringWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_string_filter_input_1.NestedStringFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_string_filter_input_1.NestedStringFilter)
], NestedStringWithAggregatesFilter.prototype, "_max", void 0);
NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedStringWithAggregatesFilter);
exports.NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter;
