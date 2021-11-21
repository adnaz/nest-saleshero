"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreateOrConnectWithoutAudioInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_create_without_audio_input_1 = require("./course-create-without-audio.input");
let CourseCreateOrConnectWithoutAudioInput = class CourseCreateOrConnectWithoutAudioInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseCreateOrConnectWithoutAudioInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_audio_input_1.CourseCreateWithoutAudioInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_create_without_audio_input_1.CourseCreateWithoutAudioInput)
], CourseCreateOrConnectWithoutAudioInput.prototype, "create", void 0);
CourseCreateOrConnectWithoutAudioInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseCreateOrConnectWithoutAudioInput);
exports.CourseCreateOrConnectWithoutAudioInput = CourseCreateOrConnectWithoutAudioInput;
