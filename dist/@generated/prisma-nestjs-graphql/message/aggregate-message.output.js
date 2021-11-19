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
exports.AggregateMessage = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const message_count_aggregate_output_1 = require("./message-count-aggregate.output");
const message_avg_aggregate_output_1 = require("./message-avg-aggregate.output");
const message_sum_aggregate_output_1 = require("./message-sum-aggregate.output");
const message_min_aggregate_output_1 = require("./message-min-aggregate.output");
const message_max_aggregate_output_1 = require("./message-max-aggregate.output");
let AggregateMessage = class AggregateMessage {
};
__decorate([
    (0, graphql_1.Field)(() => message_count_aggregate_output_1.MessageCountAggregate, { nullable: true }),
    __metadata("design:type", message_count_aggregate_output_1.MessageCountAggregate)
], AggregateMessage.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_avg_aggregate_output_1.MessageAvgAggregate, { nullable: true }),
    __metadata("design:type", message_avg_aggregate_output_1.MessageAvgAggregate)
], AggregateMessage.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_sum_aggregate_output_1.MessageSumAggregate, { nullable: true }),
    __metadata("design:type", message_sum_aggregate_output_1.MessageSumAggregate)
], AggregateMessage.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_min_aggregate_output_1.MessageMinAggregate, { nullable: true }),
    __metadata("design:type", message_min_aggregate_output_1.MessageMinAggregate)
], AggregateMessage.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_max_aggregate_output_1.MessageMaxAggregate, { nullable: true }),
    __metadata("design:type", message_max_aggregate_output_1.MessageMaxAggregate)
], AggregateMessage.prototype, "_max", void 0);
AggregateMessage = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateMessage);
exports.AggregateMessage = AggregateMessage;
//# sourceMappingURL=aggregate-message.output.js.map