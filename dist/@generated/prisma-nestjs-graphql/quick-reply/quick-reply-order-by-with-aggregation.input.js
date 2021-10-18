"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyOrderByWithAggregationInput = void 0;
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
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], QuickReplyOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], QuickReplyOrderByWithAggregationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_count_order_by_aggregate_input_1.QuickReplyCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_count_order_by_aggregate_input_1.QuickReplyCountOrderByAggregateInput)
], QuickReplyOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_avg_order_by_aggregate_input_1.QuickReplyAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_avg_order_by_aggregate_input_1.QuickReplyAvgOrderByAggregateInput)
], QuickReplyOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_max_order_by_aggregate_input_1.QuickReplyMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_max_order_by_aggregate_input_1.QuickReplyMaxOrderByAggregateInput)
], QuickReplyOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_min_order_by_aggregate_input_1.QuickReplyMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_min_order_by_aggregate_input_1.QuickReplyMinOrderByAggregateInput)
], QuickReplyOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_sum_order_by_aggregate_input_1.QuickReplySumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_sum_order_by_aggregate_input_1.QuickReplySumOrderByAggregateInput)
], QuickReplyOrderByWithAggregationInput.prototype, "_sum", void 0);
QuickReplyOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyOrderByWithAggregationInput);
exports.QuickReplyOrderByWithAggregationInput = QuickReplyOrderByWithAggregationInput;
//# sourceMappingURL=quick-reply-order-by-with-aggregation.input.js.map