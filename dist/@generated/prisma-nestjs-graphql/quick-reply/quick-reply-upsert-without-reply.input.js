"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyUpsertWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_update_without_reply_input_1 = require("./quick-reply-update-without-reply.input");
const quick_reply_create_without_reply_input_1 = require("./quick-reply-create-without-reply.input");
let QuickReplyUpsertWithoutReplyInput = class QuickReplyUpsertWithoutReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_update_without_reply_input_1.QuickReplyUpdateWithoutReplyInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_update_without_reply_input_1.QuickReplyUpdateWithoutReplyInput)
], QuickReplyUpsertWithoutReplyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput)
], QuickReplyUpsertWithoutReplyInput.prototype, "create", void 0);
QuickReplyUpsertWithoutReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyUpsertWithoutReplyInput);
exports.QuickReplyUpsertWithoutReplyInput = QuickReplyUpsertWithoutReplyInput;
