"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUncheckedCreateWithoutAffirmationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_file_enum_1 = require("../prisma/type-file.enum");
const reply_unchecked_create_nested_one_without_file_input_1 = require("../reply/reply-unchecked-create-nested-one-without-file.input");
const actor_unchecked_create_nested_one_without_avatar_input_1 = require("../actor/actor-unchecked-create-nested-one-without-avatar.input");
const course_unchecked_create_nested_one_without_image_input_1 = require("../course/course-unchecked-create-nested-one-without-image.input");
const course_unchecked_create_nested_one_without_audio_input_1 = require("../course/course-unchecked-create-nested-one-without-audio.input");
const section_unchecked_create_nested_one_without_image_input_1 = require("../section/section-unchecked-create-nested-one-without-image.input");
let FileUncheckedCreateWithoutAffirmationInput = class FileUncheckedCreateWithoutAffirmationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_unchecked_create_nested_one_without_file_input_1.ReplyUncheckedCreateNestedOneWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_unchecked_create_nested_one_without_file_input_1.ReplyUncheckedCreateNestedOneWithoutFileInput)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_unchecked_create_nested_one_without_avatar_input_1.ActorUncheckedCreateNestedOneWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_unchecked_create_nested_one_without_avatar_input_1.ActorUncheckedCreateNestedOneWithoutAvatarInput)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "actor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_unchecked_create_nested_one_without_image_input_1.CourseUncheckedCreateNestedOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_unchecked_create_nested_one_without_image_input_1.CourseUncheckedCreateNestedOneWithoutImageInput)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "courseImage", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_unchecked_create_nested_one_without_audio_input_1.CourseUncheckedCreateNestedOneWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_unchecked_create_nested_one_without_audio_input_1.CourseUncheckedCreateNestedOneWithoutAudioInput)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "courseAudio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_unchecked_create_nested_one_without_image_input_1.SectionUncheckedCreateNestedOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_unchecked_create_nested_one_without_image_input_1.SectionUncheckedCreateNestedOneWithoutImageInput)
], FileUncheckedCreateWithoutAffirmationInput.prototype, "section", void 0);
FileUncheckedCreateWithoutAffirmationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUncheckedCreateWithoutAffirmationInput);
exports.FileUncheckedCreateWithoutAffirmationInput = FileUncheckedCreateWithoutAffirmationInput;
