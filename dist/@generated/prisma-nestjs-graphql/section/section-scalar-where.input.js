"use strict";
var SectionScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const float_nullable_filter_input_1 = require("../prisma/float-nullable-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const enum_type_section_nullable_filter_input_1 = require("../prisma/enum-type-section-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let SectionScalarWhereInput = SectionScalarWhereInput_1 = class SectionScalarWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SectionScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SectionScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SectionScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], SectionScalarWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => float_nullable_filter_input_1.FloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", float_nullable_filter_input_1.FloatNullableFilter)
], SectionScalarWhereInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_filter_input_1.StringFilter)
], SectionScalarWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], SectionScalarWhereInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], SectionScalarWhereInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => enum_type_section_nullable_filter_input_1.EnumTypeSectionNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", enum_type_section_nullable_filter_input_1.EnumTypeSectionNullableFilter)
], SectionScalarWhereInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], SectionScalarWhereInput.prototype, "courseId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], SectionScalarWhereInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], SectionScalarWhereInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], SectionScalarWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], SectionScalarWhereInput.prototype, "updatedAt", void 0);
SectionScalarWhereInput = SectionScalarWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionScalarWhereInput);
exports.SectionScalarWhereInput = SectionScalarWhereInput;
