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
exports.AggregateApp = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_count_aggregate_output_1 = require("./app-count-aggregate.output");
const app_avg_aggregate_output_1 = require("./app-avg-aggregate.output");
const app_sum_aggregate_output_1 = require("./app-sum-aggregate.output");
const app_min_aggregate_output_1 = require("./app-min-aggregate.output");
const app_max_aggregate_output_1 = require("./app-max-aggregate.output");
let AggregateApp = class AggregateApp {
};
__decorate([
    (0, graphql_1.Field)(() => app_count_aggregate_output_1.AppCountAggregate, { nullable: true }),
    __metadata("design:type", app_count_aggregate_output_1.AppCountAggregate)
], AggregateApp.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_avg_aggregate_output_1.AppAvgAggregate, { nullable: true }),
    __metadata("design:type", app_avg_aggregate_output_1.AppAvgAggregate)
], AggregateApp.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_sum_aggregate_output_1.AppSumAggregate, { nullable: true }),
    __metadata("design:type", app_sum_aggregate_output_1.AppSumAggregate)
], AggregateApp.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_min_aggregate_output_1.AppMinAggregate, { nullable: true }),
    __metadata("design:type", app_min_aggregate_output_1.AppMinAggregate)
], AggregateApp.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_max_aggregate_output_1.AppMaxAggregate, { nullable: true }),
    __metadata("design:type", app_max_aggregate_output_1.AppMaxAggregate)
], AggregateApp.prototype, "_max", void 0);
AggregateApp = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateApp);
exports.AggregateApp = AggregateApp;
//# sourceMappingURL=aggregate-app.output.js.map