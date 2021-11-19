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
exports.AppOrderByWithAggregationInput = void 0;
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
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], AppOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], AppOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], AppOrderByWithAggregationInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], AppOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], AppOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_count_order_by_aggregate_input_1.AppCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", app_count_order_by_aggregate_input_1.AppCountOrderByAggregateInput)
], AppOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_avg_order_by_aggregate_input_1.AppAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", app_avg_order_by_aggregate_input_1.AppAvgOrderByAggregateInput)
], AppOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_max_order_by_aggregate_input_1.AppMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", app_max_order_by_aggregate_input_1.AppMaxOrderByAggregateInput)
], AppOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_min_order_by_aggregate_input_1.AppMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", app_min_order_by_aggregate_input_1.AppMinOrderByAggregateInput)
], AppOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_sum_order_by_aggregate_input_1.AppSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", app_sum_order_by_aggregate_input_1.AppSumOrderByAggregateInput)
], AppOrderByWithAggregationInput.prototype, "_sum", void 0);
AppOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], AppOrderByWithAggregationInput);
exports.AppOrderByWithAggregationInput = AppOrderByWithAggregationInput;
//# sourceMappingURL=app-order-by-with-aggregation.input.js.map