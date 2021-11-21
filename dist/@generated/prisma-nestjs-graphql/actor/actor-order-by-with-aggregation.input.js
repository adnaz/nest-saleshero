"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const actor_count_order_by_aggregate_input_1 = require("./actor-count-order-by-aggregate.input");
const actor_avg_order_by_aggregate_input_1 = require("./actor-avg-order-by-aggregate.input");
const actor_max_order_by_aggregate_input_1 = require("./actor-max-order-by-aggregate.input");
const actor_min_order_by_aggregate_input_1 = require("./actor-min-order-by-aggregate.input");
const actor_sum_order_by_aggregate_input_1 = require("./actor-sum-order-by-aggregate.input");
let ActorOrderByWithAggregationInput = class ActorOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorOrderByWithAggregationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorOrderByWithAggregationInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_count_order_by_aggregate_input_1.ActorCountOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_count_order_by_aggregate_input_1.ActorCountOrderByAggregateInput)
], ActorOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_avg_order_by_aggregate_input_1.ActorAvgOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_avg_order_by_aggregate_input_1.ActorAvgOrderByAggregateInput)
], ActorOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_max_order_by_aggregate_input_1.ActorMaxOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_max_order_by_aggregate_input_1.ActorMaxOrderByAggregateInput)
], ActorOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_min_order_by_aggregate_input_1.ActorMinOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_min_order_by_aggregate_input_1.ActorMinOrderByAggregateInput)
], ActorOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_sum_order_by_aggregate_input_1.ActorSumOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_sum_order_by_aggregate_input_1.ActorSumOrderByAggregateInput)
], ActorOrderByWithAggregationInput.prototype, "_sum", void 0);
ActorOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorOrderByWithAggregationInput);
exports.ActorOrderByWithAggregationInput = ActorOrderByWithAggregationInput;
