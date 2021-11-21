"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUpdateManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_without_author_input_1 = require("./course-create-without-author.input");
const course_create_or_connect_without_author_input_1 = require("./course-create-or-connect-without-author.input");
const course_upsert_with_where_unique_without_author_input_1 = require("./course-upsert-with-where-unique-without-author.input");
const course_create_many_author_input_envelope_input_1 = require("./course-create-many-author-input-envelope.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_update_with_where_unique_without_author_input_1 = require("./course-update-with-where-unique-without-author.input");
const course_update_many_with_where_without_author_input_1 = require("./course-update-many-with-where-without-author.input");
const course_scalar_where_input_1 = require("./course-scalar-where.input");
let CourseUpdateManyWithoutAuthorInput = class CourseUpdateManyWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_create_without_author_input_1.CourseCreateWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUpdateManyWithoutAuthorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_create_or_connect_without_author_input_1.CourseCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_upsert_with_where_unique_without_author_input_1.CourseUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_many_author_input_envelope_input_1.CourseCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_many_author_input_envelope_input_1.CourseCreateManyAuthorInputEnvelope)
], CourseUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_where_unique_input_1.CourseWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUpdateManyWithoutAuthorInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_where_unique_input_1.CourseWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_where_unique_input_1.CourseWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_where_unique_input_1.CourseWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_update_with_where_unique_without_author_input_1.CourseUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUpdateManyWithoutAuthorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_update_many_with_where_without_author_input_1.CourseUpdateManyWithWhereWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_scalar_where_input_1.CourseScalarWhereInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], CourseUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
CourseUpdateManyWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUpdateManyWithoutAuthorInput);
exports.CourseUpdateManyWithoutAuthorInput = CourseUpdateManyWithoutAuthorInput;
