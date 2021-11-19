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
exports.AggregateActor = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_count_aggregate_output_1 = require("./actor-count-aggregate.output");
const actor_avg_aggregate_output_1 = require("./actor-avg-aggregate.output");
const actor_sum_aggregate_output_1 = require("./actor-sum-aggregate.output");
const actor_min_aggregate_output_1 = require("./actor-min-aggregate.output");
const actor_max_aggregate_output_1 = require("./actor-max-aggregate.output");
let AggregateActor = class AggregateActor {
};
__decorate([
    (0, graphql_1.Field)(() => actor_count_aggregate_output_1.ActorCountAggregate, { nullable: true }),
    __metadata("design:type", actor_count_aggregate_output_1.ActorCountAggregate)
], AggregateActor.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_avg_aggregate_output_1.ActorAvgAggregate, { nullable: true }),
    __metadata("design:type", actor_avg_aggregate_output_1.ActorAvgAggregate)
], AggregateActor.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_sum_aggregate_output_1.ActorSumAggregate, { nullable: true }),
    __metadata("design:type", actor_sum_aggregate_output_1.ActorSumAggregate)
], AggregateActor.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_min_aggregate_output_1.ActorMinAggregate, { nullable: true }),
    __metadata("design:type", actor_min_aggregate_output_1.ActorMinAggregate)
], AggregateActor.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_max_aggregate_output_1.ActorMaxAggregate, { nullable: true }),
    __metadata("design:type", actor_max_aggregate_output_1.ActorMaxAggregate)
], AggregateActor.prototype, "_max", void 0);
AggregateActor = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateActor);
exports.AggregateActor = AggregateActor;
//# sourceMappingURL=aggregate-actor.output.js.map