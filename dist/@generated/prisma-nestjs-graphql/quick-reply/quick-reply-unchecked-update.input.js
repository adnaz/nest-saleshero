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
exports.QuickReplyUncheckedUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const enum_type_reply_field_update_operations_input_1 = require("../prisma/enum-type-reply-field-update-operations.input");
const quick_reply_value_unchecked_update_many_without_quick_reply_input_1 = require("../quick-reply-value/quick-reply-value-unchecked-update-many-without-quick-reply.input");
let QuickReplyUncheckedUpdateInput = class QuickReplyUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], QuickReplyUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_type_reply_field_update_operations_input_1.EnumTypeReplyFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_type_reply_field_update_operations_input_1.EnumTypeReplyFieldUpdateOperationsInput)
], QuickReplyUncheckedUpdateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_unchecked_update_many_without_quick_reply_input_1.QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_unchecked_update_many_without_quick_reply_input_1.QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput)
], QuickReplyUncheckedUpdateInput.prototype, "values", void 0);
QuickReplyUncheckedUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyUncheckedUpdateInput);
exports.QuickReplyUncheckedUpdateInput = QuickReplyUncheckedUpdateInput;
//# sourceMappingURL=quick-reply-unchecked-update.input.js.map