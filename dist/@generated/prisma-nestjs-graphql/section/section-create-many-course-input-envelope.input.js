"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionCreateManyCourseInputEnvelope = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_many_course_input_1 = require("./section-create-many-course.input");
let SectionCreateManyCourseInputEnvelope = class SectionCreateManyCourseInputEnvelope {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_create_many_course_input_1.SectionCreateManyCourseInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionCreateManyCourseInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SectionCreateManyCourseInputEnvelope.prototype, "skipDuplicates", void 0);
SectionCreateManyCourseInputEnvelope = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionCreateManyCourseInputEnvelope);
exports.SectionCreateManyCourseInputEnvelope = SectionCreateManyCourseInputEnvelope;
