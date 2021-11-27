"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUncheckedCreateWithoutAudioInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const section_unchecked_create_nested_many_without_course_input_1 = require("../section/section-unchecked-create-nested-many-without-course.input");
let CourseUncheckedCreateWithoutAudioInput = class CourseUncheckedCreateWithoutAudioInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseUncheckedCreateWithoutAudioInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseUncheckedCreateWithoutAudioInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], CourseUncheckedCreateWithoutAudioInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], CourseUncheckedCreateWithoutAudioInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseUncheckedCreateWithoutAudioInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseUncheckedCreateWithoutAudioInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseUncheckedCreateWithoutAudioInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseUncheckedCreateWithoutAudioInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseUncheckedCreateWithoutAudioInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_unchecked_create_nested_many_without_course_input_1.SectionUncheckedCreateNestedManyWithoutCourseInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_unchecked_create_nested_many_without_course_input_1.SectionUncheckedCreateNestedManyWithoutCourseInput)
], CourseUncheckedCreateWithoutAudioInput.prototype, "sections", void 0);
CourseUncheckedCreateWithoutAudioInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUncheckedCreateWithoutAudioInput);
exports.CourseUncheckedCreateWithoutAudioInput = CourseUncheckedCreateWithoutAudioInput;
