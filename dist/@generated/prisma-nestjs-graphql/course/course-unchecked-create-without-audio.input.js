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
exports.CourseUncheckedCreateWithoutAudioInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const section_unchecked_create_nested_many_without_course_input_1 = require("../section/section-unchecked-create-nested-many-without-course.input");
let CourseUncheckedCreateWithoutAudioInput = class CourseUncheckedCreateWithoutAudioInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CourseUncheckedCreateWithoutAudioInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CourseUncheckedCreateWithoutAudioInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CourseUncheckedCreateWithoutAudioInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CourseUncheckedCreateWithoutAudioInput.prototype, "imageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CourseUncheckedCreateWithoutAudioInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CourseUncheckedCreateWithoutAudioInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], CourseUncheckedCreateWithoutAudioInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], CourseUncheckedCreateWithoutAudioInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_unchecked_create_nested_many_without_course_input_1.SectionUncheckedCreateNestedManyWithoutCourseInput, { nullable: true }),
    __metadata("design:type", section_unchecked_create_nested_many_without_course_input_1.SectionUncheckedCreateNestedManyWithoutCourseInput)
], CourseUncheckedCreateWithoutAudioInput.prototype, "sections", void 0);
CourseUncheckedCreateWithoutAudioInput = __decorate([
    (0, graphql_2.InputType)()
], CourseUncheckedCreateWithoutAudioInput);
exports.CourseUncheckedCreateWithoutAudioInput = CourseUncheckedCreateWithoutAudioInput;
//# sourceMappingURL=course-unchecked-create-without-audio.input.js.map