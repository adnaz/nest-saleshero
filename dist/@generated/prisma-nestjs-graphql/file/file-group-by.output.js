"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileGroupBy = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_file_enum_1 = require("../prisma/type-file.enum");
const file_count_aggregate_output_1 = require("./file-count-aggregate.output");
const file_avg_aggregate_output_1 = require("./file-avg-aggregate.output");
const file_sum_aggregate_output_1 = require("./file-sum-aggregate.output");
const file_min_aggregate_output_1 = require("./file-min-aggregate.output");
const file_max_aggregate_output_1 = require("./file-max-aggregate.output");
let FileGroupBy = class FileGroupBy {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], FileGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileGroupBy.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileGroupBy.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileGroupBy.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileGroupBy.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileGroupBy.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileGroupBy.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileGroupBy.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_count_aggregate_output_1.FileCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_count_aggregate_output_1.FileCountAggregate)
], FileGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_avg_aggregate_output_1.FileAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_avg_aggregate_output_1.FileAvgAggregate)
], FileGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_sum_aggregate_output_1.FileSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_sum_aggregate_output_1.FileSumAggregate)
], FileGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_min_aggregate_output_1.FileMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_min_aggregate_output_1.FileMinAggregate)
], FileGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_max_aggregate_output_1.FileMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_max_aggregate_output_1.FileMaxAggregate)
], FileGroupBy.prototype, "_max", void 0);
FileGroupBy = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], FileGroupBy);
exports.FileGroupBy = FileGroupBy;
