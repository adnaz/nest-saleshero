"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSection = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_count_aggregate_output_1 = require("./section-count-aggregate.output");
const section_avg_aggregate_output_1 = require("./section-avg-aggregate.output");
const section_sum_aggregate_output_1 = require("./section-sum-aggregate.output");
const section_min_aggregate_output_1 = require("./section-min-aggregate.output");
const section_max_aggregate_output_1 = require("./section-max-aggregate.output");
let AggregateSection = class AggregateSection {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_count_aggregate_output_1.SectionCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_count_aggregate_output_1.SectionCountAggregate)
], AggregateSection.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_avg_aggregate_output_1.SectionAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_avg_aggregate_output_1.SectionAvgAggregate)
], AggregateSection.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_sum_aggregate_output_1.SectionSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_sum_aggregate_output_1.SectionSumAggregate)
], AggregateSection.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_min_aggregate_output_1.SectionMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_min_aggregate_output_1.SectionMinAggregate)
], AggregateSection.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_max_aggregate_output_1.SectionMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_max_aggregate_output_1.SectionMaxAggregate)
], AggregateSection.prototype, "_max", void 0);
AggregateSection = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AggregateSection);
exports.AggregateSection = AggregateSection;
