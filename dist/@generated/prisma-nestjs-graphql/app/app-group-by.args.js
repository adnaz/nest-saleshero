"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGroupByArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_input_1 = require("./app-where.input");
const app_order_by_with_aggregation_input_1 = require("./app-order-by-with-aggregation.input");
const app_scalar_field_enum_1 = require("./app-scalar-field.enum");
const app_scalar_where_with_aggregates_input_1 = require("./app-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const app_count_aggregate_input_1 = require("./app-count-aggregate.input");
const app_avg_aggregate_input_1 = require("./app-avg-aggregate.input");
const app_sum_aggregate_input_1 = require("./app-sum-aggregate.input");
const app_min_aggregate_input_1 = require("./app-min-aggregate.input");
const app_max_aggregate_input_1 = require("./app-max-aggregate.input");
let AppGroupByArgs = class AppGroupByArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_input_1.AppWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_where_input_1.AppWhereInput)
], AppGroupByArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_order_by_with_aggregation_input_1.AppOrderByWithAggregationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppGroupByArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_scalar_field_enum_1.AppScalarFieldEnum], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppGroupByArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_scalar_where_with_aggregates_input_1.AppScalarWhereWithAggregatesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_scalar_where_with_aggregates_input_1.AppScalarWhereWithAggregatesInput)
], AppGroupByArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppGroupByArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppGroupByArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_count_aggregate_input_1.AppCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_count_aggregate_input_1.AppCountAggregateInput)
], AppGroupByArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_avg_aggregate_input_1.AppAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_avg_aggregate_input_1.AppAvgAggregateInput)
], AppGroupByArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_sum_aggregate_input_1.AppSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_sum_aggregate_input_1.AppSumAggregateInput)
], AppGroupByArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_min_aggregate_input_1.AppMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_min_aggregate_input_1.AppMinAggregateInput)
], AppGroupByArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_max_aggregate_input_1.AppMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_max_aggregate_input_1.AppMaxAggregateInput)
], AppGroupByArgs.prototype, "_max", void 0);
AppGroupByArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], AppGroupByArgs);
exports.AppGroupByArgs = AppGroupByArgs;
