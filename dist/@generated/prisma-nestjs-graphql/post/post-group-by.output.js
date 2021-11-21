"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostGroupBy = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const post_count_aggregate_output_1 = require("./post-count-aggregate.output");
const post_avg_aggregate_output_1 = require("./post-avg-aggregate.output");
const post_sum_aggregate_output_1 = require("./post-sum-aggregate.output");
const post_min_aggregate_output_1 = require("./post-min-aggregate.output");
const post_max_aggregate_output_1 = require("./post-max-aggregate.output");
let PostGroupBy = class PostGroupBy {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], PostGroupBy.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PostGroupBy.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PostGroupBy.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostGroupBy.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_count_aggregate_output_1.PostCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_count_aggregate_output_1.PostCountAggregate)
], PostGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_avg_aggregate_output_1.PostAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_avg_aggregate_output_1.PostAvgAggregate)
], PostGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_sum_aggregate_output_1.PostSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_sum_aggregate_output_1.PostSumAggregate)
], PostGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_min_aggregate_output_1.PostMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_min_aggregate_output_1.PostMinAggregate)
], PostGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_max_aggregate_output_1.PostMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_max_aggregate_output_1.PostMaxAggregate)
], PostGroupBy.prototype, "_max", void 0);
PostGroupBy = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], PostGroupBy);
exports.PostGroupBy = PostGroupBy;
