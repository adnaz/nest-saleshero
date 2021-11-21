"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAggregateArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_input_1 = require("./post-where.input");
const post_order_by_with_relation_input_1 = require("./post-order-by-with-relation.input");
const post_where_unique_input_1 = require("./post-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const post_count_aggregate_input_1 = require("./post-count-aggregate.input");
const post_avg_aggregate_input_1 = require("./post-avg-aggregate.input");
const post_sum_aggregate_input_1 = require("./post-sum-aggregate.input");
const post_min_aggregate_input_1 = require("./post-min-aggregate.input");
const post_max_aggregate_input_1 = require("./post-max-aggregate.input");
let PostAggregateArgs = class PostAggregateArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_where_input_1.PostWhereInput)
], PostAggregateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_order_by_with_relation_input_1.PostOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostAggregateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_where_unique_input_1.PostWhereUniqueInput)
], PostAggregateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostAggregateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostAggregateArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_count_aggregate_input_1.PostCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_count_aggregate_input_1.PostCountAggregateInput)
], PostAggregateArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_avg_aggregate_input_1.PostAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_avg_aggregate_input_1.PostAvgAggregateInput)
], PostAggregateArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_sum_aggregate_input_1.PostSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_sum_aggregate_input_1.PostSumAggregateInput)
], PostAggregateArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_min_aggregate_input_1.PostMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_min_aggregate_input_1.PostMinAggregateInput)
], PostAggregateArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_max_aggregate_input_1.PostMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_max_aggregate_input_1.PostMaxAggregateInput)
], PostAggregateArgs.prototype, "_max", void 0);
PostAggregateArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], PostAggregateArgs);
exports.PostAggregateArgs = PostAggregateArgs;
