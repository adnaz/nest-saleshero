"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCourseArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_input_1 = require("./course-where.input");
const course_order_by_with_relation_input_1 = require("./course-order-by-with-relation.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const course_scalar_field_enum_1 = require("./course-scalar-field.enum");
let FindManyCourseArgs = class FindManyCourseArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_input_1.CourseWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_input_1.CourseWhereInput)
], FindManyCourseArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_order_by_with_relation_input_1.CourseOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyCourseArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], FindManyCourseArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyCourseArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyCourseArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_scalar_field_enum_1.CourseScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyCourseArgs.prototype, "distinct", void 0);
FindManyCourseArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManyCourseArgs);
exports.FindManyCourseArgs = FindManyCourseArgs;
