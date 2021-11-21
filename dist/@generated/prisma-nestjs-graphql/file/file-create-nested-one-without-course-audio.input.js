"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateNestedOneWithoutCourseAudioInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_course_audio_input_1 = require("./file-create-without-course-audio.input");
const file_create_or_connect_without_course_audio_input_1 = require("./file-create-or-connect-without-course-audio.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
let FileCreateNestedOneWithoutCourseAudioInput = class FileCreateNestedOneWithoutCourseAudioInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_course_audio_input_1.FileCreateWithoutCourseAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_without_course_audio_input_1.FileCreateWithoutCourseAudioInput)
], FileCreateNestedOneWithoutCourseAudioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_or_connect_without_course_audio_input_1.FileCreateOrConnectWithoutCourseAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_or_connect_without_course_audio_input_1.FileCreateOrConnectWithoutCourseAudioInput)
], FileCreateNestedOneWithoutCourseAudioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileCreateNestedOneWithoutCourseAudioInput.prototype, "connect", void 0);
FileCreateNestedOneWithoutCourseAudioInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileCreateNestedOneWithoutCourseAudioInput);
exports.FileCreateNestedOneWithoutCourseAudioInput = FileCreateNestedOneWithoutCourseAudioInput;
