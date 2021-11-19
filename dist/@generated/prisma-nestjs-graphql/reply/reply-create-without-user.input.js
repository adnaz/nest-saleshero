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
exports.ReplyCreateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_nested_one_without_reply_input_1 = require("../file/file-create-nested-one-without-reply.input");
const section_create_nested_one_without_replies_input_1 = require("../section/section-create-nested-one-without-replies.input");
const quick_reply_create_nested_one_without_reply_input_1 = require("../quick-reply/quick-reply-create-nested-one-without-reply.input");
let ReplyCreateWithoutUserInput = class ReplyCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ReplyCreateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ReplyCreateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_create_nested_one_without_reply_input_1.FileCreateNestedOneWithoutReplyInput, { nullable: true }),
    __metadata("design:type", file_create_nested_one_without_reply_input_1.FileCreateNestedOneWithoutReplyInput)
], ReplyCreateWithoutUserInput.prototype, "file", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_create_nested_one_without_replies_input_1.SectionCreateNestedOneWithoutRepliesInput, { nullable: false }),
    __metadata("design:type", section_create_nested_one_without_replies_input_1.SectionCreateNestedOneWithoutRepliesInput)
], ReplyCreateWithoutUserInput.prototype, "section", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_create_nested_one_without_reply_input_1.QuickReplyCreateNestedOneWithoutReplyInput, { nullable: true }),
    __metadata("design:type", quick_reply_create_nested_one_without_reply_input_1.QuickReplyCreateNestedOneWithoutReplyInput)
], ReplyCreateWithoutUserInput.prototype, "quickReplies", void 0);
ReplyCreateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyCreateWithoutUserInput);
exports.ReplyCreateWithoutUserInput = ReplyCreateWithoutUserInput;
//# sourceMappingURL=reply-create-without-user.input.js.map