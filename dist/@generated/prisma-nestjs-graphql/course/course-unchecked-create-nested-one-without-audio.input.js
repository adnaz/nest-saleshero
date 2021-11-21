"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUncheckedCreateNestedOneWithoutAudioInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_without_audio_input_1 = require("./course-create-without-audio.input");
const course_create_or_connect_without_audio_input_1 = require("./course-create-or-connect-without-audio.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
let CourseUncheckedCreateNestedOneWithoutAudioInput = class CourseUncheckedCreateNestedOneWithoutAudioInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_audio_input_1.CourseCreateWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_without_audio_input_1.CourseCreateWithoutAudioInput)
], CourseUncheckedCreateNestedOneWithoutAudioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_or_connect_without_audio_input_1.CourseCreateOrConnectWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_or_connect_without_audio_input_1.CourseCreateOrConnectWithoutAudioInput)
], CourseUncheckedCreateNestedOneWithoutAudioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseUncheckedCreateNestedOneWithoutAudioInput.prototype, "connect", void 0);
CourseUncheckedCreateNestedOneWithoutAudioInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUncheckedCreateNestedOneWithoutAudioInput);
exports.CourseUncheckedCreateNestedOneWithoutAudioInput = CourseUncheckedCreateNestedOneWithoutAudioInput;
