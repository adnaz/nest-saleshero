"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyUncheckedUpdateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const nullable_bool_field_update_operations_input_1 = require("../prisma/nullable-bool-field-update-operations.input");
const nullable_enum_type_reply_field_update_operations_input_1 = require("../prisma/nullable-enum-type-reply-field-update-operations.input");
const reply_unchecked_update_one_without_quick_reply_input_1 = require("../reply/reply-unchecked-update-one-without-quick-reply.input");
const quick_reply_value_unchecked_update_many_without_quick_reply_input_1 = require("../quick-reply-value/quick-reply-value-unchecked-update-many-without-quick-reply.input");
let QuickReplyUncheckedUpdateInput = class QuickReplyUncheckedUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], QuickReplyUncheckedUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput)
], QuickReplyUncheckedUpdateInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_enum_type_reply_field_update_operations_input_1.NullableEnumTypeReplyFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_enum_type_reply_field_update_operations_input_1.NullableEnumTypeReplyFieldUpdateOperationsInput)
], QuickReplyUncheckedUpdateInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_unchecked_update_one_without_quick_reply_input_1.ReplyUncheckedUpdateOneWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_unchecked_update_one_without_quick_reply_input_1.ReplyUncheckedUpdateOneWithoutQuickReplyInput)
], QuickReplyUncheckedUpdateInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_unchecked_update_many_without_quick_reply_input_1.QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_unchecked_update_many_without_quick_reply_input_1.QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput)
], QuickReplyUncheckedUpdateInput.prototype, "values", void 0);
QuickReplyUncheckedUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyUncheckedUpdateInput);
exports.QuickReplyUncheckedUpdateInput = QuickReplyUncheckedUpdateInput;
