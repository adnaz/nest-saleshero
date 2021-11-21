"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyAggregateArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_input_1 = require("./reply-where.input");
const reply_order_by_with_relation_input_1 = require("./reply-order-by-with-relation.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const reply_count_aggregate_input_1 = require("./reply-count-aggregate.input");
const reply_avg_aggregate_input_1 = require("./reply-avg-aggregate.input");
const reply_sum_aggregate_input_1 = require("./reply-sum-aggregate.input");
const reply_min_aggregate_input_1 = require("./reply-min-aggregate.input");
const reply_max_aggregate_input_1 = require("./reply-max-aggregate.input");
let ReplyAggregateArgs = class ReplyAggregateArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_input_1.ReplyWhereInput)
], ReplyAggregateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_order_by_with_relation_input_1.ReplyOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyAggregateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyAggregateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyAggregateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyAggregateArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_count_aggregate_input_1.ReplyCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_count_aggregate_input_1.ReplyCountAggregateInput)
], ReplyAggregateArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_avg_aggregate_input_1.ReplyAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_avg_aggregate_input_1.ReplyAvgAggregateInput)
], ReplyAggregateArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_sum_aggregate_input_1.ReplySumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_sum_aggregate_input_1.ReplySumAggregateInput)
], ReplyAggregateArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_min_aggregate_input_1.ReplyMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_min_aggregate_input_1.ReplyMinAggregateInput)
], ReplyAggregateArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_max_aggregate_input_1.ReplyMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_max_aggregate_input_1.ReplyMaxAggregateInput)
], ReplyAggregateArgs.prototype, "_max", void 0);
ReplyAggregateArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], ReplyAggregateArgs);
exports.ReplyAggregateArgs = ReplyAggregateArgs;
