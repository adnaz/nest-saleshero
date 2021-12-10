"use strict";
var AffirmationWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const float_nullable_filter_input_1 = require("../prisma/float-nullable-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const file_relation_filter_input_1 = require("../file/file-relation-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let AffirmationWhereInput = AffirmationWhereInput_1 = class AffirmationWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [AffirmationWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AffirmationWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [AffirmationWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AffirmationWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [AffirmationWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AffirmationWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], AffirmationWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => float_nullable_filter_input_1.FloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", float_nullable_filter_input_1.FloatNullableFilter)
], AffirmationWhereInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_filter_input_1.StringFilter)
], AffirmationWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], AffirmationWhereInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_relation_filter_input_1.FileRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_relation_filter_input_1.FileRelationFilter)
], AffirmationWhereInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], AffirmationWhereInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], AffirmationWhereInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], AffirmationWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], AffirmationWhereInput.prototype, "updatedAt", void 0);
AffirmationWhereInput = AffirmationWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AffirmationWhereInput);
exports.AffirmationWhereInput = AffirmationWhereInput;
