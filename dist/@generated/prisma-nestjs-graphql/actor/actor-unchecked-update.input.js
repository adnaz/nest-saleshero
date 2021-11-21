"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorUncheckedUpdateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const nullable_int_field_update_operations_input_1 = require("../prisma/nullable-int-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const reply_unchecked_update_many_without_user_input_1 = require("../reply/reply-unchecked-update-many-without-user.input");
let ActorUncheckedUpdateInput = class ActorUncheckedUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], ActorUncheckedUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], ActorUncheckedUpdateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput)
], ActorUncheckedUpdateInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ActorUncheckedUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ActorUncheckedUpdateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_unchecked_update_many_without_user_input_1.ReplyUncheckedUpdateManyWithoutUserInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_unchecked_update_many_without_user_input_1.ReplyUncheckedUpdateManyWithoutUserInput)
], ActorUncheckedUpdateInput.prototype, "replies", void 0);
ActorUncheckedUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorUncheckedUpdateInput);
exports.ActorUncheckedUpdateInput = ActorUncheckedUpdateInput;
