"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const file_count_order_by_aggregate_input_1 = require("./file-count-order-by-aggregate.input");
const file_avg_order_by_aggregate_input_1 = require("./file-avg-order-by-aggregate.input");
const file_max_order_by_aggregate_input_1 = require("./file-max-order-by-aggregate.input");
const file_min_order_by_aggregate_input_1 = require("./file-min-order-by-aggregate.input");
const file_sum_order_by_aggregate_input_1 = require("./file-sum-order-by-aggregate.input");
let FileOrderByWithAggregationInput = class FileOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileOrderByWithAggregationInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileOrderByWithAggregationInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileOrderByWithAggregationInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileOrderByWithAggregationInput.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileOrderByWithAggregationInput.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileOrderByWithAggregationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_count_order_by_aggregate_input_1.FileCountOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_count_order_by_aggregate_input_1.FileCountOrderByAggregateInput)
], FileOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_avg_order_by_aggregate_input_1.FileAvgOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_avg_order_by_aggregate_input_1.FileAvgOrderByAggregateInput)
], FileOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_max_order_by_aggregate_input_1.FileMaxOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_max_order_by_aggregate_input_1.FileMaxOrderByAggregateInput)
], FileOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_min_order_by_aggregate_input_1.FileMinOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_min_order_by_aggregate_input_1.FileMinOrderByAggregateInput)
], FileOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_sum_order_by_aggregate_input_1.FileSumOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_sum_order_by_aggregate_input_1.FileSumOrderByAggregateInput)
], FileOrderByWithAggregationInput.prototype, "_sum", void 0);
FileOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileOrderByWithAggregationInput);
exports.FileOrderByWithAggregationInput = FileOrderByWithAggregationInput;
