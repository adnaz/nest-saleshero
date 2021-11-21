"use strict";
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const app_list_relation_filter_input_1 = require("../app/app-list-relation-filter.input");
const post_list_relation_filter_input_1 = require("../post/post-list-relation-filter.input");
const course_list_relation_filter_input_1 = require("../course/course-list-relation-filter.input");
const section_list_relation_filter_input_1 = require("../section/section-list-relation-filter.input");
const enum_role_filter_input_1 = require("../prisma/enum-role-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], UserWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_filter_input_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_filter_input_1.StringFilter)
], UserWhereInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_list_relation_filter_input_1.AppListRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_list_relation_filter_input_1.AppListRelationFilter)
], UserWhereInput.prototype, "apps", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_list_relation_filter_input_1.PostListRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_list_relation_filter_input_1.PostListRelationFilter)
], UserWhereInput.prototype, "posts", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_list_relation_filter_input_1.CourseListRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_list_relation_filter_input_1.CourseListRelationFilter)
], UserWhereInput.prototype, "courses", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_list_relation_filter_input_1.SectionListRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_list_relation_filter_input_1.SectionListRelationFilter)
], UserWhereInput.prototype, "sections", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => enum_role_filter_input_1.EnumRoleFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", enum_role_filter_input_1.EnumRoleFilter)
], UserWhereInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], UserWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], UserWhereInput.prototype, "updatedAt", void 0);
UserWhereInput = UserWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
