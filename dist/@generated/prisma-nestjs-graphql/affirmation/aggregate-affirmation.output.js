"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAffirmation = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_count_aggregate_output_1 = require("./affirmation-count-aggregate.output");
const affirmation_avg_aggregate_output_1 = require("./affirmation-avg-aggregate.output");
const affirmation_sum_aggregate_output_1 = require("./affirmation-sum-aggregate.output");
const affirmation_min_aggregate_output_1 = require("./affirmation-min-aggregate.output");
const affirmation_max_aggregate_output_1 = require("./affirmation-max-aggregate.output");
let AggregateAffirmation = class AggregateAffirmation {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_count_aggregate_output_1.AffirmationCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_count_aggregate_output_1.AffirmationCountAggregate)
], AggregateAffirmation.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_avg_aggregate_output_1.AffirmationAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_avg_aggregate_output_1.AffirmationAvgAggregate)
], AggregateAffirmation.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_sum_aggregate_output_1.AffirmationSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_sum_aggregate_output_1.AffirmationSumAggregate)
], AggregateAffirmation.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_min_aggregate_output_1.AffirmationMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_min_aggregate_output_1.AffirmationMinAggregate)
], AggregateAffirmation.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_max_aggregate_output_1.AffirmationMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_max_aggregate_output_1.AffirmationMaxAggregate)
], AggregateAffirmation.prototype, "_max", void 0);
AggregateAffirmation = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AggregateAffirmation);
exports.AggregateAffirmation = AggregateAffirmation;
