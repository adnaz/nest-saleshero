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
exports.QuickReplyGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_reply_enum_1 = require("../prisma/type-reply.enum");
const quick_reply_count_aggregate_output_1 = require("./quick-reply-count-aggregate.output");
const quick_reply_avg_aggregate_output_1 = require("./quick-reply-avg-aggregate.output");
const quick_reply_sum_aggregate_output_1 = require("./quick-reply-sum-aggregate.output");
const quick_reply_min_aggregate_output_1 = require("./quick-reply-min-aggregate.output");
const quick_reply_max_aggregate_output_1 = require("./quick-reply-max-aggregate.output");
let QuickReplyGroupBy = class QuickReplyGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], QuickReplyGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false }),
    __metadata("design:type", Boolean)
], QuickReplyGroupBy.prototype, "keepIt", void 0);
__decorate([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: false }),
    __metadata("design:type", Object)
], QuickReplyGroupBy.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_count_aggregate_output_1.QuickReplyCountAggregate, { nullable: true }),
    __metadata("design:type", quick_reply_count_aggregate_output_1.QuickReplyCountAggregate)
], QuickReplyGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_avg_aggregate_output_1.QuickReplyAvgAggregate, { nullable: true }),
    __metadata("design:type", quick_reply_avg_aggregate_output_1.QuickReplyAvgAggregate)
], QuickReplyGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_sum_aggregate_output_1.QuickReplySumAggregate, { nullable: true }),
    __metadata("design:type", quick_reply_sum_aggregate_output_1.QuickReplySumAggregate)
], QuickReplyGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_min_aggregate_output_1.QuickReplyMinAggregate, { nullable: true }),
    __metadata("design:type", quick_reply_min_aggregate_output_1.QuickReplyMinAggregate)
], QuickReplyGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_max_aggregate_output_1.QuickReplyMaxAggregate, { nullable: true }),
    __metadata("design:type", quick_reply_max_aggregate_output_1.QuickReplyMaxAggregate)
], QuickReplyGroupBy.prototype, "_max", void 0);
QuickReplyGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], QuickReplyGroupBy);
exports.QuickReplyGroupBy = QuickReplyGroupBy;
//# sourceMappingURL=quick-reply-group-by.output.js.map