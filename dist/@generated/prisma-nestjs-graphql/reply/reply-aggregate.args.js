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
exports.ReplyAggregateArgs = void 0;
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
__decorate([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    __metadata("design:type", reply_where_input_1.ReplyWhereInput)
], ReplyAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_order_by_with_relation_input_1.ReplyOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: true }),
    __metadata("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ReplyAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ReplyAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_count_aggregate_input_1.ReplyCountAggregateInput, { nullable: true }),
    __metadata("design:type", reply_count_aggregate_input_1.ReplyCountAggregateInput)
], ReplyAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_avg_aggregate_input_1.ReplyAvgAggregateInput, { nullable: true }),
    __metadata("design:type", reply_avg_aggregate_input_1.ReplyAvgAggregateInput)
], ReplyAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_sum_aggregate_input_1.ReplySumAggregateInput, { nullable: true }),
    __metadata("design:type", reply_sum_aggregate_input_1.ReplySumAggregateInput)
], ReplyAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_min_aggregate_input_1.ReplyMinAggregateInput, { nullable: true }),
    __metadata("design:type", reply_min_aggregate_input_1.ReplyMinAggregateInput)
], ReplyAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_max_aggregate_input_1.ReplyMaxAggregateInput, { nullable: true }),
    __metadata("design:type", reply_max_aggregate_input_1.ReplyMaxAggregateInput)
], ReplyAggregateArgs.prototype, "_max", void 0);
ReplyAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ReplyAggregateArgs);
exports.ReplyAggregateArgs = ReplyAggregateArgs;
//# sourceMappingURL=reply-aggregate.args.js.map