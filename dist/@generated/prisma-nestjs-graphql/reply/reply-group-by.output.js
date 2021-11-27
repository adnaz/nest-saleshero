"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyGroupBy = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const reply_count_aggregate_output_1 = require("./reply-count-aggregate.output");
const reply_avg_aggregate_output_1 = require("./reply-avg-aggregate.output");
const reply_sum_aggregate_output_1 = require("./reply-sum-aggregate.output");
const reply_min_aggregate_output_1 = require("./reply-min-aggregate.output");
const reply_max_aggregate_output_1 = require("./reply-max-aggregate.output");
let ReplyGroupBy = class ReplyGroupBy {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyGroupBy.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyGroupBy.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ReplyGroupBy.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ReplyGroupBy.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyGroupBy.prototype, "sectionId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyGroupBy.prototype, "actorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyGroupBy.prototype, "quickReplyId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_count_aggregate_output_1.ReplyCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_count_aggregate_output_1.ReplyCountAggregate)
], ReplyGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_avg_aggregate_output_1.ReplyAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_avg_aggregate_output_1.ReplyAvgAggregate)
], ReplyGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_sum_aggregate_output_1.ReplySumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_sum_aggregate_output_1.ReplySumAggregate)
], ReplyGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_min_aggregate_output_1.ReplyMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_min_aggregate_output_1.ReplyMinAggregate)
], ReplyGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_max_aggregate_output_1.ReplyMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_max_aggregate_output_1.ReplyMaxAggregate)
], ReplyGroupBy.prototype, "_max", void 0);
ReplyGroupBy = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], ReplyGroupBy);
exports.ReplyGroupBy = ReplyGroupBy;
