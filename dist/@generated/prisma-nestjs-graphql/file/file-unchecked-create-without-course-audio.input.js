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
exports.FileUncheckedCreateWithoutCourseAudioInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_file_enum_1 = require("../prisma/type-file.enum");
const reply_unchecked_create_nested_one_without_file_input_1 = require("../reply/reply-unchecked-create-nested-one-without-file.input");
const actor_unchecked_create_nested_one_without_avatar_input_1 = require("../actor/actor-unchecked-create-nested-one-without-avatar.input");
const course_unchecked_create_nested_one_without_image_input_1 = require("../course/course-unchecked-create-nested-one-without-image.input");
const section_unchecked_create_nested_one_without_image_input_1 = require("../section/section-unchecked-create-nested-one-without-image.input");
let FileUncheckedCreateWithoutCourseAudioInput = class FileUncheckedCreateWithoutCourseAudioInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FileUncheckedCreateWithoutCourseAudioInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FileUncheckedCreateWithoutCourseAudioInput.prototype, "link", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], FileUncheckedCreateWithoutCourseAudioInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], FileUncheckedCreateWithoutCourseAudioInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: false }),
    __metadata("design:type", Object)
], FileUncheckedCreateWithoutCourseAudioInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_unchecked_create_nested_one_without_file_input_1.ReplyUncheckedCreateNestedOneWithoutFileInput, { nullable: true }),
    __metadata("design:type", reply_unchecked_create_nested_one_without_file_input_1.ReplyUncheckedCreateNestedOneWithoutFileInput)
], FileUncheckedCreateWithoutCourseAudioInput.prototype, "reply", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_unchecked_create_nested_one_without_avatar_input_1.ActorUncheckedCreateNestedOneWithoutAvatarInput, { nullable: true }),
    __metadata("design:type", actor_unchecked_create_nested_one_without_avatar_input_1.ActorUncheckedCreateNestedOneWithoutAvatarInput)
], FileUncheckedCreateWithoutCourseAudioInput.prototype, "actor", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_unchecked_create_nested_one_without_image_input_1.CourseUncheckedCreateNestedOneWithoutImageInput, { nullable: true }),
    __metadata("design:type", course_unchecked_create_nested_one_without_image_input_1.CourseUncheckedCreateNestedOneWithoutImageInput)
], FileUncheckedCreateWithoutCourseAudioInput.prototype, "courseImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_unchecked_create_nested_one_without_image_input_1.SectionUncheckedCreateNestedOneWithoutImageInput, { nullable: true }),
    __metadata("design:type", section_unchecked_create_nested_one_without_image_input_1.SectionUncheckedCreateNestedOneWithoutImageInput)
], FileUncheckedCreateWithoutCourseAudioInput.prototype, "section", void 0);
FileUncheckedCreateWithoutCourseAudioInput = __decorate([
    (0, graphql_2.InputType)()
], FileUncheckedCreateWithoutCourseAudioInput);
exports.FileUncheckedCreateWithoutCourseAudioInput = FileUncheckedCreateWithoutCourseAudioInput;
//# sourceMappingURL=file-unchecked-create-without-course-audio.input.js.map