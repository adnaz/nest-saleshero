"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUpdateManyWithoutCourseInput = void 0;
const tslib_1 = require("tslib");
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
let SectionUpdateManyWithoutCourseInput = class SectionUpdateManyWithoutCourseInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_create_without_course_input_1.SectionCreateWithoutCourseInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUpdateManyWithoutCourseInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_create_or_connect_without_course_input_1.SectionCreateOrConnectWithoutCourseInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUpdateManyWithoutCourseInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_upsert_with_where_unique_without_course_input_1.SectionUpsertWithWhereUniqueWithoutCourseInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUpdateManyWithoutCourseInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_many_course_input_envelope_input_1.SectionCreateManyCourseInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_many_course_input_envelope_input_1.SectionCreateManyCourseInputEnvelope)
], SectionUpdateManyWithoutCourseInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUpdateManyWithoutCourseInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUpdateManyWithoutCourseInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUpdateManyWithoutCourseInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUpdateManyWithoutCourseInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_update_with_where_unique_without_course_input_1.SectionUpdateWithWhereUniqueWithoutCourseInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUpdateManyWithoutCourseInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_update_many_with_where_without_course_input_1.SectionUpdateManyWithWhereWithoutCourseInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUpdateManyWithoutCourseInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_scalar_where_input_1.SectionScalarWhereInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUpdateManyWithoutCourseInput.prototype, "deleteMany", void 0);
SectionUpdateManyWithoutCourseInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUpdateManyWithoutCourseInput);
exports.SectionUpdateManyWithoutCourseInput = SectionUpdateManyWithoutCourseInput;
