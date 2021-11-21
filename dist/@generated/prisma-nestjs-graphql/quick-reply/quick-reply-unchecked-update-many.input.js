"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyUncheckedUpdateManyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const nullable_bool_field_update_operations_input_1 = require("../prisma/nullable-bool-field-update-operations.input");
const nullable_enum_type_reply_field_update_operations_input_1 = require("../prisma/nullable-enum-type-reply-field-update-operations.input");
let QuickReplyUncheckedUpdateManyInput = class QuickReplyUncheckedUpdateManyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], QuickReplyUncheckedUpdateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput)
], QuickReplyUncheckedUpdateManyInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_enum_type_reply_field_update_operations_input_1.NullableEnumTypeReplyFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_enum_type_reply_field_update_operations_input_1.NullableEnumTypeReplyFieldUpdateOperationsInput)
], QuickReplyUncheckedUpdateManyInput.prototype, "type", void 0);
QuickReplyUncheckedUpdateManyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyUncheckedUpdateManyInput);
exports.QuickReplyUncheckedUpdateManyInput = QuickReplyUncheckedUpdateManyInput;
