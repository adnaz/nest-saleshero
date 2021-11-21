"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateOneWithoutCourseImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_course_image_input_1 = require("./file-create-without-course-image.input");
const file_create_or_connect_without_course_image_input_1 = require("./file-create-or-connect-without-course-image.input");
const file_upsert_without_course_image_input_1 = require("./file-upsert-without-course-image.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
const file_update_without_course_image_input_1 = require("./file-update-without-course-image.input");
let FileUpdateOneWithoutCourseImageInput = class FileUpdateOneWithoutCourseImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_course_image_input_1.FileCreateWithoutCourseImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_without_course_image_input_1.FileCreateWithoutCourseImageInput)
], FileUpdateOneWithoutCourseImageInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_or_connect_without_course_image_input_1.FileCreateOrConnectWithoutCourseImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_or_connect_without_course_image_input_1.FileCreateOrConnectWithoutCourseImageInput)
], FileUpdateOneWithoutCourseImageInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_upsert_without_course_image_input_1.FileUpsertWithoutCourseImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_upsert_without_course_image_input_1.FileUpsertWithoutCourseImageInput)
], FileUpdateOneWithoutCourseImageInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], FileUpdateOneWithoutCourseImageInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], FileUpdateOneWithoutCourseImageInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileUpdateOneWithoutCourseImageInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_without_course_image_input_1.FileUpdateWithoutCourseImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_update_without_course_image_input_1.FileUpdateWithoutCourseImageInput)
], FileUpdateOneWithoutCourseImageInput.prototype, "update", void 0);
FileUpdateOneWithoutCourseImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpdateOneWithoutCourseImageInput);
exports.FileUpdateOneWithoutCourseImageInput = FileUpdateOneWithoutCourseImageInput;
