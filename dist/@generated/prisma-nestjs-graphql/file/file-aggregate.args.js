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
exports.FileAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_input_1 = require("./file-where.input");
const file_order_by_with_relation_input_1 = require("./file-order-by-with-relation.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const file_count_aggregate_input_1 = require("./file-count-aggregate.input");
const file_avg_aggregate_input_1 = require("./file-avg-aggregate.input");
const file_sum_aggregate_input_1 = require("./file-sum-aggregate.input");
const file_min_aggregate_input_1 = require("./file-min-aggregate.input");
const file_max_aggregate_input_1 = require("./file-max-aggregate.input");
let FileAggregateArgs = class FileAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => file_where_input_1.FileWhereInput, { nullable: true }),
    __metadata("design:type", file_where_input_1.FileWhereInput)
], FileAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [file_order_by_with_relation_input_1.FileOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FileAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    __metadata("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FileAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FileAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_count_aggregate_input_1.FileCountAggregateInput, { nullable: true }),
    __metadata("design:type", file_count_aggregate_input_1.FileCountAggregateInput)
], FileAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_avg_aggregate_input_1.FileAvgAggregateInput, { nullable: true }),
    __metadata("design:type", file_avg_aggregate_input_1.FileAvgAggregateInput)
], FileAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_sum_aggregate_input_1.FileSumAggregateInput, { nullable: true }),
    __metadata("design:type", file_sum_aggregate_input_1.FileSumAggregateInput)
], FileAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_min_aggregate_input_1.FileMinAggregateInput, { nullable: true }),
    __metadata("design:type", file_min_aggregate_input_1.FileMinAggregateInput)
], FileAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_max_aggregate_input_1.FileMaxAggregateInput, { nullable: true }),
    __metadata("design:type", file_max_aggregate_input_1.FileMaxAggregateInput)
], FileAggregateArgs.prototype, "_max", void 0);
FileAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FileAggregateArgs);
exports.FileAggregateArgs = FileAggregateArgs;
//# sourceMappingURL=file-aggregate.args.js.map