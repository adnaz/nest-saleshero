"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const app_count_order_by_aggregate_input_1 = require("./app-count-order-by-aggregate.input");
const app_avg_order_by_aggregate_input_1 = require("./app-avg-order-by-aggregate.input");
const app_max_order_by_aggregate_input_1 = require("./app-max-order-by-aggregate.input");
const app_min_order_by_aggregate_input_1 = require("./app-min-order-by-aggregate.input");
const app_sum_order_by_aggregate_input_1 = require("./app-sum-order-by-aggregate.input");
let AppOrderByWithAggregationInput = class AppOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppOrderByWithAggregationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppOrderByWithAggregationInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_count_order_by_aggregate_input_1.AppCountOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_count_order_by_aggregate_input_1.AppCountOrderByAggregateInput)
], AppOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_avg_order_by_aggregate_input_1.AppAvgOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_avg_order_by_aggregate_input_1.AppAvgOrderByAggregateInput)
], AppOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_max_order_by_aggregate_input_1.AppMaxOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_max_order_by_aggregate_input_1.AppMaxOrderByAggregateInput)
], AppOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_min_order_by_aggregate_input_1.AppMinOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_min_order_by_aggregate_input_1.AppMinOrderByAggregateInput)
], AppOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_sum_order_by_aggregate_input_1.AppSumOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_sum_order_by_aggregate_input_1.AppSumOrderByAggregateInput)
], AppOrderByWithAggregationInput.prototype, "_sum", void 0);
AppOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppOrderByWithAggregationInput);
exports.AppOrderByWithAggregationInput = AppOrderByWithAggregationInput;
