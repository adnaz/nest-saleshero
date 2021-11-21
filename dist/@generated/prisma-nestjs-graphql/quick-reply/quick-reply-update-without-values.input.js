"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyUpdateWithoutValuesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_bool_field_update_operations_input_1 = require("../prisma/nullable-bool-field-update-operations.input");
const nullable_enum_type_reply_field_update_operations_input_1 = require("../prisma/nullable-enum-type-reply-field-update-operations.input");
const reply_update_one_without_quick_reply_input_1 = require("../reply/reply-update-one-without-quick-reply.input");
let QuickReplyUpdateWithoutValuesInput = class QuickReplyUpdateWithoutValuesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput)
], QuickReplyUpdateWithoutValuesInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_enum_type_reply_field_update_operations_input_1.NullableEnumTypeReplyFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_enum_type_reply_field_update_operations_input_1.NullableEnumTypeReplyFieldUpdateOperationsInput)
], QuickReplyUpdateWithoutValuesInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_one_without_quick_reply_input_1.ReplyUpdateOneWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_update_one_without_quick_reply_input_1.ReplyUpdateOneWithoutQuickReplyInput)
], QuickReplyUpdateWithoutValuesInput.prototype, "reply", void 0);
QuickReplyUpdateWithoutValuesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyUpdateWithoutValuesInput);
exports.QuickReplyUpdateWithoutValuesInput = QuickReplyUpdateWithoutValuesInput;
