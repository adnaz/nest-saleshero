"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorAggregateArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_where_input_1 = require("./actor-where.input");
const actor_order_by_with_relation_input_1 = require("./actor-order-by-with-relation.input");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const actor_count_aggregate_input_1 = require("./actor-count-aggregate.input");
const actor_avg_aggregate_input_1 = require("./actor-avg-aggregate.input");
const actor_sum_aggregate_input_1 = require("./actor-sum-aggregate.input");
const actor_min_aggregate_input_1 = require("./actor-min-aggregate.input");
const actor_max_aggregate_input_1 = require("./actor-max-aggregate.input");
let ActorAggregateArgs = class ActorAggregateArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_input_1.ActorWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_input_1.ActorWhereInput)
], ActorAggregateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [actor_order_by_with_relation_input_1.ActorOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ActorAggregateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], ActorAggregateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ActorAggregateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ActorAggregateArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_count_aggregate_input_1.ActorCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_count_aggregate_input_1.ActorCountAggregateInput)
], ActorAggregateArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_avg_aggregate_input_1.ActorAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_avg_aggregate_input_1.ActorAvgAggregateInput)
], ActorAggregateArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_sum_aggregate_input_1.ActorSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_sum_aggregate_input_1.ActorSumAggregateInput)
], ActorAggregateArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_min_aggregate_input_1.ActorMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_min_aggregate_input_1.ActorMinAggregateInput)
], ActorAggregateArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_max_aggregate_input_1.ActorMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_max_aggregate_input_1.ActorMaxAggregateInput)
], ActorAggregateArgs.prototype, "_max", void 0);
ActorAggregateArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], ActorAggregateArgs);
exports.ActorAggregateArgs = ActorAggregateArgs;
