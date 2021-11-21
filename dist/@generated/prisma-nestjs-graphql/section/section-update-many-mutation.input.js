"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const nullable_enum_type_section_field_update_operations_input_1 = require("../prisma/nullable-enum-type-section-field-update-operations.input");
const nullable_bool_field_update_operations_input_1 = require("../prisma/nullable-bool-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let SectionUpdateManyMutationInput = class SectionUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], SectionUpdateManyMutationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], SectionUpdateManyMutationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_enum_type_section_field_update_operations_input_1.NullableEnumTypeSectionFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_enum_type_section_field_update_operations_input_1.NullableEnumTypeSectionFieldUpdateOperationsInput)
], SectionUpdateManyMutationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput)
], SectionUpdateManyMutationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], SectionUpdateManyMutationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], SectionUpdateManyMutationInput.prototype, "updatedAt", void 0);
SectionUpdateManyMutationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUpdateManyMutationInput);
exports.SectionUpdateManyMutationInput = SectionUpdateManyMutationInput;
