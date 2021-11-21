"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutAppsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const enum_role_field_update_operations_input_1 = require("../prisma/enum-role-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const post_update_many_without_author_input_1 = require("../post/post-update-many-without-author.input");
const course_update_many_without_author_input_1 = require("../course/course-update-many-without-author.input");
const section_update_many_without_author_input_1 = require("../section/section-update-many-without-author.input");
let UserUpdateWithoutAppsInput = class UserUpdateWithoutAppsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutAppsInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAppsInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAppsInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutAppsInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput)
], UserUpdateWithoutAppsInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutAppsInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutAppsInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_update_many_without_author_input_1.PostUpdateManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_update_many_without_author_input_1.PostUpdateManyWithoutAuthorInput)
], UserUpdateWithoutAppsInput.prototype, "posts", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_many_without_author_input_1.CourseUpdateManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_update_many_without_author_input_1.CourseUpdateManyWithoutAuthorInput)
], UserUpdateWithoutAppsInput.prototype, "courses", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_many_without_author_input_1.SectionUpdateManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_update_many_without_author_input_1.SectionUpdateManyWithoutAuthorInput)
], UserUpdateWithoutAppsInput.prototype, "sections", void 0);
UserUpdateWithoutAppsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUpdateWithoutAppsInput);
exports.UserUpdateWithoutAppsInput = UserUpdateWithoutAppsInput;
