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
exports.QuickReplyValueGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_where_input_1 = require("./quick-reply-value-where.input");
const quick_reply_value_order_by_with_aggregation_input_1 = require("./quick-reply-value-order-by-with-aggregation.input");
const quick_reply_value_scalar_field_enum_1 = require("./quick-reply-value-scalar-field.enum");
const quick_reply_value_scalar_where_with_aggregates_input_1 = require("./quick-reply-value-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_value_count_aggregate_input_1 = require("./quick-reply-value-count-aggregate.input");
const quick_reply_value_avg_aggregate_input_1 = require("./quick-reply-value-avg-aggregate.input");
const quick_reply_value_sum_aggregate_input_1 = require("./quick-reply-value-sum-aggregate.input");
const quick_reply_value_min_aggregate_input_1 = require("./quick-reply-value-min-aggregate.input");
const quick_reply_value_max_aggregate_input_1 = require("./quick-reply-value-max-aggregate.input");
let QuickReplyValueGroupByArgs = class QuickReplyValueGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_where_input_1.QuickReplyValueWhereInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_where_input_1.QuickReplyValueWhereInput)
], QuickReplyValueGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_order_by_with_aggregation_input_1.QuickReplyValueOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_scalar_field_enum_1.QuickReplyValueScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], QuickReplyValueGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_scalar_where_with_aggregates_input_1.QuickReplyValueScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_scalar_where_with_aggregates_input_1.QuickReplyValueScalarWhereWithAggregatesInput)
], QuickReplyValueGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], QuickReplyValueGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], QuickReplyValueGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_count_aggregate_input_1.QuickReplyValueCountAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_count_aggregate_input_1.QuickReplyValueCountAggregateInput)
], QuickReplyValueGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_avg_aggregate_input_1.QuickReplyValueAvgAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_avg_aggregate_input_1.QuickReplyValueAvgAggregateInput)
], QuickReplyValueGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_sum_aggregate_input_1.QuickReplyValueSumAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_sum_aggregate_input_1.QuickReplyValueSumAggregateInput)
], QuickReplyValueGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_min_aggregate_input_1.QuickReplyValueMinAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_min_aggregate_input_1.QuickReplyValueMinAggregateInput)
], QuickReplyValueGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_max_aggregate_input_1.QuickReplyValueMaxAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_max_aggregate_input_1.QuickReplyValueMaxAggregateInput)
], QuickReplyValueGroupByArgs.prototype, "_max", void 0);
QuickReplyValueGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], QuickReplyValueGroupByArgs);
exports.QuickReplyValueGroupByArgs = QuickReplyValueGroupByArgs;
//# sourceMappingURL=quick-reply-value-group-by.args.js.map