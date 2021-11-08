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
exports.ReplyUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const actor_update_one_without_replies_input_1 = require("../actor/actor-update-one-without-replies.input");
let ReplyUpdateInput = class ReplyUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], ReplyUpdateInput.prototype, "text", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], ReplyUpdateInput.prototype, "audio", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_update_one_without_replies_input_1.ActorUpdateOneWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", actor_update_one_without_replies_input_1.ActorUpdateOneWithoutRepliesInput)
], ReplyUpdateInput.prototype, "user", void 0);
ReplyUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyUpdateInput);
exports.ReplyUpdateInput = ReplyUpdateInput;
//# sourceMappingURL=reply-update.input.js.map