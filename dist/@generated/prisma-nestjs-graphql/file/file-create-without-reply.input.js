"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_file_enum_1 = require("../prisma/type-file.enum");
const actor_create_nested_one_without_avatar_input_1 = require("../actor/actor-create-nested-one-without-avatar.input");
const course_create_nested_one_without_image_input_1 = require("../course/course-create-nested-one-without-image.input");
const course_create_nested_one_without_audio_input_1 = require("../course/course-create-nested-one-without-audio.input");
const section_create_nested_one_without_image_input_1 = require("../section/section-create-nested-one-without-image.input");
let FileCreateWithoutReplyInput = class FileCreateWithoutReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutReplyInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutReplyInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutReplyInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutReplyInput.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutReplyInput.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileCreateWithoutReplyInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileCreateWithoutReplyInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileCreateWithoutReplyInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_nested_one_without_avatar_input_1.ActorCreateNestedOneWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_nested_one_without_avatar_input_1.ActorCreateNestedOneWithoutAvatarInput)
], FileCreateWithoutReplyInput.prototype, "actor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_nested_one_without_image_input_1.CourseCreateNestedOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_nested_one_without_image_input_1.CourseCreateNestedOneWithoutImageInput)
], FileCreateWithoutReplyInput.prototype, "courseImage", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_nested_one_without_audio_input_1.CourseCreateNestedOneWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_nested_one_without_audio_input_1.CourseCreateNestedOneWithoutAudioInput)
], FileCreateWithoutReplyInput.prototype, "courseAudio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_nested_one_without_image_input_1.SectionCreateNestedOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_nested_one_without_image_input_1.SectionCreateNestedOneWithoutImageInput)
], FileCreateWithoutReplyInput.prototype, "section", void 0);
FileCreateWithoutReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileCreateWithoutReplyInput);
exports.FileCreateWithoutReplyInput = FileCreateWithoutReplyInput;
