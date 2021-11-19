"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedUpdateWithoutAppsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const enum_role_field_update_operations_input_1 = require("../prisma/enum-role-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const post_unchecked_update_many_without_author_input_1 = require("../post/post-unchecked-update-many-without-author.input");
const graphql_3 = require("@nestjs/graphql");
const course_unchecked_update_many_without_author_input_1 = require("../course/course-unchecked-update-many-without-author.input");
const section_unchecked_update_many_without_author_input_1 = require("../section/section-unchecked-update-many-without-author.input");
let UserUncheckedUpdateWithoutAppsInput = class UserUncheckedUpdateWithoutAppsInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutAppsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutAppsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutAppsInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutAppsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutAppsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutAppsInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutAppsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutAppsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", post_unchecked_update_many_without_author_input_1.PostUncheckedUpdateManyWithoutAuthorInput)
], UserUncheckedUpdateWithoutAppsInput.prototype, "posts", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", course_unchecked_update_many_without_author_input_1.CourseUncheckedUpdateManyWithoutAuthorInput)
], UserUncheckedUpdateWithoutAppsInput.prototype, "courses", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", section_unchecked_update_many_without_author_input_1.SectionUncheckedUpdateManyWithoutAuthorInput)
], UserUncheckedUpdateWithoutAppsInput.prototype, "sections", void 0);
UserUncheckedUpdateWithoutAppsInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedUpdateWithoutAppsInput);
exports.UserUncheckedUpdateWithoutAppsInput = UserUncheckedUpdateWithoutAppsInput;
//# sourceMappingURL=user-unchecked-update-without-apps.input.js.map