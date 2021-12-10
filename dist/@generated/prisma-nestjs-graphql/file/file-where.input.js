"use strict";
var FileWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const reply_relation_filter_input_1 = require("../reply/reply-relation-filter.input");
const actor_relation_filter_input_1 = require("../actor/actor-relation-filter.input");
const affirmation_relation_filter_input_1 = require("../affirmation/affirmation-relation-filter.input");
const course_relation_filter_input_1 = require("../course/course-relation-filter.input");
const section_relation_filter_input_1 = require("../section/section-relation-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const enum_type_file_nullable_filter_input_1 = require("../prisma/enum-type-file-nullable-filter.input");
let FileWhereInput = FileWhereInput_1 = class FileWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [FileWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FileWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [FileWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FileWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [FileWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FileWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], FileWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], FileWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], FileWhereInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], FileWhereInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], FileWhereInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], FileWhereInput.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], FileWhereInput.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_relation_filter_input_1.ReplyRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_relation_filter_input_1.ReplyRelationFilter)
], FileWhereInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_relation_filter_input_1.ActorRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_relation_filter_input_1.ActorRelationFilter)
], FileWhereInput.prototype, "actor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_relation_filter_input_1.AffirmationRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_relation_filter_input_1.AffirmationRelationFilter)
], FileWhereInput.prototype, "affirmation", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_relation_filter_input_1.CourseRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_relation_filter_input_1.CourseRelationFilter)
], FileWhereInput.prototype, "courseImage", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_relation_filter_input_1.CourseRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_relation_filter_input_1.CourseRelationFilter)
], FileWhereInput.prototype, "courseAudio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_relation_filter_input_1.SectionRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_relation_filter_input_1.SectionRelationFilter)
], FileWhereInput.prototype, "section", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], FileWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], FileWhereInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => enum_type_file_nullable_filter_input_1.EnumTypeFileNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", enum_type_file_nullable_filter_input_1.EnumTypeFileNullableFilter)
], FileWhereInput.prototype, "type", void 0);
FileWhereInput = FileWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileWhereInput);
exports.FileWhereInput = FileWhereInput;
