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
exports.AggregateQuickReplyValue = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_count_aggregate_output_1 = require("./quick-reply-value-count-aggregate.output");
const quick_reply_value_avg_aggregate_output_1 = require("./quick-reply-value-avg-aggregate.output");
const quick_reply_value_sum_aggregate_output_1 = require("./quick-reply-value-sum-aggregate.output");
const quick_reply_value_min_aggregate_output_1 = require("./quick-reply-value-min-aggregate.output");
const quick_reply_value_max_aggregate_output_1 = require("./quick-reply-value-max-aggregate.output");
let AggregateQuickReplyValue = class AggregateQuickReplyValue {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_count_aggregate_output_1.QuickReplyValueCountAggregate, { nullable: true }),
    __metadata("design:type", quick_reply_value_count_aggregate_output_1.QuickReplyValueCountAggregate)
], AggregateQuickReplyValue.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_avg_aggregate_output_1.QuickReplyValueAvgAggregate, { nullable: true }),
    __metadata("design:type", quick_reply_value_avg_aggregate_output_1.QuickReplyValueAvgAggregate)
], AggregateQuickReplyValue.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_sum_aggregate_output_1.QuickReplyValueSumAggregate, { nullable: true }),
    __metadata("design:type", quick_reply_value_sum_aggregate_output_1.QuickReplyValueSumAggregate)
], AggregateQuickReplyValue.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_min_aggregate_output_1.QuickReplyValueMinAggregate, { nullable: true }),
    __metadata("design:type", quick_reply_value_min_aggregate_output_1.QuickReplyValueMinAggregate)
], AggregateQuickReplyValue.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_max_aggregate_output_1.QuickReplyValueMaxAggregate, { nullable: true }),
    __metadata("design:type", quick_reply_value_max_aggregate_output_1.QuickReplyValueMaxAggregate)
], AggregateQuickReplyValue.prototype, "_max", void 0);
AggregateQuickReplyValue = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateQuickReplyValue);
exports.AggregateQuickReplyValue = AggregateQuickReplyValue;
//# sourceMappingURL=aggregate-quick-reply-value.output.js.map