"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorUncheckedUpdateWithoutAvatarInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const reply_unchecked_update_many_without_user_input_1 = require("../reply/reply-unchecked-update-many-without-user.input");
let ActorUncheckedUpdateWithoutAvatarInput = class ActorUncheckedUpdateWithoutAvatarInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], ActorUncheckedUpdateWithoutAvatarInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], ActorUncheckedUpdateWithoutAvatarInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ActorUncheckedUpdateWithoutAvatarInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ActorUncheckedUpdateWithoutAvatarInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_unchecked_update_many_without_user_input_1.ReplyUncheckedUpdateManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", reply_unchecked_update_many_without_user_input_1.ReplyUncheckedUpdateManyWithoutUserInput)
], ActorUncheckedUpdateWithoutAvatarInput.prototype, "replies", void 0);
ActorUncheckedUpdateWithoutAvatarInput = __decorate([
    (0, graphql_2.InputType)()
], ActorUncheckedUpdateWithoutAvatarInput);
exports.ActorUncheckedUpdateWithoutAvatarInput = ActorUncheckedUpdateWithoutAvatarInput;
//# sourceMappingURL=actor-unchecked-update-without-avatar.input.js.map