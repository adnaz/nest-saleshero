"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpsertWithoutCourseAudioInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_update_without_course_audio_input_1 = require("./file-update-without-course-audio.input");
const file_create_without_course_audio_input_1 = require("./file-create-without-course-audio.input");
let FileUpsertWithoutCourseAudioInput = class FileUpsertWithoutCourseAudioInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_without_course_audio_input_1.FileUpdateWithoutCourseAudioInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_update_without_course_audio_input_1.FileUpdateWithoutCourseAudioInput)
], FileUpsertWithoutCourseAudioInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_course_audio_input_1.FileCreateWithoutCourseAudioInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_create_without_course_audio_input_1.FileCreateWithoutCourseAudioInput)
], FileUpsertWithoutCourseAudioInput.prototype, "create", void 0);
FileUpsertWithoutCourseAudioInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpsertWithoutCourseAudioInput);
exports.FileUpsertWithoutCourseAudioInput = FileUpsertWithoutCourseAudioInput;
