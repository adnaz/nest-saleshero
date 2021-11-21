"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUpsertWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_update_without_image_input_1 = require("./course-update-without-image.input");
const course_create_without_image_input_1 = require("./course-create-without-image.input");
let CourseUpsertWithoutImageInput = class CourseUpsertWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_without_image_input_1.CourseUpdateWithoutImageInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_update_without_image_input_1.CourseUpdateWithoutImageInput)
], CourseUpsertWithoutImageInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_image_input_1.CourseCreateWithoutImageInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_create_without_image_input_1.CourseCreateWithoutImageInput)
], CourseUpsertWithoutImageInput.prototype, "create", void 0);
CourseUpsertWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUpsertWithoutImageInput);
exports.CourseUpsertWithoutImageInput = CourseUpsertWithoutImageInput;
