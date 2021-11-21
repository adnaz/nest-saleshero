"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueUpdateWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
let QuickReplyValueUpdateWithoutQuickReplyInput = class QuickReplyValueUpdateWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], QuickReplyValueUpdateWithoutQuickReplyInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], QuickReplyValueUpdateWithoutQuickReplyInput.prototype, "value", void 0);
QuickReplyValueUpdateWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueUpdateWithoutQuickReplyInput);
exports.QuickReplyValueUpdateWithoutQuickReplyInput = QuickReplyValueUpdateWithoutQuickReplyInput;
