"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationGroupBy = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const affirmation_count_aggregate_output_1 = require("./affirmation-count-aggregate.output");
const affirmation_avg_aggregate_output_1 = require("./affirmation-avg-aggregate.output");
const affirmation_sum_aggregate_output_1 = require("./affirmation-sum-aggregate.output");
const affirmation_min_aggregate_output_1 = require("./affirmation-min-aggregate.output");
const affirmation_max_aggregate_output_1 = require("./affirmation-max-aggregate.output");
let AffirmationGroupBy = class AffirmationGroupBy {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationGroupBy.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], AffirmationGroupBy.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], AffirmationGroupBy.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationGroupBy.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AffirmationGroupBy.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_count_aggregate_output_1.AffirmationCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_count_aggregate_output_1.AffirmationCountAggregate)
], AffirmationGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_avg_aggregate_output_1.AffirmationAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_avg_aggregate_output_1.AffirmationAvgAggregate)
], AffirmationGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_sum_aggregate_output_1.AffirmationSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_sum_aggregate_output_1.AffirmationSumAggregate)
], AffirmationGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_min_aggregate_output_1.AffirmationMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_min_aggregate_output_1.AffirmationMinAggregate)
], AffirmationGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_max_aggregate_output_1.AffirmationMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_max_aggregate_output_1.AffirmationMaxAggregate)
], AffirmationGroupBy.prototype, "_max", void 0);
AffirmationGroupBy = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AffirmationGroupBy);
exports.AffirmationGroupBy = AffirmationGroupBy;
