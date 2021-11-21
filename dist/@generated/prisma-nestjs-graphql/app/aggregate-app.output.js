"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateApp = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_count_aggregate_output_1 = require("./app-count-aggregate.output");
const app_avg_aggregate_output_1 = require("./app-avg-aggregate.output");
const app_sum_aggregate_output_1 = require("./app-sum-aggregate.output");
const app_min_aggregate_output_1 = require("./app-min-aggregate.output");
const app_max_aggregate_output_1 = require("./app-max-aggregate.output");
let AggregateApp = class AggregateApp {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_count_aggregate_output_1.AppCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_count_aggregate_output_1.AppCountAggregate)
], AggregateApp.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_avg_aggregate_output_1.AppAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_avg_aggregate_output_1.AppAvgAggregate)
], AggregateApp.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_sum_aggregate_output_1.AppSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_sum_aggregate_output_1.AppSumAggregate)
], AggregateApp.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_min_aggregate_output_1.AppMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_min_aggregate_output_1.AppMinAggregate)
], AggregateApp.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_max_aggregate_output_1.AppMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_max_aggregate_output_1.AppMaxAggregate)
], AggregateApp.prototype, "_max", void 0);
AggregateApp = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AggregateApp);
exports.AggregateApp = AggregateApp;
