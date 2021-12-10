"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationGroupByArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_where_input_1 = require("./affirmation-where.input");
const affirmation_order_by_with_aggregation_input_1 = require("./affirmation-order-by-with-aggregation.input");
const affirmation_scalar_field_enum_1 = require("./affirmation-scalar-field.enum");
const affirmation_scalar_where_with_aggregates_input_1 = require("./affirmation-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const affirmation_count_aggregate_input_1 = require("./affirmation-count-aggregate.input");
const affirmation_avg_aggregate_input_1 = require("./affirmation-avg-aggregate.input");
const affirmation_sum_aggregate_input_1 = require("./affirmation-sum-aggregate.input");
const affirmation_min_aggregate_input_1 = require("./affirmation-min-aggregate.input");
const affirmation_max_aggregate_input_1 = require("./affirmation-max-aggregate.input");
let AffirmationGroupByArgs = class AffirmationGroupByArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_input_1.AffirmationWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_input_1.AffirmationWhereInput)
], AffirmationGroupByArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [affirmation_order_by_with_aggregation_input_1.AffirmationOrderByWithAggregationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AffirmationGroupByArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [affirmation_scalar_field_enum_1.AffirmationScalarFieldEnum], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], AffirmationGroupByArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_scalar_where_with_aggregates_input_1.AffirmationScalarWhereWithAggregatesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_scalar_where_with_aggregates_input_1.AffirmationScalarWhereWithAggregatesInput)
], AffirmationGroupByArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationGroupByArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationGroupByArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_count_aggregate_input_1.AffirmationCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_count_aggregate_input_1.AffirmationCountAggregateInput)
], AffirmationGroupByArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_avg_aggregate_input_1.AffirmationAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_avg_aggregate_input_1.AffirmationAvgAggregateInput)
], AffirmationGroupByArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_sum_aggregate_input_1.AffirmationSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_sum_aggregate_input_1.AffirmationSumAggregateInput)
], AffirmationGroupByArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_min_aggregate_input_1.AffirmationMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_min_aggregate_input_1.AffirmationMinAggregateInput)
], AffirmationGroupByArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_max_aggregate_input_1.AffirmationMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_max_aggregate_input_1.AffirmationMaxAggregateInput)
], AffirmationGroupByArgs.prototype, "_max", void 0);
AffirmationGroupByArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], AffirmationGroupByArgs);
exports.AffirmationGroupByArgs = AffirmationGroupByArgs;
