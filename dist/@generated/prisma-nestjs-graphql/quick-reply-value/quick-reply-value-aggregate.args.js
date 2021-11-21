"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueAggregateArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_where_input_1 = require("./quick-reply-value-where.input");
const quick_reply_value_order_by_with_relation_input_1 = require("./quick-reply-value-order-by-with-relation.input");
const quick_reply_value_where_unique_input_1 = require("./quick-reply-value-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_value_count_aggregate_input_1 = require("./quick-reply-value-count-aggregate.input");
const quick_reply_value_avg_aggregate_input_1 = require("./quick-reply-value-avg-aggregate.input");
const quick_reply_value_sum_aggregate_input_1 = require("./quick-reply-value-sum-aggregate.input");
const quick_reply_value_min_aggregate_input_1 = require("./quick-reply-value-min-aggregate.input");
const quick_reply_value_max_aggregate_input_1 = require("./quick-reply-value-max-aggregate.input");
let QuickReplyValueAggregateArgs = class QuickReplyValueAggregateArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_input_1.QuickReplyValueWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_input_1.QuickReplyValueWhereInput)
], QuickReplyValueAggregateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_order_by_with_relation_input_1.QuickReplyValueOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueAggregateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput)
], QuickReplyValueAggregateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueAggregateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueAggregateArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_count_aggregate_input_1.QuickReplyValueCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_count_aggregate_input_1.QuickReplyValueCountAggregateInput)
], QuickReplyValueAggregateArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_avg_aggregate_input_1.QuickReplyValueAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_avg_aggregate_input_1.QuickReplyValueAvgAggregateInput)
], QuickReplyValueAggregateArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_sum_aggregate_input_1.QuickReplyValueSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_sum_aggregate_input_1.QuickReplyValueSumAggregateInput)
], QuickReplyValueAggregateArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_min_aggregate_input_1.QuickReplyValueMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_min_aggregate_input_1.QuickReplyValueMinAggregateInput)
], QuickReplyValueAggregateArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_max_aggregate_input_1.QuickReplyValueMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_max_aggregate_input_1.QuickReplyValueMaxAggregateInput)
], QuickReplyValueAggregateArgs.prototype, "_max", void 0);
QuickReplyValueAggregateArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], QuickReplyValueAggregateArgs);
exports.QuickReplyValueAggregateArgs = QuickReplyValueAggregateArgs;
