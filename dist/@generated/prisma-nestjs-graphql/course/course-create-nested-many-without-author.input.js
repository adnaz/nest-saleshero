"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_without_author_input_1 = require("./course-create-without-author.input");
const course_create_or_connect_without_author_input_1 = require("./course-create-or-connect-without-author.input");
const course_create_many_author_input_envelope_input_1 = require("./course-create-many-author-input-envelope.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
let CourseCreateNestedManyWithoutAuthorInput = class CourseCreateNestedManyWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_create_without_author_input_1.CourseCreateWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_create_or_connect_without_author_input_1.CourseCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_many_author_input_envelope_input_1.CourseCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_many_author_input_envelope_input_1.CourseCreateManyAuthorInputEnvelope)
], CourseCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_where_unique_input_1.CourseWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
CourseCreateNestedManyWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseCreateNestedManyWithoutAuthorInput);
exports.CourseCreateNestedManyWithoutAuthorInput = CourseCreateNestedManyWithoutAuthorInput;
