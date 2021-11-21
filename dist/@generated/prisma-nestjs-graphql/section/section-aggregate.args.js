"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionAggregateArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_input_1 = require("./section-where.input");
const section_order_by_with_relation_input_1 = require("./section-order-by-with-relation.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const section_count_aggregate_input_1 = require("./section-count-aggregate.input");
const section_avg_aggregate_input_1 = require("./section-avg-aggregate.input");
const section_sum_aggregate_input_1 = require("./section-sum-aggregate.input");
const section_min_aggregate_input_1 = require("./section-min-aggregate.input");
const section_max_aggregate_input_1 = require("./section-max-aggregate.input");
let SectionAggregateArgs = class SectionAggregateArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_input_1.SectionWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_input_1.SectionWhereInput)
], SectionAggregateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_order_by_with_relation_input_1.SectionOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionAggregateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], SectionAggregateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionAggregateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionAggregateArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_count_aggregate_input_1.SectionCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_count_aggregate_input_1.SectionCountAggregateInput)
], SectionAggregateArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_avg_aggregate_input_1.SectionAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_avg_aggregate_input_1.SectionAvgAggregateInput)
], SectionAggregateArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_sum_aggregate_input_1.SectionSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_sum_aggregate_input_1.SectionSumAggregateInput)
], SectionAggregateArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_min_aggregate_input_1.SectionMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_min_aggregate_input_1.SectionMinAggregateInput)
], SectionAggregateArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_max_aggregate_input_1.SectionMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_max_aggregate_input_1.SectionMaxAggregateInput)
], SectionAggregateArgs.prototype, "_max", void 0);
SectionAggregateArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], SectionAggregateArgs);
exports.SectionAggregateArgs = SectionAggregateArgs;
