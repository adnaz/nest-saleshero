"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePost = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_count_aggregate_output_1 = require("./post-count-aggregate.output");
const post_avg_aggregate_output_1 = require("./post-avg-aggregate.output");
const post_sum_aggregate_output_1 = require("./post-sum-aggregate.output");
const post_min_aggregate_output_1 = require("./post-min-aggregate.output");
const post_max_aggregate_output_1 = require("./post-max-aggregate.output");
let AggregatePost = class AggregatePost {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_count_aggregate_output_1.PostCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_count_aggregate_output_1.PostCountAggregate)
], AggregatePost.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_avg_aggregate_output_1.PostAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_avg_aggregate_output_1.PostAvgAggregate)
], AggregatePost.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_sum_aggregate_output_1.PostSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_sum_aggregate_output_1.PostSumAggregate)
], AggregatePost.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_min_aggregate_output_1.PostMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_min_aggregate_output_1.PostMinAggregate)
], AggregatePost.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_max_aggregate_output_1.PostMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_max_aggregate_output_1.PostMaxAggregate)
], AggregatePost.prototype, "_max", void 0);
AggregatePost = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AggregatePost);
exports.AggregatePost = AggregatePost;
