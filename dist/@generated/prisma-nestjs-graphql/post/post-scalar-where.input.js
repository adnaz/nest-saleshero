"use strict";
var PostScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const float_nullable_filter_input_1 = require("../prisma/float-nullable-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let PostScalarWhereInput = PostScalarWhereInput_1 = class PostScalarWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [PostScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [PostScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [PostScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], PostScalarWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => float_nullable_filter_input_1.FloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", float_nullable_filter_input_1.FloatNullableFilter)
], PostScalarWhereInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_filter_input_1.StringFilter)
], PostScalarWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], PostScalarWhereInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], PostScalarWhereInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], PostScalarWhereInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], PostScalarWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], PostScalarWhereInput.prototype, "updatedAt", void 0);
PostScalarWhereInput = PostScalarWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostScalarWhereInput);
exports.PostScalarWhereInput = PostScalarWhereInput;
