"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUpdateManyWithWhereWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_scalar_where_input_1 = require("./course-scalar-where.input");
const course_update_many_mutation_input_1 = require("./course-update-many-mutation.input");
let CourseUpdateManyWithWhereWithoutAuthorInput = class CourseUpdateManyWithWhereWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_scalar_where_input_1.CourseScalarWhereInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_scalar_where_input_1.CourseScalarWhereInput)
], CourseUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_many_mutation_input_1.CourseUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_update_many_mutation_input_1.CourseUpdateManyMutationInput)
], CourseUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
CourseUpdateManyWithWhereWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUpdateManyWithWhereWithoutAuthorInput);
exports.CourseUpdateManyWithWhereWithoutAuthorInput = CourseUpdateManyWithWhereWithoutAuthorInput;
