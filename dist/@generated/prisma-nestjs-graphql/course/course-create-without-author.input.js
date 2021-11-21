"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_nested_one_without_course_audio_input_1 = require("../file/file-create-nested-one-without-course-audio.input");
const file_create_nested_one_without_course_image_input_1 = require("../file/file-create-nested-one-without-course-image.input");
const section_create_nested_many_without_course_input_1 = require("../section/section-create-nested-many-without-course.input");
let CourseCreateWithoutAuthorInput = class CourseCreateWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], CourseCreateWithoutAuthorInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], CourseCreateWithoutAuthorInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseCreateWithoutAuthorInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseCreateWithoutAuthorInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_nested_one_without_course_audio_input_1.FileCreateNestedOneWithoutCourseAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_nested_one_without_course_audio_input_1.FileCreateNestedOneWithoutCourseAudioInput)
], CourseCreateWithoutAuthorInput.prototype, "audio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_nested_one_without_course_image_input_1.FileCreateNestedOneWithoutCourseImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_nested_one_without_course_image_input_1.FileCreateNestedOneWithoutCourseImageInput)
], CourseCreateWithoutAuthorInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_nested_many_without_course_input_1.SectionCreateNestedManyWithoutCourseInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_nested_many_without_course_input_1.SectionCreateNestedManyWithoutCourseInput)
], CourseCreateWithoutAuthorInput.prototype, "sections", void 0);
CourseCreateWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseCreateWithoutAuthorInput);
exports.CourseCreateWithoutAuthorInput = CourseCreateWithoutAuthorInput;
