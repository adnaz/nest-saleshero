"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCourseArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_update_many_mutation_input_1 = require("./course-update-many-mutation.input");
const course_where_input_1 = require("./course-where.input");
let UpdateManyCourseArgs = class UpdateManyCourseArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_many_mutation_input_1.CourseUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_update_many_mutation_input_1.CourseUpdateManyMutationInput)
], UpdateManyCourseArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_input_1.CourseWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_input_1.CourseWhereInput)
], UpdateManyCourseArgs.prototype, "where", void 0);
UpdateManyCourseArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateManyCourseArgs);
exports.UpdateManyCourseArgs = UpdateManyCourseArgs;
