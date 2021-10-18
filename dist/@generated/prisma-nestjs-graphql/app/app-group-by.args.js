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
exports.AppGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_input_1 = require("./app-where.input");
const app_order_by_with_aggregation_input_1 = require("./app-order-by-with-aggregation.input");
const app_scalar_field_enum_1 = require("./app-scalar-field.enum");
const app_scalar_where_with_aggregates_input_1 = require("./app-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const app_count_aggregate_input_1 = require("./app-count-aggregate.input");
const app_avg_aggregate_input_1 = require("./app-avg-aggregate.input");
const app_sum_aggregate_input_1 = require("./app-sum-aggregate.input");
const app_min_aggregate_input_1 = require("./app-min-aggregate.input");
const app_max_aggregate_input_1 = require("./app-max-aggregate.input");
let AppGroupByArgs = class AppGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => app_where_input_1.AppWhereInput, { nullable: true }),
    __metadata("design:type", app_where_input_1.AppWhereInput)
], AppGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [app_order_by_with_aggregation_input_1.AppOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], AppGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [app_scalar_field_enum_1.AppScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], AppGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_scalar_where_with_aggregates_input_1.AppScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", app_scalar_where_with_aggregates_input_1.AppScalarWhereWithAggregatesInput)
], AppGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], AppGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], AppGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_count_aggregate_input_1.AppCountAggregateInput, { nullable: true }),
    __metadata("design:type", app_count_aggregate_input_1.AppCountAggregateInput)
], AppGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_avg_aggregate_input_1.AppAvgAggregateInput, { nullable: true }),
    __metadata("design:type", app_avg_aggregate_input_1.AppAvgAggregateInput)
], AppGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_sum_aggregate_input_1.AppSumAggregateInput, { nullable: true }),
    __metadata("design:type", app_sum_aggregate_input_1.AppSumAggregateInput)
], AppGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_min_aggregate_input_1.AppMinAggregateInput, { nullable: true }),
    __metadata("design:type", app_min_aggregate_input_1.AppMinAggregateInput)
], AppGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_max_aggregate_input_1.AppMaxAggregateInput, { nullable: true }),
    __metadata("design:type", app_max_aggregate_input_1.AppMaxAggregateInput)
], AppGroupByArgs.prototype, "_max", void 0);
AppGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], AppGroupByArgs);
exports.AppGroupByArgs = AppGroupByArgs;
//# sourceMappingURL=app-group-by.args.js.map