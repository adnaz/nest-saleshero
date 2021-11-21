"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAggregateArgs = void 0;
const tslib_1 = require("tslib");
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
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_input_1.FileWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_input_1.FileWhereInput)
], FileAggregateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [file_order_by_with_relation_input_1.FileOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FileAggregateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileAggregateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FileAggregateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FileAggregateArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_count_aggregate_input_1.FileCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_count_aggregate_input_1.FileCountAggregateInput)
], FileAggregateArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_avg_aggregate_input_1.FileAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_avg_aggregate_input_1.FileAvgAggregateInput)
], FileAggregateArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_sum_aggregate_input_1.FileSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_sum_aggregate_input_1.FileSumAggregateInput)
], FileAggregateArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_min_aggregate_input_1.FileMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_min_aggregate_input_1.FileMinAggregateInput)
], FileAggregateArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_max_aggregate_input_1.FileMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_max_aggregate_input_1.FileMaxAggregateInput)
], FileAggregateArgs.prototype, "_max", void 0);
FileAggregateArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FileAggregateArgs);
exports.FileAggregateArgs = FileAggregateArgs;
