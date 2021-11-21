"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUncheckedCreateNestedManyWithoutCourseInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_without_course_input_1 = require("./section-create-without-course.input");
const section_create_or_connect_without_course_input_1 = require("./section-create-or-connect-without-course.input");
const section_create_many_course_input_envelope_input_1 = require("./section-create-many-course-input-envelope.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
let SectionUncheckedCreateNestedManyWithoutCourseInput = class SectionUncheckedCreateNestedManyWithoutCourseInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_create_without_course_input_1.SectionCreateWithoutCourseInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUncheckedCreateNestedManyWithoutCourseInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_create_or_connect_without_course_input_1.SectionCreateOrConnectWithoutCourseInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUncheckedCreateNestedManyWithoutCourseInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_many_course_input_envelope_input_1.SectionCreateManyCourseInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_many_course_input_envelope_input_1.SectionCreateManyCourseInputEnvelope)
], SectionUncheckedCreateNestedManyWithoutCourseInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionUncheckedCreateNestedManyWithoutCourseInput.prototype, "connect", void 0);
SectionUncheckedCreateNestedManyWithoutCourseInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUncheckedCreateNestedManyWithoutCourseInput);
exports.SectionUncheckedCreateNestedManyWithoutCourseInput = SectionUncheckedCreateNestedManyWithoutCourseInput;
