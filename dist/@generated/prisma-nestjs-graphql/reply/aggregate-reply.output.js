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
exports.AggregateReply = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_count_aggregate_output_1 = require("./reply-count-aggregate.output");
const reply_avg_aggregate_output_1 = require("./reply-avg-aggregate.output");
const reply_sum_aggregate_output_1 = require("./reply-sum-aggregate.output");
const reply_min_aggregate_output_1 = require("./reply-min-aggregate.output");
const reply_max_aggregate_output_1 = require("./reply-max-aggregate.output");
let AggregateReply = class AggregateReply {
};
__decorate([
    (0, graphql_1.Field)(() => reply_count_aggregate_output_1.ReplyCountAggregate, { nullable: true }),
    __metadata("design:type", reply_count_aggregate_output_1.ReplyCountAggregate)
], AggregateReply.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_avg_aggregate_output_1.ReplyAvgAggregate, { nullable: true }),
    __metadata("design:type", reply_avg_aggregate_output_1.ReplyAvgAggregate)
], AggregateReply.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_sum_aggregate_output_1.ReplySumAggregate, { nullable: true }),
    __metadata("design:type", reply_sum_aggregate_output_1.ReplySumAggregate)
], AggregateReply.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_min_aggregate_output_1.ReplyMinAggregate, { nullable: true }),
    __metadata("design:type", reply_min_aggregate_output_1.ReplyMinAggregate)
], AggregateReply.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_max_aggregate_output_1.ReplyMaxAggregate, { nullable: true }),
    __metadata("design:type", reply_max_aggregate_output_1.ReplyMaxAggregate)
], AggregateReply.prototype, "_max", void 0);
AggregateReply = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateReply);
exports.AggregateReply = AggregateReply;
//# sourceMappingURL=aggregate-reply.output.js.map