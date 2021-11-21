"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const quick_reply_count_order_by_aggregate_input_1 = require("./quick-reply-count-order-by-aggregate.input");
const quick_reply_avg_order_by_aggregate_input_1 = require("./quick-reply-avg-order-by-aggregate.input");
const quick_reply_max_order_by_aggregate_input_1 = require("./quick-reply-max-order-by-aggregate.input");
const quick_reply_min_order_by_aggregate_input_1 = require("./quick-reply-min-order-by-aggregate.input");
const quick_reply_sum_order_by_aggregate_input_1 = require("./quick-reply-sum-order-by-aggregate.input");
let QuickReplyOrderByWithAggregationInput = class QuickReplyOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyOrderByWithAggregationInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyOrderByWithAggregationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_count_order_by_aggregate_input_1.QuickReplyCountOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_count_order_by_aggregate_input_1.QuickReplyCountOrderByAggregateInput)
], QuickReplyOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_avg_order_by_aggregate_input_1.QuickReplyAvgOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_avg_order_by_aggregate_input_1.QuickReplyAvgOrderByAggregateInput)
], QuickReplyOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_max_order_by_aggregate_input_1.QuickReplyMaxOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_max_order_by_aggregate_input_1.QuickReplyMaxOrderByAggregateInput)
], QuickReplyOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_min_order_by_aggregate_input_1.QuickReplyMinOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_min_order_by_aggregate_input_1.QuickReplyMinOrderByAggregateInput)
], QuickReplyOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_sum_order_by_aggregate_input_1.QuickReplySumOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_sum_order_by_aggregate_input_1.QuickReplySumOrderByAggregateInput)
], QuickReplyOrderByWithAggregationInput.prototype, "_sum", void 0);
QuickReplyOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyOrderByWithAggregationInput);
exports.QuickReplyOrderByWithAggregationInput = QuickReplyOrderByWithAggregationInput;
