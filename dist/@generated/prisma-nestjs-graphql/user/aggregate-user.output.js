"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUser = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_count_aggregate_output_1 = require("./user-count-aggregate.output");
const user_avg_aggregate_output_1 = require("./user-avg-aggregate.output");
const user_sum_aggregate_output_1 = require("./user-sum-aggregate.output");
const user_min_aggregate_output_1 = require("./user-min-aggregate.output");
const user_max_aggregate_output_1 = require("./user-max-aggregate.output");
let AggregateUser = class AggregateUser {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_count_aggregate_output_1.UserCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_count_aggregate_output_1.UserCountAggregate)
], AggregateUser.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_avg_aggregate_output_1.UserAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_avg_aggregate_output_1.UserAvgAggregate)
], AggregateUser.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_sum_aggregate_output_1.UserSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_sum_aggregate_output_1.UserSumAggregate)
], AggregateUser.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_min_aggregate_output_1.UserMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_min_aggregate_output_1.UserMinAggregate)
], AggregateUser.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_max_aggregate_output_1.UserMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_max_aggregate_output_1.UserMaxAggregate)
], AggregateUser.prototype, "_max", void 0);
AggregateUser = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AggregateUser);
exports.AggregateUser = AggregateUser;
