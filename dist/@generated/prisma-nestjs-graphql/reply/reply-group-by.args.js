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
exports.ReplyGroupByArgs = void 0;
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
__decorate([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    __metadata("design:type", reply_where_input_1.ReplyWhereInput)
], ReplyGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_order_by_with_aggregation_input_1.ReplyOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_scalar_field_enum_1.ReplyScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], ReplyGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_scalar_where_with_aggregates_input_1.ReplyScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", reply_scalar_where_with_aggregates_input_1.ReplyScalarWhereWithAggregatesInput)
], ReplyGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ReplyGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ReplyGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_count_aggregate_input_1.ReplyCountAggregateInput, { nullable: true }),
    __metadata("design:type", reply_count_aggregate_input_1.ReplyCountAggregateInput)
], ReplyGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_avg_aggregate_input_1.ReplyAvgAggregateInput, { nullable: true }),
    __metadata("design:type", reply_avg_aggregate_input_1.ReplyAvgAggregateInput)
], ReplyGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_sum_aggregate_input_1.ReplySumAggregateInput, { nullable: true }),
    __metadata("design:type", reply_sum_aggregate_input_1.ReplySumAggregateInput)
], ReplyGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_min_aggregate_input_1.ReplyMinAggregateInput, { nullable: true }),
    __metadata("design:type", reply_min_aggregate_input_1.ReplyMinAggregateInput)
], ReplyGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_max_aggregate_input_1.ReplyMaxAggregateInput, { nullable: true }),
    __metadata("design:type", reply_max_aggregate_input_1.ReplyMaxAggregateInput)
], ReplyGroupByArgs.prototype, "_max", void 0);
ReplyGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ReplyGroupByArgs);
exports.ReplyGroupByArgs = ReplyGroupByArgs;
//# sourceMappingURL=reply-group-by.args.js.map