"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionGroupBy = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const type_section_enum_1 = require("../prisma/type-section.enum");
const section_count_aggregate_output_1 = require("./section-count-aggregate.output");
const section_avg_aggregate_output_1 = require("./section-avg-aggregate.output");
const section_sum_aggregate_output_1 = require("./section-sum-aggregate.output");
const section_min_aggregate_output_1 = require("./section-min-aggregate.output");
const section_max_aggregate_output_1 = require("./section-max-aggregate.output");
let SectionGroupBy = class SectionGroupBy {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionGroupBy.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], SectionGroupBy.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], SectionGroupBy.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionGroupBy.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionGroupBy.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionGroupBy.prototype, "courseId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SectionGroupBy.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionGroupBy.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_count_aggregate_output_1.SectionCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_count_aggregate_output_1.SectionCountAggregate)
], SectionGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_avg_aggregate_output_1.SectionAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_avg_aggregate_output_1.SectionAvgAggregate)
], SectionGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_sum_aggregate_output_1.SectionSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_sum_aggregate_output_1.SectionSumAggregate)
], SectionGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_min_aggregate_output_1.SectionMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_min_aggregate_output_1.SectionMinAggregate)
], SectionGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_max_aggregate_output_1.SectionMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_max_aggregate_output_1.SectionMaxAggregate)
], SectionGroupBy.prototype, "_max", void 0);
SectionGroupBy = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], SectionGroupBy);
exports.SectionGroupBy = SectionGroupBy;
