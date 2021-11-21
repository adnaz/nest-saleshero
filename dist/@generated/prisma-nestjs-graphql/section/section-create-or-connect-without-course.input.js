"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionCreateOrConnectWithoutCourseInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_unique_input_1 = require("./section-where-unique.input");
const section_create_without_course_input_1 = require("./section-create-without-course.input");
let SectionCreateOrConnectWithoutCourseInput = class SectionCreateOrConnectWithoutCourseInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], SectionCreateOrConnectWithoutCourseInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_without_course_input_1.SectionCreateWithoutCourseInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_create_without_course_input_1.SectionCreateWithoutCourseInput)
], SectionCreateOrConnectWithoutCourseInput.prototype, "create", void 0);
SectionCreateOrConnectWithoutCourseInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionCreateOrConnectWithoutCourseInput);
exports.SectionCreateOrConnectWithoutCourseInput = SectionCreateOrConnectWithoutCourseInput;
