"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreateWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const file_create_nested_one_without_course_audio_input_1 = require("../file/file-create-nested-one-without-course-audio.input");
const section_create_nested_many_without_course_input_1 = require("../section/section-create-nested-many-without-course.input");
const user_create_nested_one_without_courses_input_1 = require("../user/user-create-nested-one-without-courses.input");
let CourseCreateWithoutImageInput = class CourseCreateWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCreateWithoutImageInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], CourseCreateWithoutImageInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], CourseCreateWithoutImageInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseCreateWithoutImageInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseCreateWithoutImageInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseCreateWithoutImageInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_nested_one_without_course_audio_input_1.FileCreateNestedOneWithoutCourseAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_nested_one_without_course_audio_input_1.FileCreateNestedOneWithoutCourseAudioInput)
], CourseCreateWithoutImageInput.prototype, "audio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_nested_many_without_course_input_1.SectionCreateNestedManyWithoutCourseInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_nested_many_without_course_input_1.SectionCreateNestedManyWithoutCourseInput)
], CourseCreateWithoutImageInput.prototype, "sections", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_nested_one_without_courses_input_1.UserCreateNestedOneWithoutCoursesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_nested_one_without_courses_input_1.UserCreateNestedOneWithoutCoursesInput)
], CourseCreateWithoutImageInput.prototype, "author", void 0);
CourseCreateWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseCreateWithoutImageInput);
exports.CourseCreateWithoutImageInput = CourseCreateWithoutImageInput;
