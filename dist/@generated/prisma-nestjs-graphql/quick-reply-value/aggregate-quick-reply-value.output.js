"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateQuickReplyValue = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_count_aggregate_output_1 = require("./quick-reply-value-count-aggregate.output");
const quick_reply_value_avg_aggregate_output_1 = require("./quick-reply-value-avg-aggregate.output");
const quick_reply_value_sum_aggregate_output_1 = require("./quick-reply-value-sum-aggregate.output");
const quick_reply_value_min_aggregate_output_1 = require("./quick-reply-value-min-aggregate.output");
const quick_reply_value_max_aggregate_output_1 = require("./quick-reply-value-max-aggregate.output");
let AggregateQuickReplyValue = class AggregateQuickReplyValue {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_count_aggregate_output_1.QuickReplyValueCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_count_aggregate_output_1.QuickReplyValueCountAggregate)
], AggregateQuickReplyValue.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_avg_aggregate_output_1.QuickReplyValueAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_avg_aggregate_output_1.QuickReplyValueAvgAggregate)
], AggregateQuickReplyValue.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_sum_aggregate_output_1.QuickReplyValueSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_sum_aggregate_output_1.QuickReplyValueSumAggregate)
], AggregateQuickReplyValue.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_min_aggregate_output_1.QuickReplyValueMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_min_aggregate_output_1.QuickReplyValueMinAggregate)
], AggregateQuickReplyValue.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_max_aggregate_output_1.QuickReplyValueMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_max_aggregate_output_1.QuickReplyValueMaxAggregate)
], AggregateQuickReplyValue.prototype, "_max", void 0);
AggregateQuickReplyValue = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AggregateQuickReplyValue);
exports.AggregateQuickReplyValue = AggregateQuickReplyValue;
