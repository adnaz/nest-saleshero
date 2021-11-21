"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateOneWithoutCourseAudioInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_course_audio_input_1 = require("./file-create-without-course-audio.input");
const file_create_or_connect_without_course_audio_input_1 = require("./file-create-or-connect-without-course-audio.input");
const file_upsert_without_course_audio_input_1 = require("./file-upsert-without-course-audio.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
const file_update_without_course_audio_input_1 = require("./file-update-without-course-audio.input");
let FileUpdateOneWithoutCourseAudioInput = class FileUpdateOneWithoutCourseAudioInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_course_audio_input_1.FileCreateWithoutCourseAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_without_course_audio_input_1.FileCreateWithoutCourseAudioInput)
], FileUpdateOneWithoutCourseAudioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_or_connect_without_course_audio_input_1.FileCreateOrConnectWithoutCourseAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_or_connect_without_course_audio_input_1.FileCreateOrConnectWithoutCourseAudioInput)
], FileUpdateOneWithoutCourseAudioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_upsert_without_course_audio_input_1.FileUpsertWithoutCourseAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_upsert_without_course_audio_input_1.FileUpsertWithoutCourseAudioInput)
], FileUpdateOneWithoutCourseAudioInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], FileUpdateOneWithoutCourseAudioInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], FileUpdateOneWithoutCourseAudioInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileUpdateOneWithoutCourseAudioInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_without_course_audio_input_1.FileUpdateWithoutCourseAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_update_without_course_audio_input_1.FileUpdateWithoutCourseAudioInput)
], FileUpdateOneWithoutCourseAudioInput.prototype, "update", void 0);
FileUpdateOneWithoutCourseAudioInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpdateOneWithoutCourseAudioInput);
exports.FileUpdateOneWithoutCourseAudioInput = FileUpdateOneWithoutCourseAudioInput;
