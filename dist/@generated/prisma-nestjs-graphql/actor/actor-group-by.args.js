"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorGroupByArgs = void 0;
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
__decorate([
    (0, graphql_1.Field)(() => actor_where_input_1.ActorWhereInput, { nullable: true }),
    __metadata("design:type", actor_where_input_1.ActorWhereInput)
], ActorGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [actor_order_by_with_aggregation_input_1.ActorOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], ActorGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [actor_scalar_field_enum_1.ActorScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], ActorGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_scalar_where_with_aggregates_input_1.ActorScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", actor_scalar_where_with_aggregates_input_1.ActorScalarWhereWithAggregatesInput)
], ActorGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ActorGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ActorGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_count_aggregate_input_1.ActorCountAggregateInput, { nullable: true }),
    __metadata("design:type", actor_count_aggregate_input_1.ActorCountAggregateInput)
], ActorGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_avg_aggregate_input_1.ActorAvgAggregateInput, { nullable: true }),
    __metadata("design:type", actor_avg_aggregate_input_1.ActorAvgAggregateInput)
], ActorGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_sum_aggregate_input_1.ActorSumAggregateInput, { nullable: true }),
    __metadata("design:type", actor_sum_aggregate_input_1.ActorSumAggregateInput)
], ActorGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_min_aggregate_input_1.ActorMinAggregateInput, { nullable: true }),
    __metadata("design:type", actor_min_aggregate_input_1.ActorMinAggregateInput)
], ActorGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_max_aggregate_input_1.ActorMaxAggregateInput, { nullable: true }),
    __metadata("design:type", actor_max_aggregate_input_1.ActorMaxAggregateInput)
], ActorGroupByArgs.prototype, "_max", void 0);
ActorGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ActorGroupByArgs);
exports.ActorGroupByArgs = ActorGroupByArgs;
//# sourceMappingURL=actor-group-by.args.js.map