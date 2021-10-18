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
exports.SectionOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const section_count_order_by_aggregate_input_1 = require("./section-count-order-by-aggregate.input");
const section_avg_order_by_aggregate_input_1 = require("./section-avg-order-by-aggregate.input");
const section_max_order_by_aggregate_input_1 = require("./section-max-order-by-aggregate.input");
const section_min_order_by_aggregate_input_1 = require("./section-min-order-by-aggregate.input");
const section_sum_order_by_aggregate_input_1 = require("./section-sum-order-by-aggregate.input");
let SectionOrderByWithAggregationInput = class SectionOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "courseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_count_order_by_aggregate_input_1.SectionCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", section_count_order_by_aggregate_input_1.SectionCountOrderByAggregateInput)
], SectionOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_avg_order_by_aggregate_input_1.SectionAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", section_avg_order_by_aggregate_input_1.SectionAvgOrderByAggregateInput)
], SectionOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_max_order_by_aggregate_input_1.SectionMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", section_max_order_by_aggregate_input_1.SectionMaxOrderByAggregateInput)
], SectionOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_min_order_by_aggregate_input_1.SectionMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", section_min_order_by_aggregate_input_1.SectionMinOrderByAggregateInput)
], SectionOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_sum_order_by_aggregate_input_1.SectionSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", section_sum_order_by_aggregate_input_1.SectionSumOrderByAggregateInput)
], SectionOrderByWithAggregationInput.prototype, "_sum", void 0);
SectionOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], SectionOrderByWithAggregationInput);
exports.SectionOrderByWithAggregationInput = SectionOrderByWithAggregationInput;
//# sourceMappingURL=section-order-by-with-aggregation.input.js.map