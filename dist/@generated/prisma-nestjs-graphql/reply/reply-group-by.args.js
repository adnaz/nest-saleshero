"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyGroupByArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_input_1 = require("./reply-where.input");
const reply_order_by_with_aggregation_input_1 = require("./reply-order-by-with-aggregation.input");
const reply_scalar_field_enum_1 = require("./reply-scalar-field.enum");
const reply_scalar_where_with_aggregates_input_1 = require("./reply-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const reply_count_aggregate_input_1 = require("./reply-count-aggregate.input");
const reply_avg_aggregate_input_1 = require("./reply-avg-aggregate.input");
const reply_sum_aggregate_input_1 = require("./reply-sum-aggregate.input");
const reply_min_aggregate_input_1 = require("./reply-min-aggregate.input");
const reply_max_aggregate_input_1 = require("./reply-max-aggregate.input");
let ReplyGroupByArgs = class ReplyGroupByArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_input_1.ReplyWhereInput)
], ReplyGroupByArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_order_by_with_aggregation_input_1.ReplyOrderByWithAggregationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyGroupByArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_scalar_field_enum_1.ReplyScalarFieldEnum], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyGroupByArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_scalar_where_with_aggregates_input_1.ReplyScalarWhereWithAggregatesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_scalar_where_with_aggregates_input_1.ReplyScalarWhereWithAggregatesInput)
], ReplyGroupByArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyGroupByArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyGroupByArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_count_aggregate_input_1.ReplyCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_count_aggregate_input_1.ReplyCountAggregateInput)
], ReplyGroupByArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_avg_aggregate_input_1.ReplyAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_avg_aggregate_input_1.ReplyAvgAggregateInput)
], ReplyGroupByArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_sum_aggregate_input_1.ReplySumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_sum_aggregate_input_1.ReplySumAggregateInput)
], ReplyGroupByArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_min_aggregate_input_1.ReplyMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_min_aggregate_input_1.ReplyMinAggregateInput)
], ReplyGroupByArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_max_aggregate_input_1.ReplyMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_max_aggregate_input_1.ReplyMaxAggregateInput)
], ReplyGroupByArgs.prototype, "_max", void 0);
ReplyGroupByArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], ReplyGroupByArgs);
exports.ReplyGroupByArgs = ReplyGroupByArgs;
