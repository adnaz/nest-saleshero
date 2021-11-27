"use strict";
var SectionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const float_nullable_filter_input_1 = require("../prisma/float-nullable-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const file_relation_filter_input_1 = require("../file/file-relation-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const enum_type_section_nullable_filter_input_1 = require("../prisma/enum-type-section-nullable-filter.input");
const course_relation_filter_input_1 = require("../course/course-relation-filter.input");
const reply_list_relation_filter_input_1 = require("../reply/reply-list-relation-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let SectionWhereInput = SectionWhereInput_1 = class SectionWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SectionWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SectionWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [SectionWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], SectionWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => float_nullable_filter_input_1.FloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", float_nullable_filter_input_1.FloatNullableFilter)
], SectionWhereInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_filter_input_1.StringFilter)
], SectionWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], SectionWhereInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_relation_filter_input_1.FileRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_relation_filter_input_1.FileRelationFilter)
], SectionWhereInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], SectionWhereInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => enum_type_section_nullable_filter_input_1.EnumTypeSectionNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", enum_type_section_nullable_filter_input_1.EnumTypeSectionNullableFilter)
], SectionWhereInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_relation_filter_input_1.CourseRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_relation_filter_input_1.CourseRelationFilter)
], SectionWhereInput.prototype, "course", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], SectionWhereInput.prototype, "courseId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_list_relation_filter_input_1.ReplyListRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_list_relation_filter_input_1.ReplyListRelationFilter)
], SectionWhereInput.prototype, "replies", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], SectionWhereInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_relation_filter_input_1.UserRelationFilter)
], SectionWhereInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], SectionWhereInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], SectionWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], SectionWhereInput.prototype, "updatedAt", void 0);
SectionWhereInput = SectionWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionWhereInput);
exports.SectionWhereInput = SectionWhereInput;
