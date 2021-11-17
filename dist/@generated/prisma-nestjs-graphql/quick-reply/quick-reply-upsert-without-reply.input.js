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
exports.QuickReplyUpsertWithoutReplyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_update_without_reply_input_1 = require("./quick-reply-update-without-reply.input");
const quick_reply_create_without_reply_input_1 = require("./quick-reply-create-without-reply.input");
let QuickReplyUpsertWithoutReplyInput = class QuickReplyUpsertWithoutReplyInput {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_update_without_reply_input_1.QuickReplyUpdateWithoutReplyInput, { nullable: false }),
    __metadata("design:type", quick_reply_update_without_reply_input_1.QuickReplyUpdateWithoutReplyInput)
], QuickReplyUpsertWithoutReplyInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput, { nullable: false }),
    __metadata("design:type", quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput)
], QuickReplyUpsertWithoutReplyInput.prototype, "create", void 0);
QuickReplyUpsertWithoutReplyInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyUpsertWithoutReplyInput);
exports.QuickReplyUpsertWithoutReplyInput = QuickReplyUpsertWithoutReplyInput;
//# sourceMappingURL=quick-reply-upsert-without-reply.input.js.map