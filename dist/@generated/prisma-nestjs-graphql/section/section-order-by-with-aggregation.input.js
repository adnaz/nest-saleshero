"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const section_count_order_by_aggregate_input_1 = require("./section-count-order-by-aggregate.input");
const section_avg_order_by_aggregate_input_1 = require("./section-avg-order-by-aggregate.input");
const section_max_order_by_aggregate_input_1 = require("./section-max-order-by-aggregate.input");
const section_min_order_by_aggregate_input_1 = require("./section-min-order-by-aggregate.input");
const section_sum_order_by_aggregate_input_1 = require("./section-sum-order-by-aggregate.input");
let SectionOrderByWithAggregationInput = class SectionOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "courseId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_count_order_by_aggregate_input_1.SectionCountOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_count_order_by_aggregate_input_1.SectionCountOrderByAggregateInput)
], SectionOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_avg_order_by_aggregate_input_1.SectionAvgOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_avg_order_by_aggregate_input_1.SectionAvgOrderByAggregateInput)
], SectionOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_max_order_by_aggregate_input_1.SectionMaxOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_max_order_by_aggregate_input_1.SectionMaxOrderByAggregateInput)
], SectionOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_min_order_by_aggregate_input_1.SectionMinOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_min_order_by_aggregate_input_1.SectionMinOrderByAggregateInput)
], SectionOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_sum_order_by_aggregate_input_1.SectionSumOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_sum_order_by_aggregate_input_1.SectionSumOrderByAggregateInput)
], SectionOrderByWithAggregationInput.prototype, "_sum", void 0);
SectionOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionOrderByWithAggregationInput);
exports.SectionOrderByWithAggregationInput = SectionOrderByWithAggregationInput;
