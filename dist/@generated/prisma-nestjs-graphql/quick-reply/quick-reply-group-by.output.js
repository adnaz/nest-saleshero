"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyGroupBy = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_reply_enum_1 = require("../prisma/type-reply.enum");
const quick_reply_count_aggregate_output_1 = require("./quick-reply-count-aggregate.output");
const quick_reply_avg_aggregate_output_1 = require("./quick-reply-avg-aggregate.output");
const quick_reply_sum_aggregate_output_1 = require("./quick-reply-sum-aggregate.output");
const quick_reply_min_aggregate_output_1 = require("./quick-reply-min-aggregate.output");
const quick_reply_max_aggregate_output_1 = require("./quick-reply-max-aggregate.output");
let QuickReplyGroupBy = class QuickReplyGroupBy {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyGroupBy.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyGroupBy.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_count_aggregate_output_1.QuickReplyCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_count_aggregate_output_1.QuickReplyCountAggregate)
], QuickReplyGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_avg_aggregate_output_1.QuickReplyAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_avg_aggregate_output_1.QuickReplyAvgAggregate)
], QuickReplyGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_sum_aggregate_output_1.QuickReplySumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_sum_aggregate_output_1.QuickReplySumAggregate)
], QuickReplyGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_min_aggregate_output_1.QuickReplyMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_min_aggregate_output_1.QuickReplyMinAggregate)
], QuickReplyGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_max_aggregate_output_1.QuickReplyMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_max_aggregate_output_1.QuickReplyMaxAggregate)
], QuickReplyGroupBy.prototype, "_max", void 0);
QuickReplyGroupBy = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], QuickReplyGroupBy);
exports.QuickReplyGroupBy = QuickReplyGroupBy;
