"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCourseArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_unique_input_1 = require("./course-where-unique.input");
let FindUniqueCourseArgs = class FindUniqueCourseArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], FindUniqueCourseArgs.prototype, "where", void 0);
FindUniqueCourseArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindUniqueCourseArgs);
exports.FindUniqueCourseArgs = FindUniqueCourseArgs;
