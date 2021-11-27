"use strict";
var CourseScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const float_nullable_filter_input_1 = require("../prisma/float-nullable-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let CourseScalarWhereInput = CourseScalarWhereInput_1 = class CourseScalarWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [CourseScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [CourseScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [CourseScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], CourseScalarWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => float_nullable_filter_input_1.FloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", float_nullable_filter_input_1.FloatNullableFilter)
], CourseScalarWhereInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_filter_input_1.StringFilter)
], CourseScalarWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CourseScalarWhereInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], CourseScalarWhereInput.prototype, "audioId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], CourseScalarWhereInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], CourseScalarWhereInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], CourseScalarWhereInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], CourseScalarWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], CourseScalarWhereInput.prototype, "updatedAt", void 0);
CourseScalarWhereInput = CourseScalarWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseScalarWhereInput);
exports.CourseScalarWhereInput = CourseScalarWhereInput;
