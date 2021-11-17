"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUpdateWithoutAudioInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const nullable_bool_field_update_operations_input_1 = require("../prisma/nullable-bool-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const graphql_3 = require("@nestjs/graphql");
const file_update_one_without_course_image_input_1 = require("../file/file-update-one-without-course-image.input");
const section_update_many_without_course_input_1 = require("../section/section-update-many-without-course.input");
const user_update_one_without_courses_input_1 = require("../user/user-update-one-without-courses.input");
let CourseUpdateWithoutAudioInput = class CourseUpdateWithoutAudioInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CourseUpdateWithoutAudioInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], CourseUpdateWithoutAudioInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput)
], CourseUpdateWithoutAudioInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], CourseUpdateWithoutAudioInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], CourseUpdateWithoutAudioInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_update_one_without_course_image_input_1.FileUpdateOneWithoutCourseImageInput, { nullable: true }),
    __metadata("design:type", file_update_one_without_course_image_input_1.FileUpdateOneWithoutCourseImageInput)
], CourseUpdateWithoutAudioInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_update_many_without_course_input_1.SectionUpdateManyWithoutCourseInput, { nullable: true }),
    __metadata("design:type", section_update_many_without_course_input_1.SectionUpdateManyWithoutCourseInput)
], CourseUpdateWithoutAudioInput.prototype, "sections", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", user_update_one_without_courses_input_1.UserUpdateOneWithoutCoursesInput)
], CourseUpdateWithoutAudioInput.prototype, "author", void 0);
CourseUpdateWithoutAudioInput = __decorate([
    (0, graphql_2.InputType)()
], CourseUpdateWithoutAudioInput);
exports.CourseUpdateWithoutAudioInput = CourseUpdateWithoutAudioInput;
//# sourceMappingURL=course-update-without-audio.input.js.map