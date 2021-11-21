"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateQuickReply = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_count_aggregate_output_1 = require("./quick-reply-count-aggregate.output");
const quick_reply_avg_aggregate_output_1 = require("./quick-reply-avg-aggregate.output");
const quick_reply_sum_aggregate_output_1 = require("./quick-reply-sum-aggregate.output");
const quick_reply_min_aggregate_output_1 = require("./quick-reply-min-aggregate.output");
const quick_reply_max_aggregate_output_1 = require("./quick-reply-max-aggregate.output");
let AggregateQuickReply = class AggregateQuickReply {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_count_aggregate_output_1.QuickReplyCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_count_aggregate_output_1.QuickReplyCountAggregate)
], AggregateQuickReply.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_avg_aggregate_output_1.QuickReplyAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_avg_aggregate_output_1.QuickReplyAvgAggregate)
], AggregateQuickReply.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_sum_aggregate_output_1.QuickReplySumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_sum_aggregate_output_1.QuickReplySumAggregate)
], AggregateQuickReply.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_min_aggregate_output_1.QuickReplyMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_min_aggregate_output_1.QuickReplyMinAggregate)
], AggregateQuickReply.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_max_aggregate_output_1.QuickReplyMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_max_aggregate_output_1.QuickReplyMaxAggregate)
], AggregateQuickReply.prototype, "_max", void 0);
AggregateQuickReply = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AggregateQuickReply);
exports.AggregateQuickReply = AggregateQuickReply;
