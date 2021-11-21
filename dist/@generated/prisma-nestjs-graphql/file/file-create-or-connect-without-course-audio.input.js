"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateOrConnectWithoutCourseAudioInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_unique_input_1 = require("./file-where-unique.input");
const file_create_without_course_audio_input_1 = require("./file-create-without-course-audio.input");
let FileCreateOrConnectWithoutCourseAudioInput = class FileCreateOrConnectWithoutCourseAudioInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileCreateOrConnectWithoutCourseAudioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_course_audio_input_1.FileCreateWithoutCourseAudioInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_create_without_course_audio_input_1.FileCreateWithoutCourseAudioInput)
], FileCreateOrConnectWithoutCourseAudioInput.prototype, "create", void 0);
FileCreateOrConnectWithoutCourseAudioInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileCreateOrConnectWithoutCourseAudioInput);
exports.FileCreateOrConnectWithoutCourseAudioInput = FileCreateOrConnectWithoutCourseAudioInput;
