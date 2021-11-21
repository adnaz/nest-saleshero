"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const quick_reply_value_count_order_by_aggregate_input_1 = require("./quick-reply-value-count-order-by-aggregate.input");
const quick_reply_value_avg_order_by_aggregate_input_1 = require("./quick-reply-value-avg-order-by-aggregate.input");
const quick_reply_value_max_order_by_aggregate_input_1 = require("./quick-reply-value-max-order-by-aggregate.input");
const quick_reply_value_min_order_by_aggregate_input_1 = require("./quick-reply-value-min-order-by-aggregate.input");
const quick_reply_value_sum_order_by_aggregate_input_1 = require("./quick-reply-value-sum-order-by-aggregate.input");
let QuickReplyValueOrderByWithAggregationInput = class QuickReplyValueOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyValueOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyValueOrderByWithAggregationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyValueOrderByWithAggregationInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyValueOrderByWithAggregationInput.prototype, "quickReplyId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_count_order_by_aggregate_input_1.QuickReplyValueCountOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_count_order_by_aggregate_input_1.QuickReplyValueCountOrderByAggregateInput)
], QuickReplyValueOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_avg_order_by_aggregate_input_1.QuickReplyValueAvgOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_avg_order_by_aggregate_input_1.QuickReplyValueAvgOrderByAggregateInput)
], QuickReplyValueOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_max_order_by_aggregate_input_1.QuickReplyValueMaxOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_max_order_by_aggregate_input_1.QuickReplyValueMaxOrderByAggregateInput)
], QuickReplyValueOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_min_order_by_aggregate_input_1.QuickReplyValueMinOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_min_order_by_aggregate_input_1.QuickReplyValueMinOrderByAggregateInput)
], QuickReplyValueOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_sum_order_by_aggregate_input_1.QuickReplyValueSumOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_sum_order_by_aggregate_input_1.QuickReplyValueSumOrderByAggregateInput)
], QuickReplyValueOrderByWithAggregationInput.prototype, "_sum", void 0);
QuickReplyValueOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueOrderByWithAggregationInput);
exports.QuickReplyValueOrderByWithAggregationInput = QuickReplyValueOrderByWithAggregationInput;
