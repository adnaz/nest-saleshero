"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyGroupByArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_where_input_1 = require("./quick-reply-where.input");
const quick_reply_order_by_with_aggregation_input_1 = require("./quick-reply-order-by-with-aggregation.input");
const quick_reply_scalar_field_enum_1 = require("./quick-reply-scalar-field.enum");
const quick_reply_scalar_where_with_aggregates_input_1 = require("./quick-reply-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_count_aggregate_input_1 = require("./quick-reply-count-aggregate.input");
const quick_reply_avg_aggregate_input_1 = require("./quick-reply-avg-aggregate.input");
const quick_reply_sum_aggregate_input_1 = require("./quick-reply-sum-aggregate.input");
const quick_reply_min_aggregate_input_1 = require("./quick-reply-min-aggregate.input");
const quick_reply_max_aggregate_input_1 = require("./quick-reply-max-aggregate.input");
let QuickReplyGroupByArgs = class QuickReplyGroupByArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_input_1.QuickReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_input_1.QuickReplyWhereInput)
], QuickReplyGroupByArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_order_by_with_aggregation_input_1.QuickReplyOrderByWithAggregationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyGroupByArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_scalar_field_enum_1.QuickReplyScalarFieldEnum], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyGroupByArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_scalar_where_with_aggregates_input_1.QuickReplyScalarWhereWithAggregatesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_scalar_where_with_aggregates_input_1.QuickReplyScalarWhereWithAggregatesInput)
], QuickReplyGroupByArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyGroupByArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyGroupByArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_count_aggregate_input_1.QuickReplyCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_count_aggregate_input_1.QuickReplyCountAggregateInput)
], QuickReplyGroupByArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_avg_aggregate_input_1.QuickReplyAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_avg_aggregate_input_1.QuickReplyAvgAggregateInput)
], QuickReplyGroupByArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_sum_aggregate_input_1.QuickReplySumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_sum_aggregate_input_1.QuickReplySumAggregateInput)
], QuickReplyGroupByArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_min_aggregate_input_1.QuickReplyMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_min_aggregate_input_1.QuickReplyMinAggregateInput)
], QuickReplyGroupByArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_max_aggregate_input_1.QuickReplyMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_max_aggregate_input_1.QuickReplyMaxAggregateInput)
], QuickReplyGroupByArgs.prototype, "_max", void 0);
QuickReplyGroupByArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], QuickReplyGroupByArgs);
exports.QuickReplyGroupByArgs = QuickReplyGroupByArgs;
