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
exports.UserUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const enum_role_field_update_operations_input_1 = require("../prisma/enum-role-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const app_update_many_without_author_input_1 = require("../app/app-update-many-without-author.input");
const graphql_3 = require("@nestjs/graphql");
const post_update_many_without_author_input_1 = require("../post/post-update-many-without-author.input");
const course_update_many_without_author_input_1 = require("../course/course-update-many-without-author.input");
const section_update_many_without_author_input_1 = require("../section/section-update-many-without-author.input");
let UserUpdateInput = class UserUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", app_update_many_without_author_input_1.AppUpdateManyWithoutAuthorInput)
], UserUpdateInput.prototype, "apps", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", post_update_many_without_author_input_1.PostUpdateManyWithoutAuthorInput)
], UserUpdateInput.prototype, "posts", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", course_update_many_without_author_input_1.CourseUpdateManyWithoutAuthorInput)
], UserUpdateInput.prototype, "courses", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", section_update_many_without_author_input_1.SectionUpdateManyWithoutAuthorInput)
], UserUpdateInput.prototype, "sections", void 0);
UserUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
//# sourceMappingURL=user-update.input.js.map