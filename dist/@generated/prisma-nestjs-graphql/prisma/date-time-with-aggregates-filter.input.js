"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_date_time_with_aggregates_filter_input_1 = require("./nested-date-time-with-aggregates-filter.input");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_date_time_filter_input_1 = require("./nested-date-time-filter.input");
let DateTimeWithAggregatesFilter = class DateTimeWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], DateTimeWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], DateTimeWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_date_time_with_aggregates_filter_input_1.NestedDateTimeWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_date_time_with_aggregates_filter_input_1.NestedDateTimeWithAggregatesFilter)
], DateTimeWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_filter_input_1.NestedIntFilter)
], DateTimeWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_date_time_filter_input_1.NestedDateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_date_time_filter_input_1.NestedDateTimeFilter)
], DateTimeWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_date_time_filter_input_1.NestedDateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_date_time_filter_input_1.NestedDateTimeFilter)
], DateTimeWithAggregatesFilter.prototype, "_max", void 0);
DateTimeWithAggregatesFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], DateTimeWithAggregatesFilter);
exports.DateTimeWithAggregatesFilter = DateTimeWithAggregatesFilter;
