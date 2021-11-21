"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReply = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_count_aggregate_output_1 = require("./reply-count-aggregate.output");
const reply_avg_aggregate_output_1 = require("./reply-avg-aggregate.output");
const reply_sum_aggregate_output_1 = require("./reply-sum-aggregate.output");
const reply_min_aggregate_output_1 = require("./reply-min-aggregate.output");
const reply_max_aggregate_output_1 = require("./reply-max-aggregate.output");
let AggregateReply = class AggregateReply {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_count_aggregate_output_1.ReplyCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_count_aggregate_output_1.ReplyCountAggregate)
], AggregateReply.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_avg_aggregate_output_1.ReplyAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_avg_aggregate_output_1.ReplyAvgAggregate)
], AggregateReply.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_sum_aggregate_output_1.ReplySumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_sum_aggregate_output_1.ReplySumAggregate)
], AggregateReply.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_min_aggregate_output_1.ReplyMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_min_aggregate_output_1.ReplyMinAggregate)
], AggregateReply.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_max_aggregate_output_1.ReplyMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_max_aggregate_output_1.ReplyMaxAggregate)
], AggregateReply.prototype, "_max", void 0);
AggregateReply = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AggregateReply);
exports.AggregateReply = AggregateReply;
