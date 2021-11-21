"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCourseArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_input_1 = require("./course-where.input");
let DeleteManyCourseArgs = class DeleteManyCourseArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_input_1.CourseWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_input_1.CourseWhereInput)
], DeleteManyCourseArgs.prototype, "where", void 0);
DeleteManyCourseArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteManyCourseArgs);
exports.DeleteManyCourseArgs = DeleteManyCourseArgs;
