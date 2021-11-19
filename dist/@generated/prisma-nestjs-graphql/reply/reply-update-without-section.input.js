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
exports.ReplyUpdateWithoutSectionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const file_update_one_without_reply_input_1 = require("../file/file-update-one-without-reply.input");
const actor_update_one_without_replies_input_1 = require("../actor/actor-update-one-without-replies.input");
const quick_reply_update_one_without_reply_input_1 = require("../quick-reply/quick-reply-update-one-without-reply.input");
let ReplyUpdateWithoutSectionInput = class ReplyUpdateWithoutSectionInput {
};
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateWithoutSectionInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateWithoutSectionInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_update_one_without_reply_input_1.FileUpdateOneWithoutReplyInput, { nullable: true }),
    __metadata("design:type", file_update_one_without_reply_input_1.FileUpdateOneWithoutReplyInput)
], ReplyUpdateWithoutSectionInput.prototype, "file", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_update_one_without_replies_input_1.ActorUpdateOneWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", actor_update_one_without_replies_input_1.ActorUpdateOneWithoutRepliesInput)
], ReplyUpdateWithoutSectionInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_update_one_without_reply_input_1.QuickReplyUpdateOneWithoutReplyInput, { nullable: true }),
    __metadata("design:type", quick_reply_update_one_without_reply_input_1.QuickReplyUpdateOneWithoutReplyInput)
], ReplyUpdateWithoutSectionInput.prototype, "quickReplies", void 0);
ReplyUpdateWithoutSectionInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyUpdateWithoutSectionInput);
exports.ReplyUpdateWithoutSectionInput = ReplyUpdateWithoutSectionInput;
//# sourceMappingURL=reply-update-without-section.input.js.map