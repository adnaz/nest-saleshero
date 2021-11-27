"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateWithoutCourseAudioInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_file_enum_1 = require("../prisma/type-file.enum");
const reply_create_nested_one_without_file_input_1 = require("../reply/reply-create-nested-one-without-file.input");
const actor_create_nested_one_without_avatar_input_1 = require("../actor/actor-create-nested-one-without-avatar.input");
const course_create_nested_one_without_image_input_1 = require("../course/course-create-nested-one-without-image.input");
const section_create_nested_one_without_image_input_1 = require("../section/section-create-nested-one-without-image.input");
let FileCreateWithoutCourseAudioInput = class FileCreateWithoutCourseAudioInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutCourseAudioInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutCourseAudioInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutCourseAudioInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutCourseAudioInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutCourseAudioInput.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutCourseAudioInput.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileCreateWithoutCourseAudioInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileCreateWithoutCourseAudioInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileCreateWithoutCourseAudioInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_nested_one_without_file_input_1.ReplyCreateNestedOneWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_nested_one_without_file_input_1.ReplyCreateNestedOneWithoutFileInput)
], FileCreateWithoutCourseAudioInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_nested_one_without_avatar_input_1.ActorCreateNestedOneWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_nested_one_without_avatar_input_1.ActorCreateNestedOneWithoutAvatarInput)
], FileCreateWithoutCourseAudioInput.prototype, "actor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_nested_one_without_image_input_1.CourseCreateNestedOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_nested_one_without_image_input_1.CourseCreateNestedOneWithoutImageInput)
], FileCreateWithoutCourseAudioInput.prototype, "courseImage", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_nested_one_without_image_input_1.SectionCreateNestedOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_nested_one_without_image_input_1.SectionCreateNestedOneWithoutImageInput)
], FileCreateWithoutCourseAudioInput.prototype, "section", void 0);
FileCreateWithoutCourseAudioInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileCreateWithoutCourseAudioInput);
exports.FileCreateWithoutCourseAudioInput = FileCreateWithoutCourseAudioInput;
