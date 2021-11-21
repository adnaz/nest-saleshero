"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpsertWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_update_without_quick_reply_input_1 = require("./reply-update-without-quick-reply.input");
const reply_create_without_quick_reply_input_1 = require("./reply-create-without-quick-reply.input");
let ReplyUpsertWithoutQuickReplyInput = class ReplyUpsertWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_without_quick_reply_input_1.ReplyUpdateWithoutQuickReplyInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_update_without_quick_reply_input_1.ReplyUpdateWithoutQuickReplyInput)
], ReplyUpsertWithoutQuickReplyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_quick_reply_input_1.ReplyCreateWithoutQuickReplyInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_quick_reply_input_1.ReplyCreateWithoutQuickReplyInput)
], ReplyUpsertWithoutQuickReplyInput.prototype, "create", void 0);
ReplyUpsertWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUpsertWithoutQuickReplyInput);
exports.ReplyUpsertWithoutQuickReplyInput = ReplyUpsertWithoutQuickReplyInput;
