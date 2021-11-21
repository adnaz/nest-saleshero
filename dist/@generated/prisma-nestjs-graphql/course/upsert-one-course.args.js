"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCourseArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_create_input_1 = require("./course-create.input");
const course_update_input_1 = require("./course-update.input");
let UpsertOneCourseArgs = class UpsertOneCourseArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], UpsertOneCourseArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_input_1.CourseCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_create_input_1.CourseCreateInput)
], UpsertOneCourseArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_input_1.CourseUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_update_input_1.CourseUpdateInput)
], UpsertOneCourseArgs.prototype, "update", void 0);
UpsertOneCourseArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpsertOneCourseArgs);
exports.UpsertOneCourseArgs = UpsertOneCourseArgs;
