"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUncheckedUpdateOneWithoutAudioInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_without_audio_input_1 = require("./course-create-without-audio.input");
const course_create_or_connect_without_audio_input_1 = require("./course-create-or-connect-without-audio.input");
const course_upsert_without_audio_input_1 = require("./course-upsert-without-audio.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_update_without_audio_input_1 = require("./course-update-without-audio.input");
let CourseUncheckedUpdateOneWithoutAudioInput = class CourseUncheckedUpdateOneWithoutAudioInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_audio_input_1.CourseCreateWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_without_audio_input_1.CourseCreateWithoutAudioInput)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_or_connect_without_audio_input_1.CourseCreateOrConnectWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_or_connect_without_audio_input_1.CourseCreateOrConnectWithoutAudioInput)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_upsert_without_audio_input_1.CourseUpsertWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_upsert_without_audio_input_1.CourseUpsertWithoutAudioInput)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_without_audio_input_1.CourseUpdateWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_update_without_audio_input_1.CourseUpdateWithoutAudioInput)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "update", void 0);
CourseUncheckedUpdateOneWithoutAudioInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUncheckedUpdateOneWithoutAudioInput);
exports.CourseUncheckedUpdateOneWithoutAudioInput = CourseUncheckedUpdateOneWithoutAudioInput;
