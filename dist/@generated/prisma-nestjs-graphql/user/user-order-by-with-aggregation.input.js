"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const user_count_order_by_aggregate_input_1 = require("./user-count-order-by-aggregate.input");
const user_avg_order_by_aggregate_input_1 = require("./user-avg-order-by-aggregate.input");
const user_max_order_by_aggregate_input_1 = require("./user-max-order-by-aggregate.input");
const user_min_order_by_aggregate_input_1 = require("./user-min-order-by-aggregate.input");
const user_sum_order_by_aggregate_input_1 = require("./user-sum-order-by-aggregate.input");
let UserOrderByWithAggregationInput = class UserOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_count_order_by_aggregate_input_1.UserCountOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_count_order_by_aggregate_input_1.UserCountOrderByAggregateInput)
], UserOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_avg_order_by_aggregate_input_1.UserAvgOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_avg_order_by_aggregate_input_1.UserAvgOrderByAggregateInput)
], UserOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_max_order_by_aggregate_input_1.UserMaxOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_max_order_by_aggregate_input_1.UserMaxOrderByAggregateInput)
], UserOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_min_order_by_aggregate_input_1.UserMinOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_min_order_by_aggregate_input_1.UserMinOrderByAggregateInput)
], UserOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_sum_order_by_aggregate_input_1.UserSumOrderByAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_sum_order_by_aggregate_input_1.UserSumOrderByAggregateInput)
], UserOrderByWithAggregationInput.prototype, "_sum", void 0);
UserOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserOrderByWithAggregationInput);
exports.UserOrderByWithAggregationInput = UserOrderByWithAggregationInput;
