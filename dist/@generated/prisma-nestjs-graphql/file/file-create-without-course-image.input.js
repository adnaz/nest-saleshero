"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateWithoutCourseImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_file_enum_1 = require("../prisma/type-file.enum");
const reply_create_nested_one_without_file_input_1 = require("../reply/reply-create-nested-one-without-file.input");
const actor_create_nested_one_without_avatar_input_1 = require("../actor/actor-create-nested-one-without-avatar.input");
const course_create_nested_one_without_audio_input_1 = require("../course/course-create-nested-one-without-audio.input");
const section_create_nested_one_without_image_input_1 = require("../section/section-create-nested-one-without-image.input");
let FileCreateWithoutCourseImageInput = class FileCreateWithoutCourseImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutCourseImageInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutCourseImageInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutCourseImageInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutCourseImageInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutCourseImageInput.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutCourseImageInput.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileCreateWithoutCourseImageInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileCreateWithoutCourseImageInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileCreateWithoutCourseImageInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_nested_one_without_file_input_1.ReplyCreateNestedOneWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_nested_one_without_file_input_1.ReplyCreateNestedOneWithoutFileInput)
], FileCreateWithoutCourseImageInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_nested_one_without_avatar_input_1.ActorCreateNestedOneWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_nested_one_without_avatar_input_1.ActorCreateNestedOneWithoutAvatarInput)
], FileCreateWithoutCourseImageInput.prototype, "actor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_nested_one_without_audio_input_1.CourseCreateNestedOneWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_nested_one_without_audio_input_1.CourseCreateNestedOneWithoutAudioInput)
], FileCreateWithoutCourseImageInput.prototype, "courseAudio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_nested_one_without_image_input_1.SectionCreateNestedOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_nested_one_without_image_input_1.SectionCreateNestedOneWithoutImageInput)
], FileCreateWithoutCourseImageInput.prototype, "section", void 0);
FileCreateWithoutCourseImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileCreateWithoutCourseImageInput);
exports.FileCreateWithoutCourseImageInput = FileCreateWithoutCourseImageInput;
