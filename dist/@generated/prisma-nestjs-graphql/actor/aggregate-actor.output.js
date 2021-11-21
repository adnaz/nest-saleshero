"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateActor = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_count_aggregate_output_1 = require("./actor-count-aggregate.output");
const actor_avg_aggregate_output_1 = require("./actor-avg-aggregate.output");
const actor_sum_aggregate_output_1 = require("./actor-sum-aggregate.output");
const actor_min_aggregate_output_1 = require("./actor-min-aggregate.output");
const actor_max_aggregate_output_1 = require("./actor-max-aggregate.output");
let AggregateActor = class AggregateActor {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_count_aggregate_output_1.ActorCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_count_aggregate_output_1.ActorCountAggregate)
], AggregateActor.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_avg_aggregate_output_1.ActorAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_avg_aggregate_output_1.ActorAvgAggregate)
], AggregateActor.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_sum_aggregate_output_1.ActorSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_sum_aggregate_output_1.ActorSumAggregate)
], AggregateActor.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_min_aggregate_output_1.ActorMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_min_aggregate_output_1.ActorMinAggregate)
], AggregateActor.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_max_aggregate_output_1.ActorMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_max_aggregate_output_1.ActorMaxAggregate)
], AggregateActor.prototype, "_max", void 0);
AggregateActor = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AggregateActor);
exports.AggregateActor = AggregateActor;
