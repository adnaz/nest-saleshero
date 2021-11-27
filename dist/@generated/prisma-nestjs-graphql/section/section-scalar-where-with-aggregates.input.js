"use strict";
var SectionScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const float_nullable_with_aggregates_filter_input_1 = require("../prisma/float-nullable-with-aggregates-filter.input");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const string_nullable_with_aggregates_filter_input_1 = require("../prisma/string-nullable-with-aggregates-filter.input");
const int_nullable_with_aggregates_filter_input_1 = require("../prisma/int-nullable-with-aggregates-filter.input");
const enum_type_section_nullable_with_aggregates_filter_input_1 = require("../prisma/enum-type-section-nullable-with-aggregates-filter.input");
const bool_nullable_with_aggregates_filter_input_1 = require("../prisma/bool-nullable-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let SectionScalarWhereWithAggregatesInput = SectionScalarWhereWithAggregatesInput_1 = class SectionScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SectionScalarWhereWithAggregatesInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SectionScalarWhereWithAggregatesInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SectionScalarWhereWithAggregatesInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => float_nullable_with_aggregates_filter_input_1.FloatNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", float_nullable_with_aggregates_filter_input_1.FloatNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => enum_type_section_nullable_with_aggregates_filter_input_1.EnumTypeSectionNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", enum_type_section_nullable_with_aggregates_filter_input_1.EnumTypeSectionNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "courseId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => bool_nullable_with_aggregates_filter_input_1.BoolNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", bool_nullable_with_aggregates_filter_input_1.BoolNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
SectionScalarWhereWithAggregatesInput = SectionScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionScalarWhereWithAggregatesInput);
exports.SectionScalarWhereWithAggregatesInput = SectionScalarWhereWithAggregatesInput;
