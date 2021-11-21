"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorGroupBy = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const actor_count_aggregate_output_1 = require("./actor-count-aggregate.output");
const actor_avg_aggregate_output_1 = require("./actor-avg-aggregate.output");
const actor_sum_aggregate_output_1 = require("./actor-sum-aggregate.output");
const actor_min_aggregate_output_1 = require("./actor-min-aggregate.output");
const actor_max_aggregate_output_1 = require("./actor-max-aggregate.output");
let ActorGroupBy = class ActorGroupBy {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ActorGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ActorGroupBy.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ActorGroupBy.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_count_aggregate_output_1.ActorCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_count_aggregate_output_1.ActorCountAggregate)
], ActorGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_avg_aggregate_output_1.ActorAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_avg_aggregate_output_1.ActorAvgAggregate)
], ActorGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_sum_aggregate_output_1.ActorSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_sum_aggregate_output_1.ActorSumAggregate)
], ActorGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_min_aggregate_output_1.ActorMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_min_aggregate_output_1.ActorMinAggregate)
], ActorGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_max_aggregate_output_1.ActorMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_max_aggregate_output_1.ActorMaxAggregate)
], ActorGroupBy.prototype, "_max", void 0);
ActorGroupBy = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], ActorGroupBy);
exports.ActorGroupBy = ActorGroupBy;
