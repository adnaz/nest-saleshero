"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUpdateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const nullable_bool_field_update_operations_input_1 = require("../prisma/nullable-bool-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const file_update_one_without_course_audio_input_1 = require("../file/file-update-one-without-course-audio.input");
const file_update_one_without_course_image_input_1 = require("../file/file-update-one-without-course-image.input");
const section_update_many_without_course_input_1 = require("../section/section-update-many-without-course.input");
const user_update_one_without_courses_input_1 = require("../user/user-update-one-without-courses.input");
let CourseUpdateInput = class CourseUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CourseUpdateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], CourseUpdateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput)
], CourseUpdateInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], CourseUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], CourseUpdateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_one_without_course_audio_input_1.FileUpdateOneWithoutCourseAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_update_one_without_course_audio_input_1.FileUpdateOneWithoutCourseAudioInput)
], CourseUpdateInput.prototype, "audio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_one_without_course_image_input_1.FileUpdateOneWithoutCourseImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_update_one_without_course_image_input_1.FileUpdateOneWithoutCourseImageInput)
], CourseUpdateInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_many_without_course_input_1.SectionUpdateManyWithoutCourseInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_update_many_without_course_input_1.SectionUpdateManyWithoutCourseInput)
], CourseUpdateInput.prototype, "sections", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_one_without_courses_input_1.UserUpdateOneWithoutCoursesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_update_one_without_courses_input_1.UserUpdateOneWithoutCoursesInput)
], CourseUpdateInput.prototype, "author", void 0);
CourseUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUpdateInput);
exports.CourseUpdateInput = CourseUpdateInput;
