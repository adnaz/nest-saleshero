"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUncheckedUpdateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const nullable_float_field_update_operations_input_1 = require("../prisma/nullable-float-field-update-operations.input");
const nullable_int_field_update_operations_input_1 = require("../prisma/nullable-int-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let ReplyUncheckedUpdateInput = class ReplyUncheckedUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], ReplyUncheckedUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_float_field_update_operations_input_1.NullableFloatFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_float_field_update_operations_input_1.NullableFloatFieldUpdateOperationsInput)
], ReplyUncheckedUpdateInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput)
], ReplyUncheckedUpdateInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], ReplyUncheckedUpdateInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], ReplyUncheckedUpdateInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ReplyUncheckedUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ReplyUncheckedUpdateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput)
], ReplyUncheckedUpdateInput.prototype, "sectionId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput)
], ReplyUncheckedUpdateInput.prototype, "actorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput)
], ReplyUncheckedUpdateInput.prototype, "quickReplyId", void 0);
ReplyUncheckedUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUncheckedUpdateInput);
exports.ReplyUncheckedUpdateInput = ReplyUncheckedUpdateInput;
