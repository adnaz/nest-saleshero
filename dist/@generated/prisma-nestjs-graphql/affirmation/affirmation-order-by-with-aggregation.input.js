"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const affirmation_count_order_by_aggregate_input_1 = require("./affirmation-count-order-by-aggregate.input");
const affirmation_avg_order_by_aggregate_input_1 = require("./affirmation-avg-order-by-aggregate.input");
const affirmation_max_order_by_aggregate_input_1 = require("./affirmation-max-order-by-aggregate.input");
const affirmation_min_order_by_aggregate_input_1 = require("./affirmation-min-order-by-aggregate.input");
const affirmation_sum_order_by_aggregate_input_1 = require("./affirmation-sum-order-by-aggregate.input");
let AffirmationOrderByWithAggregationInput = class AffirmationOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithAggregationInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithAggregationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithAggregationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithAggregationInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithAggregationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_count_order_by_aggregate_input_1.AffirmationCountOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_count_order_by_aggregate_input_1.AffirmationCountOrderByAggregateInput)
], AffirmationOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_avg_order_by_aggregate_input_1.AffirmationAvgOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_avg_order_by_aggregate_input_1.AffirmationAvgOrderByAggregateInput)
], AffirmationOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_max_order_by_aggregate_input_1.AffirmationMaxOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_max_order_by_aggregate_input_1.AffirmationMaxOrderByAggregateInput)
], AffirmationOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_min_order_by_aggregate_input_1.AffirmationMinOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_min_order_by_aggregate_input_1.AffirmationMinOrderByAggregateInput)
], AffirmationOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_sum_order_by_aggregate_input_1.AffirmationSumOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_sum_order_by_aggregate_input_1.AffirmationSumOrderByAggregateInput)
], AffirmationOrderByWithAggregationInput.prototype, "_sum", void 0);
AffirmationOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AffirmationOrderByWithAggregationInput);
exports.AffirmationOrderByWithAggregationInput = AffirmationOrderByWithAggregationInput;
