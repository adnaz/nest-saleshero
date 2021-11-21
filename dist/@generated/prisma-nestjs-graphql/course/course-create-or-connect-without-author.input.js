"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_create_without_author_input_1 = require("./course-create-without-author.input");
let CourseCreateOrConnectWithoutAuthorInput = class CourseCreateOrConnectWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_author_input_1.CourseCreateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_create_without_author_input_1.CourseCreateWithoutAuthorInput)
], CourseCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
CourseCreateOrConnectWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseCreateOrConnectWithoutAuthorInput);
exports.CourseCreateOrConnectWithoutAuthorInput = CourseCreateOrConnectWithoutAuthorInput;
