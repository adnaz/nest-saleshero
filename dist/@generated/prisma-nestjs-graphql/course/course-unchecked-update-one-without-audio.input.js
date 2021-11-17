"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUncheckedUpdateOneWithoutAudioInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_without_audio_input_1 = require("./course-create-without-audio.input");
const course_create_or_connect_without_audio_input_1 = require("./course-create-or-connect-without-audio.input");
const course_upsert_without_audio_input_1 = require("./course-upsert-without-audio.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_update_without_audio_input_1 = require("./course-update-without-audio.input");
let CourseUncheckedUpdateOneWithoutAudioInput = class CourseUncheckedUpdateOneWithoutAudioInput {
};
__decorate([
    (0, graphql_1.Field)(() => course_create_without_audio_input_1.CourseCreateWithoutAudioInput, { nullable: true }),
    __metadata("design:type", course_create_without_audio_input_1.CourseCreateWithoutAudioInput)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_create_or_connect_without_audio_input_1.CourseCreateOrConnectWithoutAudioInput, { nullable: true }),
    __metadata("design:type", course_create_or_connect_without_audio_input_1.CourseCreateOrConnectWithoutAudioInput)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_upsert_without_audio_input_1.CourseUpsertWithoutAudioInput, { nullable: true }),
    __metadata("design:type", course_upsert_without_audio_input_1.CourseUpsertWithoutAudioInput)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: true }),
    __metadata("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_update_without_audio_input_1.CourseUpdateWithoutAudioInput, { nullable: true }),
    __metadata("design:type", course_update_without_audio_input_1.CourseUpdateWithoutAudioInput)
], CourseUncheckedUpdateOneWithoutAudioInput.prototype, "update", void 0);
CourseUncheckedUpdateOneWithoutAudioInput = __decorate([
    (0, graphql_2.InputType)()
], CourseUncheckedUpdateOneWithoutAudioInput);
exports.CourseUncheckedUpdateOneWithoutAudioInput = CourseUncheckedUpdateOneWithoutAudioInput;
//# sourceMappingURL=course-unchecked-update-one-without-audio.input.js.map