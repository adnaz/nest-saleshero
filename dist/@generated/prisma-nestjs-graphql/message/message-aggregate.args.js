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
exports.MessageAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const message_where_input_1 = require("./message-where.input");
const message_order_by_with_relation_input_1 = require("./message-order-by-with-relation.input");
const message_where_unique_input_1 = require("./message-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const message_count_aggregate_input_1 = require("./message-count-aggregate.input");
const message_avg_aggregate_input_1 = require("./message-avg-aggregate.input");
const message_sum_aggregate_input_1 = require("./message-sum-aggregate.input");
const message_min_aggregate_input_1 = require("./message-min-aggregate.input");
const message_max_aggregate_input_1 = require("./message-max-aggregate.input");
let MessageAggregateArgs = class MessageAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => message_where_input_1.MessageWhereInput, { nullable: true }),
    __metadata("design:type", message_where_input_1.MessageWhereInput)
], MessageAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_order_by_with_relation_input_1.MessageOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_where_unique_input_1.MessageWhereUniqueInput, { nullable: true }),
    __metadata("design:type", message_where_unique_input_1.MessageWhereUniqueInput)
], MessageAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], MessageAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], MessageAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_count_aggregate_input_1.MessageCountAggregateInput, { nullable: true }),
    __metadata("design:type", message_count_aggregate_input_1.MessageCountAggregateInput)
], MessageAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_avg_aggregate_input_1.MessageAvgAggregateInput, { nullable: true }),
    __metadata("design:type", message_avg_aggregate_input_1.MessageAvgAggregateInput)
], MessageAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_sum_aggregate_input_1.MessageSumAggregateInput, { nullable: true }),
    __metadata("design:type", message_sum_aggregate_input_1.MessageSumAggregateInput)
], MessageAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_min_aggregate_input_1.MessageMinAggregateInput, { nullable: true }),
    __metadata("design:type", message_min_aggregate_input_1.MessageMinAggregateInput)
], MessageAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_max_aggregate_input_1.MessageMaxAggregateInput, { nullable: true }),
    __metadata("design:type", message_max_aggregate_input_1.MessageMaxAggregateInput)
], MessageAggregateArgs.prototype, "_max", void 0);
MessageAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], MessageAggregateArgs);
exports.MessageAggregateArgs = MessageAggregateArgs;
//# sourceMappingURL=message-aggregate.args.js.map