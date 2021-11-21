"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAggregateArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_input_1 = require("./app-where.input");
const app_order_by_with_relation_input_1 = require("./app-order-by-with-relation.input");
const app_where_unique_input_1 = require("./app-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const app_count_aggregate_input_1 = require("./app-count-aggregate.input");
const app_avg_aggregate_input_1 = require("./app-avg-aggregate.input");
const app_sum_aggregate_input_1 = require("./app-sum-aggregate.input");
const app_min_aggregate_input_1 = require("./app-min-aggregate.input");
const app_max_aggregate_input_1 = require("./app-max-aggregate.input");
let AppAggregateArgs = class AppAggregateArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_input_1.AppWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_where_input_1.AppWhereInput)
], AppAggregateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_order_by_with_relation_input_1.AppOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppAggregateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_unique_input_1.AppWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_where_unique_input_1.AppWhereUniqueInput)
], AppAggregateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppAggregateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppAggregateArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_count_aggregate_input_1.AppCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_count_aggregate_input_1.AppCountAggregateInput)
], AppAggregateArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_avg_aggregate_input_1.AppAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_avg_aggregate_input_1.AppAvgAggregateInput)
], AppAggregateArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_sum_aggregate_input_1.AppSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_sum_aggregate_input_1.AppSumAggregateInput)
], AppAggregateArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_min_aggregate_input_1.AppMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_min_aggregate_input_1.AppMinAggregateInput)
], AppAggregateArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_max_aggregate_input_1.AppMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_max_aggregate_input_1.AppMaxAggregateInput)
], AppAggregateArgs.prototype, "_max", void 0);
AppAggregateArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], AppAggregateArgs);
exports.AppAggregateArgs = AppAggregateArgs;
