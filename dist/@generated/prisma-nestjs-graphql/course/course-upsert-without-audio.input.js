"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUpsertWithoutAudioInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_update_without_audio_input_1 = require("./course-update-without-audio.input");
const course_create_without_audio_input_1 = require("./course-create-without-audio.input");
let CourseUpsertWithoutAudioInput = class CourseUpsertWithoutAudioInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_without_audio_input_1.CourseUpdateWithoutAudioInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_update_without_audio_input_1.CourseUpdateWithoutAudioInput)
], CourseUpsertWithoutAudioInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_audio_input_1.CourseCreateWithoutAudioInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_create_without_audio_input_1.CourseCreateWithoutAudioInput)
], CourseUpsertWithoutAudioInput.prototype, "create", void 0);
CourseUpsertWithoutAudioInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUpsertWithoutAudioInput);
exports.CourseUpsertWithoutAudioInput = CourseUpsertWithoutAudioInput;
