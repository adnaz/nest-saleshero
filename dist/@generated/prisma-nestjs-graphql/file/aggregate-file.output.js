"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFile = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_count_aggregate_output_1 = require("./file-count-aggregate.output");
const file_avg_aggregate_output_1 = require("./file-avg-aggregate.output");
const file_sum_aggregate_output_1 = require("./file-sum-aggregate.output");
const file_min_aggregate_output_1 = require("./file-min-aggregate.output");
const file_max_aggregate_output_1 = require("./file-max-aggregate.output");
let AggregateFile = class AggregateFile {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_count_aggregate_output_1.FileCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_count_aggregate_output_1.FileCountAggregate)
], AggregateFile.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_avg_aggregate_output_1.FileAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_avg_aggregate_output_1.FileAvgAggregate)
], AggregateFile.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_sum_aggregate_output_1.FileSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_sum_aggregate_output_1.FileSumAggregate)
], AggregateFile.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_min_aggregate_output_1.FileMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_min_aggregate_output_1.FileMinAggregate)
], AggregateFile.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_max_aggregate_output_1.FileMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_max_aggregate_output_1.FileMaxAggregate)
], AggregateFile.prototype, "_max", void 0);
AggregateFile = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AggregateFile);
exports.AggregateFile = AggregateFile;
