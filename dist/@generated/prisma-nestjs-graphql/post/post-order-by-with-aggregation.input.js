"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const post_count_order_by_aggregate_input_1 = require("./post-count-order-by-aggregate.input");
const post_avg_order_by_aggregate_input_1 = require("./post-avg-order-by-aggregate.input");
const post_max_order_by_aggregate_input_1 = require("./post-max-order-by-aggregate.input");
const post_min_order_by_aggregate_input_1 = require("./post-min-order-by-aggregate.input");
const post_sum_order_by_aggregate_input_1 = require("./post-sum-order-by-aggregate.input");
let PostOrderByWithAggregationInput = class PostOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_count_order_by_aggregate_input_1.PostCountOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_count_order_by_aggregate_input_1.PostCountOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_avg_order_by_aggregate_input_1.PostAvgOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_avg_order_by_aggregate_input_1.PostAvgOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_max_order_by_aggregate_input_1.PostMaxOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_max_order_by_aggregate_input_1.PostMaxOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_min_order_by_aggregate_input_1.PostMinOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_min_order_by_aggregate_input_1.PostMinOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_sum_order_by_aggregate_input_1.PostSumOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_sum_order_by_aggregate_input_1.PostSumOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_sum", void 0);
PostOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostOrderByWithAggregationInput);
exports.PostOrderByWithAggregationInput = PostOrderByWithAggregationInput;
