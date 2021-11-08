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
exports.AggregateSection = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_count_aggregate_output_1 = require("./section-count-aggregate.output");
const section_avg_aggregate_output_1 = require("./section-avg-aggregate.output");
const section_sum_aggregate_output_1 = require("./section-sum-aggregate.output");
const section_min_aggregate_output_1 = require("./section-min-aggregate.output");
const section_max_aggregate_output_1 = require("./section-max-aggregate.output");
let AggregateSection = class AggregateSection {
};
__decorate([
    (0, graphql_1.Field)(() => section_count_aggregate_output_1.SectionCountAggregate, { nullable: true }),
    __metadata("design:type", section_count_aggregate_output_1.SectionCountAggregate)
], AggregateSection.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_avg_aggregate_output_1.SectionAvgAggregate, { nullable: true }),
    __metadata("design:type", section_avg_aggregate_output_1.SectionAvgAggregate)
], AggregateSection.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_sum_aggregate_output_1.SectionSumAggregate, { nullable: true }),
    __metadata("design:type", section_sum_aggregate_output_1.SectionSumAggregate)
], AggregateSection.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_min_aggregate_output_1.SectionMinAggregate, { nullable: true }),
    __metadata("design:type", section_min_aggregate_output_1.SectionMinAggregate)
], AggregateSection.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_max_aggregate_output_1.SectionMaxAggregate, { nullable: true }),
    __metadata("design:type", section_max_aggregate_output_1.SectionMaxAggregate)
], AggregateSection.prototype, "_max", void 0);
AggregateSection = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateSection);
exports.AggregateSection = AggregateSection;
//# sourceMappingURL=aggregate-section.output.js.map