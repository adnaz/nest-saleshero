"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
let QuickReplyValueUpdateManyMutationInput = class QuickReplyValueUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], QuickReplyValueUpdateManyMutationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], QuickReplyValueUpdateManyMutationInput.prototype, "value", void 0);
QuickReplyValueUpdateManyMutationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueUpdateManyMutationInput);
exports.QuickReplyValueUpdateManyMutationInput = QuickReplyValueUpdateManyMutationInput;
