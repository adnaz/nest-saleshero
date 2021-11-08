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
exports.MessageOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const message_count_order_by_aggregate_input_1 = require("./message-count-order-by-aggregate.input");
const message_avg_order_by_aggregate_input_1 = require("./message-avg-order-by-aggregate.input");
const message_max_order_by_aggregate_input_1 = require("./message-max-order-by-aggregate.input");
const message_min_order_by_aggregate_input_1 = require("./message-min-order-by-aggregate.input");
const message_sum_order_by_aggregate_input_1 = require("./message-sum-order-by-aggregate.input");
let MessageOrderByWithAggregationInput = class MessageOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], MessageOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], MessageOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], MessageOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], MessageOrderByWithAggregationInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], MessageOrderByWithAggregationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], MessageOrderByWithAggregationInput.prototype, "courseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], MessageOrderByWithAggregationInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], MessageOrderByWithAggregationInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], MessageOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], MessageOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_count_order_by_aggregate_input_1.MessageCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", message_count_order_by_aggregate_input_1.MessageCountOrderByAggregateInput)
], MessageOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_avg_order_by_aggregate_input_1.MessageAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", message_avg_order_by_aggregate_input_1.MessageAvgOrderByAggregateInput)
], MessageOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_max_order_by_aggregate_input_1.MessageMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", message_max_order_by_aggregate_input_1.MessageMaxOrderByAggregateInput)
], MessageOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_min_order_by_aggregate_input_1.MessageMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", message_min_order_by_aggregate_input_1.MessageMinOrderByAggregateInput)
], MessageOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_sum_order_by_aggregate_input_1.MessageSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", message_sum_order_by_aggregate_input_1.MessageSumOrderByAggregateInput)
], MessageOrderByWithAggregationInput.prototype, "_sum", void 0);
MessageOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], MessageOrderByWithAggregationInput);
exports.MessageOrderByWithAggregationInput = MessageOrderByWithAggregationInput;
//# sourceMappingURL=message-order-by-with-aggregation.input.js.map