"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_date_time_filter_input_1 = require("./nested-date-time-filter.input");
let DateTimeFilter = class DateTimeFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], DateTimeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], DateTimeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], DateTimeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], DateTimeFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], DateTimeFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], DateTimeFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], DateTimeFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_date_time_filter_input_1.NestedDateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_date_time_filter_input_1.NestedDateTimeFilter)
], DateTimeFilter.prototype, "not", void 0);
DateTimeFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], DateTimeFilter);
exports.DateTimeFilter = DateTimeFilter;
