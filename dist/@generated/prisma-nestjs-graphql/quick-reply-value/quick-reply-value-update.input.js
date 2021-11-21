"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueUpdateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const quick_reply_update_one_without_values_input_1 = require("../quick-reply/quick-reply-update-one-without-values.input");
let QuickReplyValueUpdateInput = class QuickReplyValueUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], QuickReplyValueUpdateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], QuickReplyValueUpdateInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_update_one_without_values_input_1.QuickReplyUpdateOneWithoutValuesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_update_one_without_values_input_1.QuickReplyUpdateOneWithoutValuesInput)
], QuickReplyValueUpdateInput.prototype, "quickReply", void 0);
QuickReplyValueUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueUpdateInput);
exports.QuickReplyValueUpdateInput = QuickReplyValueUpdateInput;
