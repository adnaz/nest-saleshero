"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueGroupByArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_where_input_1 = require("./quick-reply-value-where.input");
const quick_reply_value_order_by_with_aggregation_input_1 = require("./quick-reply-value-order-by-with-aggregation.input");
const quick_reply_value_scalar_field_enum_1 = require("./quick-reply-value-scalar-field.enum");
const quick_reply_value_scalar_where_with_aggregates_input_1 = require("./quick-reply-value-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_value_count_aggregate_input_1 = require("./quick-reply-value-count-aggregate.input");
const quick_reply_value_avg_aggregate_input_1 = require("./quick-reply-value-avg-aggregate.input");
const quick_reply_value_sum_aggregate_input_1 = require("./quick-reply-value-sum-aggregate.input");
const quick_reply_value_min_aggregate_input_1 = require("./quick-reply-value-min-aggregate.input");
const quick_reply_value_max_aggregate_input_1 = require("./quick-reply-value-max-aggregate.input");
let QuickReplyValueGroupByArgs = class QuickReplyValueGroupByArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_input_1.QuickReplyValueWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_input_1.QuickReplyValueWhereInput)
], QuickReplyValueGroupByArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_order_by_with_aggregation_input_1.QuickReplyValueOrderByWithAggregationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueGroupByArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_scalar_field_enum_1.QuickReplyValueScalarFieldEnum], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueGroupByArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_scalar_where_with_aggregates_input_1.QuickReplyValueScalarWhereWithAggregatesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_scalar_where_with_aggregates_input_1.QuickReplyValueScalarWhereWithAggregatesInput)
], QuickReplyValueGroupByArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueGroupByArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueGroupByArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_count_aggregate_input_1.QuickReplyValueCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_count_aggregate_input_1.QuickReplyValueCountAggregateInput)
], QuickReplyValueGroupByArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_avg_aggregate_input_1.QuickReplyValueAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_avg_aggregate_input_1.QuickReplyValueAvgAggregateInput)
], QuickReplyValueGroupByArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_sum_aggregate_input_1.QuickReplyValueSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_sum_aggregate_input_1.QuickReplyValueSumAggregateInput)
], QuickReplyValueGroupByArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_min_aggregate_input_1.QuickReplyValueMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_min_aggregate_input_1.QuickReplyValueMinAggregateInput)
], QuickReplyValueGroupByArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_max_aggregate_input_1.QuickReplyValueMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_max_aggregate_input_1.QuickReplyValueMaxAggregateInput)
], QuickReplyValueGroupByArgs.prototype, "_max", void 0);
QuickReplyValueGroupByArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], QuickReplyValueGroupByArgs);
exports.QuickReplyValueGroupByArgs = QuickReplyValueGroupByArgs;
