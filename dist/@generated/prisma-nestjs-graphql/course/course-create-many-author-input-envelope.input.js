"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_many_author_input_1 = require("./course-create-many-author.input");
let CourseCreateManyAuthorInputEnvelope = class CourseCreateManyAuthorInputEnvelope {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_create_many_author_input_1.CourseCreateManyAuthorInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseCreateManyAuthorInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
CourseCreateManyAuthorInputEnvelope = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseCreateManyAuthorInputEnvelope);
exports.CourseCreateManyAuthorInputEnvelope = CourseCreateManyAuthorInputEnvelope;
