"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileGroupByArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_input_1 = require("./file-where.input");
const file_order_by_with_aggregation_input_1 = require("./file-order-by-with-aggregation.input");
const file_scalar_field_enum_1 = require("./file-scalar-field.enum");
const file_scalar_where_with_aggregates_input_1 = require("./file-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const file_count_aggregate_input_1 = require("./file-count-aggregate.input");
const file_avg_aggregate_input_1 = require("./file-avg-aggregate.input");
const file_sum_aggregate_input_1 = require("./file-sum-aggregate.input");
const file_min_aggregate_input_1 = require("./file-min-aggregate.input");
const file_max_aggregate_input_1 = require("./file-max-aggregate.input");
let FileGroupByArgs = class FileGroupByArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_input_1.FileWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_input_1.FileWhereInput)
], FileGroupByArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [file_order_by_with_aggregation_input_1.FileOrderByWithAggregationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FileGroupByArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [file_scalar_field_enum_1.FileScalarFieldEnum], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], FileGroupByArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_scalar_where_with_aggregates_input_1.FileScalarWhereWithAggregatesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_scalar_where_with_aggregates_input_1.FileScalarWhereWithAggregatesInput)
], FileGroupByArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FileGroupByArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FileGroupByArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_count_aggregate_input_1.FileCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_count_aggregate_input_1.FileCountAggregateInput)
], FileGroupByArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_avg_aggregate_input_1.FileAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_avg_aggregate_input_1.FileAvgAggregateInput)
], FileGroupByArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_sum_aggregate_input_1.FileSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_sum_aggregate_input_1.FileSumAggregateInput)
], FileGroupByArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_min_aggregate_input_1.FileMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_min_aggregate_input_1.FileMinAggregateInput)
], FileGroupByArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_max_aggregate_input_1.FileMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_max_aggregate_input_1.FileMaxAggregateInput)
], FileGroupByArgs.prototype, "_max", void 0);
FileGroupByArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FileGroupByArgs);
exports.FileGroupByArgs = FileGroupByArgs;
