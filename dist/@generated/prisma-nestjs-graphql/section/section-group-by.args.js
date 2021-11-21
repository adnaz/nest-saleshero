"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionGroupByArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_input_1 = require("./section-where.input");
const section_order_by_with_aggregation_input_1 = require("./section-order-by-with-aggregation.input");
const section_scalar_field_enum_1 = require("./section-scalar-field.enum");
const section_scalar_where_with_aggregates_input_1 = require("./section-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const section_count_aggregate_input_1 = require("./section-count-aggregate.input");
const section_avg_aggregate_input_1 = require("./section-avg-aggregate.input");
const section_sum_aggregate_input_1 = require("./section-sum-aggregate.input");
const section_min_aggregate_input_1 = require("./section-min-aggregate.input");
const section_max_aggregate_input_1 = require("./section-max-aggregate.input");
let SectionGroupByArgs = class SectionGroupByArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_input_1.SectionWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_input_1.SectionWhereInput)
], SectionGroupByArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_order_by_with_aggregation_input_1.SectionOrderByWithAggregationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionGroupByArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_scalar_field_enum_1.SectionScalarFieldEnum], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionGroupByArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_scalar_where_with_aggregates_input_1.SectionScalarWhereWithAggregatesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_scalar_where_with_aggregates_input_1.SectionScalarWhereWithAggregatesInput)
], SectionGroupByArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionGroupByArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionGroupByArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_count_aggregate_input_1.SectionCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_count_aggregate_input_1.SectionCountAggregateInput)
], SectionGroupByArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_avg_aggregate_input_1.SectionAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_avg_aggregate_input_1.SectionAvgAggregateInput)
], SectionGroupByArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_sum_aggregate_input_1.SectionSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_sum_aggregate_input_1.SectionSumAggregateInput)
], SectionGroupByArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_min_aggregate_input_1.SectionMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_min_aggregate_input_1.SectionMinAggregateInput)
], SectionGroupByArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_max_aggregate_input_1.SectionMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_max_aggregate_input_1.SectionMaxAggregateInput)
], SectionGroupByArgs.prototype, "_max", void 0);
SectionGroupByArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], SectionGroupByArgs);
exports.SectionGroupByArgs = SectionGroupByArgs;
