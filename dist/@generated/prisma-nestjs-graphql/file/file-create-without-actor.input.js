"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateWithoutActorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_file_enum_1 = require("../prisma/type-file.enum");
const reply_create_nested_one_without_file_input_1 = require("../reply/reply-create-nested-one-without-file.input");
const affirmation_create_nested_one_without_image_input_1 = require("../affirmation/affirmation-create-nested-one-without-image.input");
const course_create_nested_one_without_image_input_1 = require("../course/course-create-nested-one-without-image.input");
const course_create_nested_one_without_audio_input_1 = require("../course/course-create-nested-one-without-audio.input");
const section_create_nested_one_without_image_input_1 = require("../section/section-create-nested-one-without-image.input");
let FileCreateWithoutActorInput = class FileCreateWithoutActorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutActorInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutActorInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutActorInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutActorInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutActorInput.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], FileCreateWithoutActorInput.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileCreateWithoutActorInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileCreateWithoutActorInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], FileCreateWithoutActorInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_nested_one_without_file_input_1.ReplyCreateNestedOneWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_nested_one_without_file_input_1.ReplyCreateNestedOneWithoutFileInput)
], FileCreateWithoutActorInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_create_nested_one_without_image_input_1.AffirmationCreateNestedOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_create_nested_one_without_image_input_1.AffirmationCreateNestedOneWithoutImageInput)
], FileCreateWithoutActorInput.prototype, "affirmation", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_nested_one_without_image_input_1.CourseCreateNestedOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_nested_one_without_image_input_1.CourseCreateNestedOneWithoutImageInput)
], FileCreateWithoutActorInput.prototype, "courseImage", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_nested_one_without_audio_input_1.CourseCreateNestedOneWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_nested_one_without_audio_input_1.CourseCreateNestedOneWithoutAudioInput)
], FileCreateWithoutActorInput.prototype, "courseAudio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_nested_one_without_image_input_1.SectionCreateNestedOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_nested_one_without_image_input_1.SectionCreateNestedOneWithoutImageInput)
], FileCreateWithoutActorInput.prototype, "section", void 0);
FileCreateWithoutActorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileCreateWithoutActorInput);
exports.FileCreateWithoutActorInput = FileCreateWithoutActorInput;
