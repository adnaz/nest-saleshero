"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_update_without_author_input_1 = require("./course-update-without-author.input");
const course_create_without_author_input_1 = require("./course-create-without-author.input");
let CourseUpsertWithWhereUniqueWithoutAuthorInput = class CourseUpsertWithWhereUniqueWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_without_author_input_1.CourseUpdateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_update_without_author_input_1.CourseUpdateWithoutAuthorInput)
], CourseUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_author_input_1.CourseCreateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_create_without_author_input_1.CourseCreateWithoutAuthorInput)
], CourseUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
CourseUpsertWithWhereUniqueWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUpsertWithWhereUniqueWithoutAuthorInput);
exports.CourseUpsertWithWhereUniqueWithoutAuthorInput = CourseUpsertWithWhereUniqueWithoutAuthorInput;
