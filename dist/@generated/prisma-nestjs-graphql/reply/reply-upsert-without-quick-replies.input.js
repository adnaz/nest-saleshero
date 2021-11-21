"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpsertWithoutQuickRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_update_without_quick_replies_input_1 = require("./reply-update-without-quick-replies.input");
const reply_create_without_quick_replies_input_1 = require("./reply-create-without-quick-replies.input");
let ReplyUpsertWithoutQuickRepliesInput = class ReplyUpsertWithoutQuickRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_without_quick_replies_input_1.ReplyUpdateWithoutQuickRepliesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_update_without_quick_replies_input_1.ReplyUpdateWithoutQuickRepliesInput)
], ReplyUpsertWithoutQuickRepliesInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_quick_replies_input_1.ReplyCreateWithoutQuickRepliesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_quick_replies_input_1.ReplyCreateWithoutQuickRepliesInput)
], ReplyUpsertWithoutQuickRepliesInput.prototype, "create", void 0);
ReplyUpsertWithoutQuickRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUpsertWithoutQuickRepliesInput);
exports.ReplyUpsertWithoutQuickRepliesInput = ReplyUpsertWithoutQuickRepliesInput;
