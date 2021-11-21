"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateOrConnectWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_create_without_quick_reply_input_1 = require("./reply-create-without-quick-reply.input");
let ReplyCreateOrConnectWithoutQuickReplyInput = class ReplyCreateOrConnectWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyCreateOrConnectWithoutQuickReplyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_quick_reply_input_1.ReplyCreateWithoutQuickReplyInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_quick_reply_input_1.ReplyCreateWithoutQuickReplyInput)
], ReplyCreateOrConnectWithoutQuickReplyInput.prototype, "create", void 0);
ReplyCreateOrConnectWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyCreateOrConnectWithoutQuickReplyInput);
exports.ReplyCreateOrConnectWithoutQuickReplyInput = ReplyCreateOrConnectWithoutQuickReplyInput;
