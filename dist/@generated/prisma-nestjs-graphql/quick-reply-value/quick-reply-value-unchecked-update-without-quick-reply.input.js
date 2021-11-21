"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueUncheckedUpdateWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
let QuickReplyValueUncheckedUpdateWithoutQuickReplyInput = class QuickReplyValueUncheckedUpdateWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], QuickReplyValueUncheckedUpdateWithoutQuickReplyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], QuickReplyValueUncheckedUpdateWithoutQuickReplyInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], QuickReplyValueUncheckedUpdateWithoutQuickReplyInput.prototype, "value", void 0);
QuickReplyValueUncheckedUpdateWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueUncheckedUpdateWithoutQuickReplyInput);
exports.QuickReplyValueUncheckedUpdateWithoutQuickReplyInput = QuickReplyValueUncheckedUpdateWithoutQuickReplyInput;
