"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateWithoutAffirmationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const nullable_enum_type_file_field_update_operations_input_1 = require("../prisma/nullable-enum-type-file-field-update-operations.input");
const reply_update_one_without_file_input_1 = require("../reply/reply-update-one-without-file.input");
const actor_update_one_without_avatar_input_1 = require("../actor/actor-update-one-without-avatar.input");
const course_update_one_without_image_input_1 = require("../course/course-update-one-without-image.input");
const course_update_one_without_audio_input_1 = require("../course/course-update-one-without-audio.input");
const section_update_one_without_image_input_1 = require("../section/section-update-one-without-image.input");
let FileUpdateWithoutAffirmationInput = class FileUpdateWithoutAffirmationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUpdateWithoutAffirmationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUpdateWithoutAffirmationInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUpdateWithoutAffirmationInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUpdateWithoutAffirmationInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUpdateWithoutAffirmationInput.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUpdateWithoutAffirmationInput.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FileUpdateWithoutAffirmationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FileUpdateWithoutAffirmationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_enum_type_file_field_update_operations_input_1.NullableEnumTypeFileFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_enum_type_file_field_update_operations_input_1.NullableEnumTypeFileFieldUpdateOperationsInput)
], FileUpdateWithoutAffirmationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_one_without_file_input_1.ReplyUpdateOneWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_update_one_without_file_input_1.ReplyUpdateOneWithoutFileInput)
], FileUpdateWithoutAffirmationInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_update_one_without_avatar_input_1.ActorUpdateOneWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_update_one_without_avatar_input_1.ActorUpdateOneWithoutAvatarInput)
], FileUpdateWithoutAffirmationInput.prototype, "actor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_one_without_image_input_1.CourseUpdateOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_update_one_without_image_input_1.CourseUpdateOneWithoutImageInput)
], FileUpdateWithoutAffirmationInput.prototype, "courseImage", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_one_without_audio_input_1.CourseUpdateOneWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_update_one_without_audio_input_1.CourseUpdateOneWithoutAudioInput)
], FileUpdateWithoutAffirmationInput.prototype, "courseAudio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_one_without_image_input_1.SectionUpdateOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_update_one_without_image_input_1.SectionUpdateOneWithoutImageInput)
], FileUpdateWithoutAffirmationInput.prototype, "section", void 0);
FileUpdateWithoutAffirmationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpdateWithoutAffirmationInput);
exports.FileUpdateWithoutAffirmationInput = FileUpdateWithoutAffirmationInput;
