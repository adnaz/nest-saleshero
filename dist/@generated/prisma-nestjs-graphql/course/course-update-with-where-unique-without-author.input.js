"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_update_without_author_input_1 = require("./course-update-without-author.input");
let CourseUpdateWithWhereUniqueWithoutAuthorInput = class CourseUpdateWithWhereUniqueWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_without_author_input_1.CourseUpdateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_update_without_author_input_1.CourseUpdateWithoutAuthorInput)
], CourseUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
CourseUpdateWithWhereUniqueWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUpdateWithWhereUniqueWithoutAuthorInput);
exports.CourseUpdateWithWhereUniqueWithoutAuthorInput = CourseUpdateWithWhereUniqueWithoutAuthorInput;
