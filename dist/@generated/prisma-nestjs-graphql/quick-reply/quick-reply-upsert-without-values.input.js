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
exports.QuickReplyUpsertWithoutValuesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_update_without_values_input_1 = require("./quick-reply-update-without-values.input");
const quick_reply_create_without_values_input_1 = require("./quick-reply-create-without-values.input");
let QuickReplyUpsertWithoutValuesInput = class QuickReplyUpsertWithoutValuesInput {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_update_without_values_input_1.QuickReplyUpdateWithoutValuesInput, { nullable: false }),
    __metadata("design:type", quick_reply_update_without_values_input_1.QuickReplyUpdateWithoutValuesInput)
], QuickReplyUpsertWithoutValuesInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_create_without_values_input_1.QuickReplyCreateWithoutValuesInput, { nullable: false }),
    __metadata("design:type", quick_reply_create_without_values_input_1.QuickReplyCreateWithoutValuesInput)
], QuickReplyUpsertWithoutValuesInput.prototype, "create", void 0);
QuickReplyUpsertWithoutValuesInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyUpsertWithoutValuesInput);
exports.QuickReplyUpsertWithoutValuesInput = QuickReplyUpsertWithoutValuesInput;
//# sourceMappingURL=quick-reply-upsert-without-values.input.js.map