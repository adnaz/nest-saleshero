"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUncheckedUpdateOneWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_without_image_input_1 = require("./course-create-without-image.input");
const course_create_or_connect_without_image_input_1 = require("./course-create-or-connect-without-image.input");
const course_upsert_without_image_input_1 = require("./course-upsert-without-image.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_update_without_image_input_1 = require("./course-update-without-image.input");
let CourseUncheckedUpdateOneWithoutImageInput = class CourseUncheckedUpdateOneWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_image_input_1.CourseCreateWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_without_image_input_1.CourseCreateWithoutImageInput)
], CourseUncheckedUpdateOneWithoutImageInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_or_connect_without_image_input_1.CourseCreateOrConnectWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_or_connect_without_image_input_1.CourseCreateOrConnectWithoutImageInput)
], CourseUncheckedUpdateOneWithoutImageInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_upsert_without_image_input_1.CourseUpsertWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_upsert_without_image_input_1.CourseUpsertWithoutImageInput)
], CourseUncheckedUpdateOneWithoutImageInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseUncheckedUpdateOneWithoutImageInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseUncheckedUpdateOneWithoutImageInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseUncheckedUpdateOneWithoutImageInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_without_image_input_1.CourseUpdateWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_update_without_image_input_1.CourseUpdateWithoutImageInput)
], CourseUncheckedUpdateOneWithoutImageInput.prototype, "update", void 0);
CourseUncheckedUpdateOneWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUncheckedUpdateOneWithoutImageInput);
exports.CourseUncheckedUpdateOneWithoutImageInput = CourseUncheckedUpdateOneWithoutImageInput;
