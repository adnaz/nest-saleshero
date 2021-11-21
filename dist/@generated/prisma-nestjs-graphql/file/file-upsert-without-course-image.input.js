"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpsertWithoutCourseImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_update_without_course_image_input_1 = require("./file-update-without-course-image.input");
const file_create_without_course_image_input_1 = require("./file-create-without-course-image.input");
let FileUpsertWithoutCourseImageInput = class FileUpsertWithoutCourseImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_without_course_image_input_1.FileUpdateWithoutCourseImageInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_update_without_course_image_input_1.FileUpdateWithoutCourseImageInput)
], FileUpsertWithoutCourseImageInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_course_image_input_1.FileCreateWithoutCourseImageInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_create_without_course_image_input_1.FileCreateWithoutCourseImageInput)
], FileUpsertWithoutCourseImageInput.prototype, "create", void 0);
FileUpsertWithoutCourseImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpsertWithoutCourseImageInput);
exports.FileUpsertWithoutCourseImageInput = FileUpsertWithoutCourseImageInput;
