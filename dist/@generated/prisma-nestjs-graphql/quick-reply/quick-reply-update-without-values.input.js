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
exports.QuickReplyUpdateWithoutValuesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const bool_field_update_operations_input_1 = require("../prisma/bool-field-update-operations.input");
const enum_type_reply_field_update_operations_input_1 = require("../prisma/enum-type-reply-field-update-operations.input");
const reply_update_one_without_quick_replies_input_1 = require("../reply/reply-update-one-without-quick-replies.input");
let QuickReplyUpdateWithoutValuesInput = class QuickReplyUpdateWithoutValuesInput {
};
__decorate([
    (0, graphql_1.Field)(() => bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput)
], QuickReplyUpdateWithoutValuesInput.prototype, "keepIt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_type_reply_field_update_operations_input_1.EnumTypeReplyFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_type_reply_field_update_operations_input_1.EnumTypeReplyFieldUpdateOperationsInput)
], QuickReplyUpdateWithoutValuesInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_update_one_without_quick_replies_input_1.ReplyUpdateOneWithoutQuickRepliesInput, { nullable: true }),
    __metadata("design:type", reply_update_one_without_quick_replies_input_1.ReplyUpdateOneWithoutQuickRepliesInput)
], QuickReplyUpdateWithoutValuesInput.prototype, "reply", void 0);
QuickReplyUpdateWithoutValuesInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyUpdateWithoutValuesInput);
exports.QuickReplyUpdateWithoutValuesInput = QuickReplyUpdateWithoutValuesInput;
//# sourceMappingURL=quick-reply-update-without-values.input.js.map