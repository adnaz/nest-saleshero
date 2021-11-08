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
exports.AppAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_input_1 = require("./app-where.input");
const app_order_by_with_relation_input_1 = require("./app-order-by-with-relation.input");
const app_where_unique_input_1 = require("./app-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const app_count_aggregate_input_1 = require("./app-count-aggregate.input");
const app_avg_aggregate_input_1 = require("./app-avg-aggregate.input");
const app_sum_aggregate_input_1 = require("./app-sum-aggregate.input");
const app_min_aggregate_input_1 = require("./app-min-aggregate.input");
const app_max_aggregate_input_1 = require("./app-max-aggregate.input");
let AppAggregateArgs = class AppAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => app_where_input_1.AppWhereInput, { nullable: true }),
    __metadata("design:type", app_where_input_1.AppWhereInput)
], AppAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [app_order_by_with_relation_input_1.AppOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], AppAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_where_unique_input_1.AppWhereUniqueInput, { nullable: true }),
    __metadata("design:type", app_where_unique_input_1.AppWhereUniqueInput)
], AppAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], AppAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], AppAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_count_aggregate_input_1.AppCountAggregateInput, { nullable: true }),
    __metadata("design:type", app_count_aggregate_input_1.AppCountAggregateInput)
], AppAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_avg_aggregate_input_1.AppAvgAggregateInput, { nullable: true }),
    __metadata("design:type", app_avg_aggregate_input_1.AppAvgAggregateInput)
], AppAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_sum_aggregate_input_1.AppSumAggregateInput, { nullable: true }),
    __metadata("design:type", app_sum_aggregate_input_1.AppSumAggregateInput)
], AppAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_min_aggregate_input_1.AppMinAggregateInput, { nullable: true }),
    __metadata("design:type", app_min_aggregate_input_1.AppMinAggregateInput)
], AppAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_max_aggregate_input_1.AppMaxAggregateInput, { nullable: true }),
    __metadata("design:type", app_max_aggregate_input_1.AppMaxAggregateInput)
], AppAggregateArgs.prototype, "_max", void 0);
AppAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], AppAggregateArgs);
exports.AppAggregateArgs = AppAggregateArgs;
//# sourceMappingURL=app-aggregate.args.js.map