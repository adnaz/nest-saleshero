"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorGroupByArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_where_input_1 = require("./actor-where.input");
const actor_order_by_with_aggregation_input_1 = require("./actor-order-by-with-aggregation.input");
const actor_scalar_field_enum_1 = require("./actor-scalar-field.enum");
const actor_scalar_where_with_aggregates_input_1 = require("./actor-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const actor_count_aggregate_input_1 = require("./actor-count-aggregate.input");
const actor_avg_aggregate_input_1 = require("./actor-avg-aggregate.input");
const actor_sum_aggregate_input_1 = require("./actor-sum-aggregate.input");
const actor_min_aggregate_input_1 = require("./actor-min-aggregate.input");
const actor_max_aggregate_input_1 = require("./actor-max-aggregate.input");
let ActorGroupByArgs = class ActorGroupByArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_input_1.ActorWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_input_1.ActorWhereInput)
], ActorGroupByArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [actor_order_by_with_aggregation_input_1.ActorOrderByWithAggregationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ActorGroupByArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [actor_scalar_field_enum_1.ActorScalarFieldEnum], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], ActorGroupByArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_scalar_where_with_aggregates_input_1.ActorScalarWhereWithAggregatesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_scalar_where_with_aggregates_input_1.ActorScalarWhereWithAggregatesInput)
], ActorGroupByArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ActorGroupByArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ActorGroupByArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_count_aggregate_input_1.ActorCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_count_aggregate_input_1.ActorCountAggregateInput)
], ActorGroupByArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_avg_aggregate_input_1.ActorAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_avg_aggregate_input_1.ActorAvgAggregateInput)
], ActorGroupByArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_sum_aggregate_input_1.ActorSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_sum_aggregate_input_1.ActorSumAggregateInput)
], ActorGroupByArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_min_aggregate_input_1.ActorMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_min_aggregate_input_1.ActorMinAggregateInput)
], ActorGroupByArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_max_aggregate_input_1.ActorMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_max_aggregate_input_1.ActorMaxAggregateInput)
], ActorGroupByArgs.prototype, "_max", void 0);
ActorGroupByArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], ActorGroupByArgs);
exports.ActorGroupByArgs = ActorGroupByArgs;
