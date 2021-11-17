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
exports.FileUncheckedUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const enum_type_file_field_update_operations_input_1 = require("../prisma/enum-type-file-field-update-operations.input");
const reply_unchecked_update_one_without_file_input_1 = require("../reply/reply-unchecked-update-one-without-file.input");
const actor_unchecked_update_one_without_avatar_input_1 = require("../actor/actor-unchecked-update-one-without-avatar.input");
const course_unchecked_update_one_without_image_input_1 = require("../course/course-unchecked-update-one-without-image.input");
const course_unchecked_update_one_without_audio_input_1 = require("../course/course-unchecked-update-one-without-audio.input");
const section_unchecked_update_one_without_image_input_1 = require("../section/section-unchecked-update-one-without-image.input");
let FileUncheckedUpdateInput = class FileUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "link", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_type_file_field_update_operations_input_1.EnumTypeFileFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_type_file_field_update_operations_input_1.EnumTypeFileFieldUpdateOperationsInput)
], FileUncheckedUpdateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_unchecked_update_one_without_file_input_1.ReplyUncheckedUpdateOneWithoutFileInput, { nullable: true }),
    __metadata("design:type", reply_unchecked_update_one_without_file_input_1.ReplyUncheckedUpdateOneWithoutFileInput)
], FileUncheckedUpdateInput.prototype, "reply", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_unchecked_update_one_without_avatar_input_1.ActorUncheckedUpdateOneWithoutAvatarInput, { nullable: true }),
    __metadata("design:type", actor_unchecked_update_one_without_avatar_input_1.ActorUncheckedUpdateOneWithoutAvatarInput)
], FileUncheckedUpdateInput.prototype, "actor", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_unchecked_update_one_without_image_input_1.CourseUncheckedUpdateOneWithoutImageInput, { nullable: true }),
    __metadata("design:type", course_unchecked_update_one_without_image_input_1.CourseUncheckedUpdateOneWithoutImageInput)
], FileUncheckedUpdateInput.prototype, "courseImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_unchecked_update_one_without_audio_input_1.CourseUncheckedUpdateOneWithoutAudioInput, { nullable: true }),
    __metadata("design:type", course_unchecked_update_one_without_audio_input_1.CourseUncheckedUpdateOneWithoutAudioInput)
], FileUncheckedUpdateInput.prototype, "courseAudio", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_unchecked_update_one_without_image_input_1.SectionUncheckedUpdateOneWithoutImageInput, { nullable: true }),
    __metadata("design:type", section_unchecked_update_one_without_image_input_1.SectionUncheckedUpdateOneWithoutImageInput)
], FileUncheckedUpdateInput.prototype, "section", void 0);
FileUncheckedUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], FileUncheckedUpdateInput);
exports.FileUncheckedUpdateInput = FileUncheckedUpdateInput;
//# sourceMappingURL=file-unchecked-update.input.js.map