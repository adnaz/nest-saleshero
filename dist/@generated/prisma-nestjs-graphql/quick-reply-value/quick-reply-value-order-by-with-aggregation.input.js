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
exports.QuickReplyValueOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_value_count_order_by_aggregate_input_1 = require("./quick-reply-value-count-order-by-aggregate.input");
const quick_reply_value_avg_order_by_aggregate_input_1 = require("./quick-reply-value-avg-order-by-aggregate.input");
const quick_reply_value_max_order_by_aggregate_input_1 = require("./quick-reply-value-max-order-by-aggregate.input");
const quick_reply_value_min_order_by_aggregate_input_1 = require("./quick-reply-value-min-order-by-aggregate.input");
const quick_reply_value_sum_order_by_aggregate_input_1 = require("./quick-reply-value-sum-order-by-aggregate.input");
let QuickReplyValueOrderByWithAggregationInput = class QuickReplyValueOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], QuickReplyValueOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], QuickReplyValueOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], QuickReplyValueOrderByWithAggregationInput.prototype, "value", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], QuickReplyValueOrderByWithAggregationInput.prototype, "quickReplyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_count_order_by_aggregate_input_1.QuickReplyValueCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_count_order_by_aggregate_input_1.QuickReplyValueCountOrderByAggregateInput)
], QuickReplyValueOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_avg_order_by_aggregate_input_1.QuickReplyValueAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_avg_order_by_aggregate_input_1.QuickReplyValueAvgOrderByAggregateInput)
], QuickReplyValueOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_max_order_by_aggregate_input_1.QuickReplyValueMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_max_order_by_aggregate_input_1.QuickReplyValueMaxOrderByAggregateInput)
], QuickReplyValueOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_min_order_by_aggregate_input_1.QuickReplyValueMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_min_order_by_aggregate_input_1.QuickReplyValueMinOrderByAggregateInput)
], QuickReplyValueOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_sum_order_by_aggregate_input_1.QuickReplyValueSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_sum_order_by_aggregate_input_1.QuickReplyValueSumOrderByAggregateInput)
], QuickReplyValueOrderByWithAggregationInput.prototype, "_sum", void 0);
QuickReplyValueOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyValueOrderByWithAggregationInput);
exports.QuickReplyValueOrderByWithAggregationInput = QuickReplyValueOrderByWithAggregationInput;
//# sourceMappingURL=quick-reply-value-order-by-with-aggregation.input.js.map