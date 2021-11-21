"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyAggregateArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_where_input_1 = require("./quick-reply-where.input");
const quick_reply_order_by_with_relation_input_1 = require("./quick-reply-order-by-with-relation.input");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_count_aggregate_input_1 = require("./quick-reply-count-aggregate.input");
const quick_reply_avg_aggregate_input_1 = require("./quick-reply-avg-aggregate.input");
const quick_reply_sum_aggregate_input_1 = require("./quick-reply-sum-aggregate.input");
const quick_reply_min_aggregate_input_1 = require("./quick-reply-min-aggregate.input");
const quick_reply_max_aggregate_input_1 = require("./quick-reply-max-aggregate.input");
let QuickReplyAggregateArgs = class QuickReplyAggregateArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_input_1.QuickReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_input_1.QuickReplyWhereInput)
], QuickReplyAggregateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_order_by_with_relation_input_1.QuickReplyOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyAggregateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], QuickReplyAggregateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyAggregateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyAggregateArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_count_aggregate_input_1.QuickReplyCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_count_aggregate_input_1.QuickReplyCountAggregateInput)
], QuickReplyAggregateArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_avg_aggregate_input_1.QuickReplyAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_avg_aggregate_input_1.QuickReplyAvgAggregateInput)
], QuickReplyAggregateArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_sum_aggregate_input_1.QuickReplySumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_sum_aggregate_input_1.QuickReplySumAggregateInput)
], QuickReplyAggregateArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_min_aggregate_input_1.QuickReplyMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_min_aggregate_input_1.QuickReplyMinAggregateInput)
], QuickReplyAggregateArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_max_aggregate_input_1.QuickReplyMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_max_aggregate_input_1.QuickReplyMaxAggregateInput)
], QuickReplyAggregateArgs.prototype, "_max", void 0);
QuickReplyAggregateArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], QuickReplyAggregateArgs);
exports.QuickReplyAggregateArgs = QuickReplyAggregateArgs;
