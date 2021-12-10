"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationAggregateArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_where_input_1 = require("./affirmation-where.input");
const affirmation_order_by_with_relation_input_1 = require("./affirmation-order-by-with-relation.input");
const affirmation_where_unique_input_1 = require("./affirmation-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const affirmation_count_aggregate_input_1 = require("./affirmation-count-aggregate.input");
const affirmation_avg_aggregate_input_1 = require("./affirmation-avg-aggregate.input");
const affirmation_sum_aggregate_input_1 = require("./affirmation-sum-aggregate.input");
const affirmation_min_aggregate_input_1 = require("./affirmation-min-aggregate.input");
const affirmation_max_aggregate_input_1 = require("./affirmation-max-aggregate.input");
let AffirmationAggregateArgs = class AffirmationAggregateArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_input_1.AffirmationWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_input_1.AffirmationWhereInput)
], AffirmationAggregateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [affirmation_order_by_with_relation_input_1.AffirmationOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AffirmationAggregateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_unique_input_1.AffirmationWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_unique_input_1.AffirmationWhereUniqueInput)
], AffirmationAggregateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationAggregateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationAggregateArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_count_aggregate_input_1.AffirmationCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_count_aggregate_input_1.AffirmationCountAggregateInput)
], AffirmationAggregateArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_avg_aggregate_input_1.AffirmationAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_avg_aggregate_input_1.AffirmationAvgAggregateInput)
], AffirmationAggregateArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_sum_aggregate_input_1.AffirmationSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_sum_aggregate_input_1.AffirmationSumAggregateInput)
], AffirmationAggregateArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_min_aggregate_input_1.AffirmationMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_min_aggregate_input_1.AffirmationMinAggregateInput)
], AffirmationAggregateArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_max_aggregate_input_1.AffirmationMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_max_aggregate_input_1.AffirmationMaxAggregateInput)
], AffirmationAggregateArgs.prototype, "_max", void 0);
AffirmationAggregateArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], AffirmationAggregateArgs);
exports.AffirmationAggregateArgs = AffirmationAggregateArgs;
