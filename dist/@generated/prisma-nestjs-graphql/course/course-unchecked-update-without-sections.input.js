"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUncheckedUpdateWithoutSectionsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const nullable_float_field_update_operations_input_1 = require("../prisma/nullable-float-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const nullable_int_field_update_operations_input_1 = require("../prisma/nullable-int-field-update-operations.input");
const nullable_bool_field_update_operations_input_1 = require("../prisma/nullable-bool-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let CourseUncheckedUpdateWithoutSectionsInput = class CourseUncheckedUpdateWithoutSectionsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], CourseUncheckedUpdateWithoutSectionsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_float_field_update_operations_input_1.NullableFloatFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_float_field_update_operations_input_1.NullableFloatFieldUpdateOperationsInput)
], CourseUncheckedUpdateWithoutSectionsInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CourseUncheckedUpdateWithoutSectionsInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], CourseUncheckedUpdateWithoutSectionsInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput)
], CourseUncheckedUpdateWithoutSectionsInput.prototype, "audioId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput)
], CourseUncheckedUpdateWithoutSectionsInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput)
], CourseUncheckedUpdateWithoutSectionsInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput)
], CourseUncheckedUpdateWithoutSectionsInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], CourseUncheckedUpdateWithoutSectionsInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], CourseUncheckedUpdateWithoutSectionsInput.prototype, "updatedAt", void 0);
CourseUncheckedUpdateWithoutSectionsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUncheckedUpdateWithoutSectionsInput);
exports.CourseUncheckedUpdateWithoutSectionsInput = CourseUncheckedUpdateWithoutSectionsInput;
