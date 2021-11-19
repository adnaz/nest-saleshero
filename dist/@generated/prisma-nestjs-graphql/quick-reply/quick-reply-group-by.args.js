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
exports.QuickReplyGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_where_input_1 = require("./quick-reply-where.input");
const quick_reply_order_by_with_aggregation_input_1 = require("./quick-reply-order-by-with-aggregation.input");
const quick_reply_scalar_field_enum_1 = require("./quick-reply-scalar-field.enum");
const quick_reply_scalar_where_with_aggregates_input_1 = require("./quick-reply-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_count_aggregate_input_1 = require("./quick-reply-count-aggregate.input");
const quick_reply_avg_aggregate_input_1 = require("./quick-reply-avg-aggregate.input");
const quick_reply_sum_aggregate_input_1 = require("./quick-reply-sum-aggregate.input");
const quick_reply_min_aggregate_input_1 = require("./quick-reply-min-aggregate.input");
const quick_reply_max_aggregate_input_1 = require("./quick-reply-max-aggregate.input");
let QuickReplyGroupByArgs = class QuickReplyGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_where_input_1.QuickReplyWhereInput, { nullable: true }),
    __metadata("design:type", quick_reply_where_input_1.QuickReplyWhereInput)
], QuickReplyGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_order_by_with_aggregation_input_1.QuickReplyOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_scalar_field_enum_1.QuickReplyScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], QuickReplyGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_scalar_where_with_aggregates_input_1.QuickReplyScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", quick_reply_scalar_where_with_aggregates_input_1.QuickReplyScalarWhereWithAggregatesInput)
], QuickReplyGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], QuickReplyGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], QuickReplyGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_count_aggregate_input_1.QuickReplyCountAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_count_aggregate_input_1.QuickReplyCountAggregateInput)
], QuickReplyGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_avg_aggregate_input_1.QuickReplyAvgAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_avg_aggregate_input_1.QuickReplyAvgAggregateInput)
], QuickReplyGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_sum_aggregate_input_1.QuickReplySumAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_sum_aggregate_input_1.QuickReplySumAggregateInput)
], QuickReplyGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_min_aggregate_input_1.QuickReplyMinAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_min_aggregate_input_1.QuickReplyMinAggregateInput)
], QuickReplyGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_max_aggregate_input_1.QuickReplyMaxAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_max_aggregate_input_1.QuickReplyMaxAggregateInput)
], QuickReplyGroupByArgs.prototype, "_max", void 0);
QuickReplyGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], QuickReplyGroupByArgs);
exports.QuickReplyGroupByArgs = QuickReplyGroupByArgs;
//# sourceMappingURL=quick-reply-group-by.args.js.map