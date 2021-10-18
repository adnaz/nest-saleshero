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
exports.ActorAggregateArgs = void 0;
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
__decorate([
    (0, graphql_1.Field)(() => actor_where_input_1.ActorWhereInput, { nullable: true }),
    __metadata("design:type", actor_where_input_1.ActorWhereInput)
], ActorAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [actor_order_by_with_relation_input_1.ActorOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], ActorAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: true }),
    __metadata("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], ActorAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ActorAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ActorAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_count_aggregate_input_1.ActorCountAggregateInput, { nullable: true }),
    __metadata("design:type", actor_count_aggregate_input_1.ActorCountAggregateInput)
], ActorAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_avg_aggregate_input_1.ActorAvgAggregateInput, { nullable: true }),
    __metadata("design:type", actor_avg_aggregate_input_1.ActorAvgAggregateInput)
], ActorAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_sum_aggregate_input_1.ActorSumAggregateInput, { nullable: true }),
    __metadata("design:type", actor_sum_aggregate_input_1.ActorSumAggregateInput)
], ActorAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_min_aggregate_input_1.ActorMinAggregateInput, { nullable: true }),
    __metadata("design:type", actor_min_aggregate_input_1.ActorMinAggregateInput)
], ActorAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_max_aggregate_input_1.ActorMaxAggregateInput, { nullable: true }),
    __metadata("design:type", actor_max_aggregate_input_1.ActorMaxAggregateInput)
], ActorAggregateArgs.prototype, "_max", void 0);
ActorAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ActorAggregateArgs);
exports.ActorAggregateArgs = ActorAggregateArgs;
//# sourceMappingURL=actor-aggregate.args.js.map