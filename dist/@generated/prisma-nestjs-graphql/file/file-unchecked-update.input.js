"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUncheckedUpdateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const nullable_enum_type_file_field_update_operations_input_1 = require("../prisma/nullable-enum-type-file-field-update-operations.input");
const reply_unchecked_update_one_without_file_input_1 = require("../reply/reply-unchecked-update-one-without-file.input");
const actor_unchecked_update_one_without_avatar_input_1 = require("../actor/actor-unchecked-update-one-without-avatar.input");
const affirmation_unchecked_update_one_without_image_input_1 = require("../affirmation/affirmation-unchecked-update-one-without-image.input");
const course_unchecked_update_one_without_image_input_1 = require("../course/course-unchecked-update-one-without-image.input");
const course_unchecked_update_one_without_audio_input_1 = require("../course/course-unchecked-update-one-without-audio.input");
const section_unchecked_update_one_without_image_input_1 = require("../section/section-unchecked-update-one-without-image.input");
let FileUncheckedUpdateInput = class FileUncheckedUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_enum_type_file_field_update_operations_input_1.NullableEnumTypeFileFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_enum_type_file_field_update_operations_input_1.NullableEnumTypeFileFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_unchecked_update_one_without_file_input_1.ReplyUncheckedUpdateOneWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_unchecked_update_one_without_file_input_1.ReplyUncheckedUpdateOneWithoutFileInput)
], FileUncheckedUpdateInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_unchecked_update_one_without_avatar_input_1.ActorUncheckedUpdateOneWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_unchecked_update_one_without_avatar_input_1.ActorUncheckedUpdateOneWithoutAvatarInput)
], FileUncheckedUpdateInput.prototype, "actor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_unchecked_update_one_without_image_input_1.AffirmationUncheckedUpdateOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_unchecked_update_one_without_image_input_1.AffirmationUncheckedUpdateOneWithoutImageInput)
], FileUncheckedUpdateInput.prototype, "affirmation", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_unchecked_update_one_without_image_input_1.CourseUncheckedUpdateOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_unchecked_update_one_without_image_input_1.CourseUncheckedUpdateOneWithoutImageInput)
], FileUncheckedUpdateInput.prototype, "courseImage", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_unchecked_update_one_without_audio_input_1.CourseUncheckedUpdateOneWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_unchecked_update_one_without_audio_input_1.CourseUncheckedUpdateOneWithoutAudioInput)
], FileUncheckedUpdateInput.prototype, "courseAudio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_unchecked_update_one_without_image_input_1.SectionUncheckedUpdateOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_unchecked_update_one_without_image_input_1.SectionUncheckedUpdateOneWithoutImageInput)
], FileUncheckedUpdateInput.prototype, "section", void 0);
FileUncheckedUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUncheckedUpdateInput);
exports.FileUncheckedUpdateInput = FileUncheckedUpdateInput;
