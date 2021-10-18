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
exports.QuickReplyValueAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_where_input_1 = require("./quick-reply-value-where.input");
const quick_reply_value_order_by_with_relation_input_1 = require("./quick-reply-value-order-by-with-relation.input");
const quick_reply_value_where_unique_input_1 = require("./quick-reply-value-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_value_count_aggregate_input_1 = require("./quick-reply-value-count-aggregate.input");
const quick_reply_value_avg_aggregate_input_1 = require("./quick-reply-value-avg-aggregate.input");
const quick_reply_value_sum_aggregate_input_1 = require("./quick-reply-value-sum-aggregate.input");
const quick_reply_value_min_aggregate_input_1 = require("./quick-reply-value-min-aggregate.input");
const quick_reply_value_max_aggregate_input_1 = require("./quick-reply-value-max-aggregate.input");
let QuickReplyValueAggregateArgs = class QuickReplyValueAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_where_input_1.QuickReplyValueWhereInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_where_input_1.QuickReplyValueWhereInput)
], QuickReplyValueAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_order_by_with_relation_input_1.QuickReplyValueOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput)
], QuickReplyValueAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], QuickReplyValueAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], QuickReplyValueAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_count_aggregate_input_1.QuickReplyValueCountAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_count_aggregate_input_1.QuickReplyValueCountAggregateInput)
], QuickReplyValueAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_avg_aggregate_input_1.QuickReplyValueAvgAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_avg_aggregate_input_1.QuickReplyValueAvgAggregateInput)
], QuickReplyValueAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_sum_aggregate_input_1.QuickReplyValueSumAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_sum_aggregate_input_1.QuickReplyValueSumAggregateInput)
], QuickReplyValueAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_min_aggregate_input_1.QuickReplyValueMinAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_min_aggregate_input_1.QuickReplyValueMinAggregateInput)
], QuickReplyValueAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_max_aggregate_input_1.QuickReplyValueMaxAggregateInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_max_aggregate_input_1.QuickReplyValueMaxAggregateInput)
], QuickReplyValueAggregateArgs.prototype, "_max", void 0);
QuickReplyValueAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], QuickReplyValueAggregateArgs);
exports.QuickReplyValueAggregateArgs = QuickReplyValueAggregateArgs;
//# sourceMappingURL=quick-reply-value-aggregate.args.js.map