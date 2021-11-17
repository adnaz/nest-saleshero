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
exports.ActorUpdateWithoutAvatarInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const reply_update_many_without_user_input_1 = require("../reply/reply-update-many-without-user.input");
let ActorUpdateWithoutAvatarInput = class ActorUpdateWithoutAvatarInput {
};
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], ActorUpdateWithoutAvatarInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ActorUpdateWithoutAvatarInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ActorUpdateWithoutAvatarInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_update_many_without_user_input_1.ReplyUpdateManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", reply_update_many_without_user_input_1.ReplyUpdateManyWithoutUserInput)
], ActorUpdateWithoutAvatarInput.prototype, "replies", void 0);
ActorUpdateWithoutAvatarInput = __decorate([
    (0, graphql_2.InputType)()
], ActorUpdateWithoutAvatarInput);
exports.ActorUpdateWithoutAvatarInput = ActorUpdateWithoutAvatarInput;
//# sourceMappingURL=actor-update-without-avatar.input.js.map