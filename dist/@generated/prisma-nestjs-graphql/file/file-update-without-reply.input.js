"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const nullable_enum_type_file_field_update_operations_input_1 = require("../prisma/nullable-enum-type-file-field-update-operations.input");
const actor_update_one_without_avatar_input_1 = require("../actor/actor-update-one-without-avatar.input");
const course_update_one_without_image_input_1 = require("../course/course-update-one-without-image.input");
const course_update_one_without_audio_input_1 = require("../course/course-update-one-without-audio.input");
const section_update_one_without_image_input_1 = require("../section/section-update-one-without-image.input");
let FileUpdateWithoutReplyInput = class FileUpdateWithoutReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUpdateWithoutReplyInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUpdateWithoutReplyInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUpdateWithoutReplyInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUpdateWithoutReplyInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUpdateWithoutReplyInput.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUpdateWithoutReplyInput.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FileUpdateWithoutReplyInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FileUpdateWithoutReplyInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_enum_type_file_field_update_operations_input_1.NullableEnumTypeFileFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_enum_type_file_field_update_operations_input_1.NullableEnumTypeFileFieldUpdateOperationsInput)
], FileUpdateWithoutReplyInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_update_one_without_avatar_input_1.ActorUpdateOneWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_update_one_without_avatar_input_1.ActorUpdateOneWithoutAvatarInput)
], FileUpdateWithoutReplyInput.prototype, "actor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_one_without_image_input_1.CourseUpdateOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_update_one_without_image_input_1.CourseUpdateOneWithoutImageInput)
], FileUpdateWithoutReplyInput.prototype, "courseImage", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_one_without_audio_input_1.CourseUpdateOneWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_update_one_without_audio_input_1.CourseUpdateOneWithoutAudioInput)
], FileUpdateWithoutReplyInput.prototype, "courseAudio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_one_without_image_input_1.SectionUpdateOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_update_one_without_image_input_1.SectionUpdateOneWithoutImageInput)
], FileUpdateWithoutReplyInput.prototype, "section", void 0);
FileUpdateWithoutReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpdateWithoutReplyInput);
exports.FileUpdateWithoutReplyInput = FileUpdateWithoutReplyInput;
