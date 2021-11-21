"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCourseArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_update_input_1 = require("./course-update.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
let UpdateOneCourseArgs = class UpdateOneCourseArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_input_1.CourseUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_update_input_1.CourseUpdateInput)
], UpdateOneCourseArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], UpdateOneCourseArgs.prototype, "where", void 0);
UpdateOneCourseArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateOneCourseArgs);
exports.UpdateOneCourseArgs = UpdateOneCourseArgs;
