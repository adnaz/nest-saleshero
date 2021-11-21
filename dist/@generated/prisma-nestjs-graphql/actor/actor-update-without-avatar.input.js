"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorUpdateWithoutAvatarInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const reply_update_many_without_user_input_1 = require("../reply/reply-update-many-without-user.input");
let ActorUpdateWithoutAvatarInput = class ActorUpdateWithoutAvatarInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], ActorUpdateWithoutAvatarInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ActorUpdateWithoutAvatarInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ActorUpdateWithoutAvatarInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_many_without_user_input_1.ReplyUpdateManyWithoutUserInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_update_many_without_user_input_1.ReplyUpdateManyWithoutUserInput)
], ActorUpdateWithoutAvatarInput.prototype, "replies", void 0);
ActorUpdateWithoutAvatarInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorUpdateWithoutAvatarInput);
exports.ActorUpdateWithoutAvatarInput = ActorUpdateWithoutAvatarInput;
