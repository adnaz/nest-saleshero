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
exports.FileCreateWithoutCourseImageInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_file_enum_1 = require("../prisma/type-file.enum");
const reply_create_nested_one_without_file_input_1 = require("../reply/reply-create-nested-one-without-file.input");
const actor_create_nested_one_without_avatar_input_1 = require("../actor/actor-create-nested-one-without-avatar.input");
const course_create_nested_one_without_audio_input_1 = require("../course/course-create-nested-one-without-audio.input");
const section_create_nested_one_without_image_input_1 = require("../section/section-create-nested-one-without-image.input");
let FileCreateWithoutCourseImageInput = class FileCreateWithoutCourseImageInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], FileCreateWithoutCourseImageInput.prototype, "link", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], FileCreateWithoutCourseImageInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], FileCreateWithoutCourseImageInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: false }),
    __metadata("design:type", Object)
], FileCreateWithoutCourseImageInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_create_nested_one_without_file_input_1.ReplyCreateNestedOneWithoutFileInput, { nullable: true }),
    __metadata("design:type", reply_create_nested_one_without_file_input_1.ReplyCreateNestedOneWithoutFileInput)
], FileCreateWithoutCourseImageInput.prototype, "reply", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_create_nested_one_without_avatar_input_1.ActorCreateNestedOneWithoutAvatarInput, { nullable: true }),
    __metadata("design:type", actor_create_nested_one_without_avatar_input_1.ActorCreateNestedOneWithoutAvatarInput)
], FileCreateWithoutCourseImageInput.prototype, "actor", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_create_nested_one_without_audio_input_1.CourseCreateNestedOneWithoutAudioInput, { nullable: true }),
    __metadata("design:type", course_create_nested_one_without_audio_input_1.CourseCreateNestedOneWithoutAudioInput)
], FileCreateWithoutCourseImageInput.prototype, "courseAudio", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_create_nested_one_without_image_input_1.SectionCreateNestedOneWithoutImageInput, { nullable: true }),
    __metadata("design:type", section_create_nested_one_without_image_input_1.SectionCreateNestedOneWithoutImageInput)
], FileCreateWithoutCourseImageInput.prototype, "section", void 0);
FileCreateWithoutCourseImageInput = __decorate([
    (0, graphql_2.InputType)()
], FileCreateWithoutCourseImageInput);
exports.FileCreateWithoutCourseImageInput = FileCreateWithoutCourseImageInput;
//# sourceMappingURL=file-create-without-course-image.input.js.map