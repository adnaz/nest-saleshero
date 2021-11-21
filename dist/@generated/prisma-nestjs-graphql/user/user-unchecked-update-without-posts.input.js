"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedUpdateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const enum_role_field_update_operations_input_1 = require("../prisma/enum-role-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const app_unchecked_update_many_without_author_input_1 = require("../app/app-unchecked-update-many-without-author.input");
const course_unchecked_update_many_without_author_input_1 = require("../course/course-unchecked-update-many-without-author.input");
const section_unchecked_update_many_without_author_input_1 = require("../section/section-unchecked-update-many-without-author.input");
let UserUncheckedUpdateWithoutPostsInput = class UserUncheckedUpdateWithoutPostsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_unchecked_update_many_without_author_input_1.AppUncheckedUpdateManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_unchecked_update_many_without_author_input_1.AppUncheckedUpdateManyWithoutAuthorInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "apps", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_unchecked_update_many_without_author_input_1.CourseUncheckedUpdateManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_unchecked_update_many_without_author_input_1.CourseUncheckedUpdateManyWithoutAuthorInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "courses", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_unchecked_update_many_without_author_input_1.SectionUncheckedUpdateManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_unchecked_update_many_without_author_input_1.SectionUncheckedUpdateManyWithoutAuthorInput)
], UserUncheckedUpdateWithoutPostsInput.prototype, "sections", void 0);
UserUncheckedUpdateWithoutPostsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUncheckedUpdateWithoutPostsInput);
exports.UserUncheckedUpdateWithoutPostsInput = UserUncheckedUpdateWithoutPostsInput;
