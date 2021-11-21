"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUpdateWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const nullable_enum_type_section_field_update_operations_input_1 = require("../prisma/nullable-enum-type-section-field-update-operations.input");
const nullable_bool_field_update_operations_input_1 = require("../prisma/nullable-bool-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const file_update_one_without_section_input_1 = require("../file/file-update-one-without-section.input");
const course_update_one_without_sections_input_1 = require("../course/course-update-one-without-sections.input");
const user_update_one_without_sections_input_1 = require("../user/user-update-one-without-sections.input");
let SectionUpdateWithoutRepliesInput = class SectionUpdateWithoutRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], SectionUpdateWithoutRepliesInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], SectionUpdateWithoutRepliesInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_enum_type_section_field_update_operations_input_1.NullableEnumTypeSectionFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_enum_type_section_field_update_operations_input_1.NullableEnumTypeSectionFieldUpdateOperationsInput)
], SectionUpdateWithoutRepliesInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput)
], SectionUpdateWithoutRepliesInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], SectionUpdateWithoutRepliesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], SectionUpdateWithoutRepliesInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_one_without_section_input_1.FileUpdateOneWithoutSectionInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_update_one_without_section_input_1.FileUpdateOneWithoutSectionInput)
], SectionUpdateWithoutRepliesInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_one_without_sections_input_1.CourseUpdateOneWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_update_one_without_sections_input_1.CourseUpdateOneWithoutSectionsInput)
], SectionUpdateWithoutRepliesInput.prototype, "course", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_one_without_sections_input_1.UserUpdateOneWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_update_one_without_sections_input_1.UserUpdateOneWithoutSectionsInput)
], SectionUpdateWithoutRepliesInput.prototype, "author", void 0);
SectionUpdateWithoutRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUpdateWithoutRepliesInput);
exports.SectionUpdateWithoutRepliesInput = SectionUpdateWithoutRepliesInput;
