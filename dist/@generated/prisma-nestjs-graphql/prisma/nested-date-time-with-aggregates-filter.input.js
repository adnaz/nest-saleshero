"use strict";
var NestedDateTimeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_date_time_filter_input_1 = require("./nested-date-time-filter.input");
let NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter_1 = class NestedDateTimeWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedDateTimeWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedDateTimeWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedDateTimeWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedDateTimeWithAggregatesFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedDateTimeWithAggregatesFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedDateTimeWithAggregatesFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedDateTimeWithAggregatesFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedDateTimeWithAggregatesFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedDateTimeWithAggregatesFilter)
], NestedDateTimeWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_filter_input_1.NestedIntFilter)
], NestedDateTimeWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_date_time_filter_input_1.NestedDateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_date_time_filter_input_1.NestedDateTimeFilter)
], NestedDateTimeWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_date_time_filter_input_1.NestedDateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_date_time_filter_input_1.NestedDateTimeFilter)
], NestedDateTimeWithAggregatesFilter.prototype, "_max", void 0);
NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedDateTimeWithAggregatesFilter);
exports.NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter;
