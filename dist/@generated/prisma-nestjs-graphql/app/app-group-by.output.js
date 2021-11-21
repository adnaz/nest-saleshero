"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGroupBy = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const app_count_aggregate_output_1 = require("./app-count-aggregate.output");
const app_avg_aggregate_output_1 = require("./app-avg-aggregate.output");
const app_sum_aggregate_output_1 = require("./app-sum-aggregate.output");
const app_min_aggregate_output_1 = require("./app-min-aggregate.output");
const app_max_aggregate_output_1 = require("./app-max-aggregate.output");
let AppGroupBy = class AppGroupBy {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], AppGroupBy.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppGroupBy.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_count_aggregate_output_1.AppCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_count_aggregate_output_1.AppCountAggregate)
], AppGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_avg_aggregate_output_1.AppAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_avg_aggregate_output_1.AppAvgAggregate)
], AppGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_sum_aggregate_output_1.AppSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_sum_aggregate_output_1.AppSumAggregate)
], AppGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_min_aggregate_output_1.AppMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_min_aggregate_output_1.AppMinAggregate)
], AppGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_max_aggregate_output_1.AppMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_max_aggregate_output_1.AppMaxAggregate)
], AppGroupBy.prototype, "_max", void 0);
AppGroupBy = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AppGroupBy);
exports.AppGroupBy = AppGroupBy;
