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
exports.ReplyGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const reply_count_aggregate_output_1 = require("./reply-count-aggregate.output");
const reply_avg_aggregate_output_1 = require("./reply-avg-aggregate.output");
const reply_sum_aggregate_output_1 = require("./reply-sum-aggregate.output");
const reply_min_aggregate_output_1 = require("./reply-min-aggregate.output");
const reply_max_aggregate_output_1 = require("./reply-max-aggregate.output");
let ReplyGroupBy = class ReplyGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], ReplyGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ReplyGroupBy.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ReplyGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ReplyGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], ReplyGroupBy.prototype, "sectionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ReplyGroupBy.prototype, "actorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ReplyGroupBy.prototype, "quickRepliesId", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_count_aggregate_output_1.ReplyCountAggregate, { nullable: true }),
    __metadata("design:type", reply_count_aggregate_output_1.ReplyCountAggregate)
], ReplyGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_avg_aggregate_output_1.ReplyAvgAggregate, { nullable: true }),
    __metadata("design:type", reply_avg_aggregate_output_1.ReplyAvgAggregate)
], ReplyGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_sum_aggregate_output_1.ReplySumAggregate, { nullable: true }),
    __metadata("design:type", reply_sum_aggregate_output_1.ReplySumAggregate)
], ReplyGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_min_aggregate_output_1.ReplyMinAggregate, { nullable: true }),
    __metadata("design:type", reply_min_aggregate_output_1.ReplyMinAggregate)
], ReplyGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_max_aggregate_output_1.ReplyMaxAggregate, { nullable: true }),
    __metadata("design:type", reply_max_aggregate_output_1.ReplyMaxAggregate)
], ReplyGroupBy.prototype, "_max", void 0);
ReplyGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ReplyGroupBy);
exports.ReplyGroupBy = ReplyGroupBy;
//# sourceMappingURL=reply-group-by.output.js.map