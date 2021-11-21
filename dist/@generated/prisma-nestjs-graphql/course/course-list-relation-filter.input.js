"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseListRelationFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_input_1 = require("./course-where.input");
let CourseListRelationFilter = class CourseListRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_input_1.CourseWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_input_1.CourseWhereInput)
], CourseListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_input_1.CourseWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_input_1.CourseWhereInput)
], CourseListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_input_1.CourseWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_input_1.CourseWhereInput)
], CourseListRelationFilter.prototype, "none", void 0);
CourseListRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseListRelationFilter);
exports.CourseListRelationFilter = CourseListRelationFilter;
