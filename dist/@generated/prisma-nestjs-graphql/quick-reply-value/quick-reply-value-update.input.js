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
exports.QuickReplyValueUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const quick_reply_update_one_without_values_input_1 = require("../quick-reply/quick-reply-update-one-without-values.input");
let QuickReplyValueUpdateInput = class QuickReplyValueUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], QuickReplyValueUpdateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], QuickReplyValueUpdateInput.prototype, "value", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_update_one_without_values_input_1.QuickReplyUpdateOneWithoutValuesInput, { nullable: true }),
    __metadata("design:type", quick_reply_update_one_without_values_input_1.QuickReplyUpdateOneWithoutValuesInput)
], QuickReplyValueUpdateInput.prototype, "quickReply", void 0);
QuickReplyValueUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyValueUpdateInput);
exports.QuickReplyValueUpdateInput = QuickReplyValueUpdateInput;
//# sourceMappingURL=quick-reply-value-update.input.js.map