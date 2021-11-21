"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUncheckedCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_without_author_input_1 = require("./course-create-without-author.input");
const course_create_or_connect_without_author_input_1 = require("./course-create-or-connect-without-author.input");
const course_create_many_author_input_envelope_input_1 = require("./course-create-many-author-input-envelope.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
let CourseUncheckedCreateNestedManyWithoutAuthorInput = class CourseUncheckedCreateNestedManyWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_create_without_author_input_1.CourseCreateWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUncheckedCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_create_or_connect_without_author_input_1.CourseCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUncheckedCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_many_author_input_envelope_input_1.CourseCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_many_author_input_envelope_input_1.CourseCreateManyAuthorInputEnvelope)
], CourseUncheckedCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_where_unique_input_1.CourseWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUncheckedCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
CourseUncheckedCreateNestedManyWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUncheckedCreateNestedManyWithoutAuthorInput);
exports.CourseUncheckedCreateNestedManyWithoutAuthorInput = CourseUncheckedCreateNestedManyWithoutAuthorInput;
