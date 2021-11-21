"use strict";
var CourseWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const file_relation_filter_input_1 = require("../file/file-relation-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const section_list_relation_filter_input_1 = require("../section/section-list-relation-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let CourseWhereInput = CourseWhereInput_1 = class CourseWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [CourseWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [CourseWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [CourseWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], CourseWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_filter_input_1.StringFilter)
], CourseWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CourseWhereInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_relation_filter_input_1.FileRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_relation_filter_input_1.FileRelationFilter)
], CourseWhereInput.prototype, "audio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], CourseWhereInput.prototype, "audioId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_relation_filter_input_1.FileRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_relation_filter_input_1.FileRelationFilter)
], CourseWhereInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], CourseWhereInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_list_relation_filter_input_1.SectionListRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_list_relation_filter_input_1.SectionListRelationFilter)
], CourseWhereInput.prototype, "sections", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], CourseWhereInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_relation_filter_input_1.UserRelationFilter)
], CourseWhereInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], CourseWhereInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], CourseWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], CourseWhereInput.prototype, "updatedAt", void 0);
CourseWhereInput = CourseWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseWhereInput);
exports.CourseWhereInput = CourseWhereInput;
