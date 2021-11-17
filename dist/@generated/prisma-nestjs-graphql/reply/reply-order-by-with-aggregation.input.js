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
exports.ReplyOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const reply_count_order_by_aggregate_input_1 = require("./reply-count-order-by-aggregate.input");
const reply_avg_order_by_aggregate_input_1 = require("./reply-avg-order-by-aggregate.input");
const reply_max_order_by_aggregate_input_1 = require("./reply-max-order-by-aggregate.input");
const reply_min_order_by_aggregate_input_1 = require("./reply-min-order-by-aggregate.input");
const reply_sum_order_by_aggregate_input_1 = require("./reply-sum-order-by-aggregate.input");
let ReplyOrderByWithAggregationInput = class ReplyOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithAggregationInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithAggregationInput.prototype, "sectionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithAggregationInput.prototype, "actorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithAggregationInput.prototype, "quickRepliesId", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_count_order_by_aggregate_input_1.ReplyCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", reply_count_order_by_aggregate_input_1.ReplyCountOrderByAggregateInput)
], ReplyOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_avg_order_by_aggregate_input_1.ReplyAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", reply_avg_order_by_aggregate_input_1.ReplyAvgOrderByAggregateInput)
], ReplyOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_max_order_by_aggregate_input_1.ReplyMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", reply_max_order_by_aggregate_input_1.ReplyMaxOrderByAggregateInput)
], ReplyOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_min_order_by_aggregate_input_1.ReplyMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", reply_min_order_by_aggregate_input_1.ReplyMinOrderByAggregateInput)
], ReplyOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_sum_order_by_aggregate_input_1.ReplySumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", reply_sum_order_by_aggregate_input_1.ReplySumOrderByAggregateInput)
], ReplyOrderByWithAggregationInput.prototype, "_sum", void 0);
ReplyOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyOrderByWithAggregationInput);
exports.ReplyOrderByWithAggregationInput = ReplyOrderByWithAggregationInput;
//# sourceMappingURL=reply-order-by-with-aggregation.input.js.map