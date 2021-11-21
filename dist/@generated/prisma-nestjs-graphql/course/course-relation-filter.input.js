"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRelationFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_input_1 = require("./course-where.input");
let CourseRelationFilter = class CourseRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_input_1.CourseWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_input_1.CourseWhereInput)
], CourseRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_input_1.CourseWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_input_1.CourseWhereInput)
], CourseRelationFilter.prototype, "isNot", void 0);
CourseRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseRelationFilter);
exports.CourseRelationFilter = CourseRelationFilter;
