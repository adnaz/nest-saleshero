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
exports.SectionUncheckedUpdateManyWithoutCourseInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_without_course_input_1 = require("./section-create-without-course.input");
const section_create_or_connect_without_course_input_1 = require("./section-create-or-connect-without-course.input");
const section_upsert_with_where_unique_without_course_input_1 = require("./section-upsert-with-where-unique-without-course.input");
const section_create_many_course_input_envelope_input_1 = require("./section-create-many-course-input-envelope.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
const section_update_with_where_unique_without_course_input_1 = require("./section-update-with-where-unique-without-course.input");
const section_update_many_with_where_without_course_input_1 = require("./section-update-many-with-where-without-course.input");
const section_scalar_where_input_1 = require("./section-scalar-where.input");
let SectionUncheckedUpdateManyWithoutCourseInput = class SectionUncheckedUpdateManyWithoutCourseInput {
};
__decorate([
    (0, graphql_1.Field)(() => [section_create_without_course_input_1.SectionCreateWithoutCourseInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUncheckedUpdateManyWithoutCourseInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_create_or_connect_without_course_input_1.SectionCreateOrConnectWithoutCourseInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUncheckedUpdateManyWithoutCourseInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_upsert_with_where_unique_without_course_input_1.SectionUpsertWithWhereUniqueWithoutCourseInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUncheckedUpdateManyWithoutCourseInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_create_many_course_input_envelope_input_1.SectionCreateManyCourseInputEnvelope, { nullable: true }),
    __metadata("design:type", section_create_many_course_input_envelope_input_1.SectionCreateManyCourseInputEnvelope)
], SectionUncheckedUpdateManyWithoutCourseInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUncheckedUpdateManyWithoutCourseInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUncheckedUpdateManyWithoutCourseInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUncheckedUpdateManyWithoutCourseInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUncheckedUpdateManyWithoutCourseInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_update_with_where_unique_without_course_input_1.SectionUpdateWithWhereUniqueWithoutCourseInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUncheckedUpdateManyWithoutCourseInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_update_many_with_where_without_course_input_1.SectionUpdateManyWithWhereWithoutCourseInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUncheckedUpdateManyWithoutCourseInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_scalar_where_input_1.SectionScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUncheckedUpdateManyWithoutCourseInput.prototype, "deleteMany", void 0);
SectionUncheckedUpdateManyWithoutCourseInput = __decorate([
    (0, graphql_2.InputType)()
], SectionUncheckedUpdateManyWithoutCourseInput);
exports.SectionUncheckedUpdateManyWithoutCourseInput = SectionUncheckedUpdateManyWithoutCourseInput;
//# sourceMappingURL=section-unchecked-update-many-without-course.input.js.map