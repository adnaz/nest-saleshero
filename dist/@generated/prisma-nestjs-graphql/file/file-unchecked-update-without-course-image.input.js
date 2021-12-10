"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUncheckedUpdateWithoutCourseImageInput = void 0;
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
const course_unchecked_update_one_without_audio_input_1 = require("../course/course-unchecked-update-one-without-audio.input");
const section_unchecked_update_one_without_image_input_1 = require("../section/section-unchecked-update-one-without-image.input");
let FileUncheckedUpdateWithoutCourseImageInput = class FileUncheckedUpdateWithoutCourseImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_enum_type_file_field_update_operations_input_1.NullableEnumTypeFileFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_enum_type_file_field_update_operations_input_1.NullableEnumTypeFileFieldUpdateOperationsInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_unchecked_update_one_without_file_input_1.ReplyUncheckedUpdateOneWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_unchecked_update_one_without_file_input_1.ReplyUncheckedUpdateOneWithoutFileInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_unchecked_update_one_without_avatar_input_1.ActorUncheckedUpdateOneWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_unchecked_update_one_without_avatar_input_1.ActorUncheckedUpdateOneWithoutAvatarInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "actor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_unchecked_update_one_without_image_input_1.AffirmationUncheckedUpdateOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_unchecked_update_one_without_image_input_1.AffirmationUncheckedUpdateOneWithoutImageInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "affirmation", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_unchecked_update_one_without_audio_input_1.CourseUncheckedUpdateOneWithoutAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_unchecked_update_one_without_audio_input_1.CourseUncheckedUpdateOneWithoutAudioInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "courseAudio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_unchecked_update_one_without_image_input_1.SectionUncheckedUpdateOneWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_unchecked_update_one_without_image_input_1.SectionUncheckedUpdateOneWithoutImageInput)
], FileUncheckedUpdateWithoutCourseImageInput.prototype, "section", void 0);
FileUncheckedUpdateWithoutCourseImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUncheckedUpdateWithoutCourseImageInput);
exports.FileUncheckedUpdateWithoutCourseImageInput = FileUncheckedUpdateWithoutCourseImageInput;
