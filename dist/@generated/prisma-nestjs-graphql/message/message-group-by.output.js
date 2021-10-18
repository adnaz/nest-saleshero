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
exports.MessageGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_section_enum_1 = require("../prisma/type-section.enum");
const message_count_aggregate_output_1 = require("./message-count-aggregate.output");
const message_avg_aggregate_output_1 = require("./message-avg-aggregate.output");
const message_sum_aggregate_output_1 = require("./message-sum-aggregate.output");
const message_min_aggregate_output_1 = require("./message-min-aggregate.output");
const message_max_aggregate_output_1 = require("./message-max-aggregate.output");
let MessageGroupBy = class MessageGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], MessageGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], MessageGroupBy.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MessageGroupBy.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MessageGroupBy.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    __metadata("design:type", Object)
], MessageGroupBy.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], MessageGroupBy.prototype, "courseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], MessageGroupBy.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], MessageGroupBy.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], MessageGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], MessageGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_count_aggregate_output_1.MessageCountAggregate, { nullable: true }),
    __metadata("design:type", message_count_aggregate_output_1.MessageCountAggregate)
], MessageGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_avg_aggregate_output_1.MessageAvgAggregate, { nullable: true }),
    __metadata("design:type", message_avg_aggregate_output_1.MessageAvgAggregate)
], MessageGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_sum_aggregate_output_1.MessageSumAggregate, { nullable: true }),
    __metadata("design:type", message_sum_aggregate_output_1.MessageSumAggregate)
], MessageGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_min_aggregate_output_1.MessageMinAggregate, { nullable: true }),
    __metadata("design:type", message_min_aggregate_output_1.MessageMinAggregate)
], MessageGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_max_aggregate_output_1.MessageMaxAggregate, { nullable: true }),
    __metadata("design:type", message_max_aggregate_output_1.MessageMaxAggregate)
], MessageGroupBy.prototype, "_max", void 0);
MessageGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], MessageGroupBy);
exports.MessageGroupBy = MessageGroupBy;
//# sourceMappingURL=message-group-by.output.js.map