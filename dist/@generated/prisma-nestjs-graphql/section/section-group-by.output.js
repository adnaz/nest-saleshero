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
exports.SectionGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_section_enum_1 = require("../prisma/type-section.enum");
const section_count_aggregate_output_1 = require("./section-count-aggregate.output");
const section_avg_aggregate_output_1 = require("./section-avg-aggregate.output");
const section_sum_aggregate_output_1 = require("./section-sum-aggregate.output");
const section_min_aggregate_output_1 = require("./section-min-aggregate.output");
const section_max_aggregate_output_1 = require("./section-max-aggregate.output");
let SectionGroupBy = class SectionGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], SectionGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SectionGroupBy.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], SectionGroupBy.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], SectionGroupBy.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    __metadata("design:type", Object)
], SectionGroupBy.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], SectionGroupBy.prototype, "courseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], SectionGroupBy.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], SectionGroupBy.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], SectionGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], SectionGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_count_aggregate_output_1.SectionCountAggregate, { nullable: true }),
    __metadata("design:type", section_count_aggregate_output_1.SectionCountAggregate)
], SectionGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_avg_aggregate_output_1.SectionAvgAggregate, { nullable: true }),
    __metadata("design:type", section_avg_aggregate_output_1.SectionAvgAggregate)
], SectionGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_sum_aggregate_output_1.SectionSumAggregate, { nullable: true }),
    __metadata("design:type", section_sum_aggregate_output_1.SectionSumAggregate)
], SectionGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_min_aggregate_output_1.SectionMinAggregate, { nullable: true }),
    __metadata("design:type", section_min_aggregate_output_1.SectionMinAggregate)
], SectionGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_max_aggregate_output_1.SectionMaxAggregate, { nullable: true }),
    __metadata("design:type", section_max_aggregate_output_1.SectionMaxAggregate)
], SectionGroupBy.prototype, "_max", void 0);
SectionGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], SectionGroupBy);
exports.SectionGroupBy = SectionGroupBy;
//# sourceMappingURL=section-group-by.output.js.map