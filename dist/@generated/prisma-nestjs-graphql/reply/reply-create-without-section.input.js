"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateWithoutSectionInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const file_create_nested_one_without_reply_input_1 = require("../file/file-create-nested-one-without-reply.input");
const actor_create_nested_one_without_replies_input_1 = require("../actor/actor-create-nested-one-without-replies.input");
const quick_reply_create_nested_one_without_reply_input_1 = require("../quick-reply/quick-reply-create-nested-one-without-reply.input");
let ReplyCreateWithoutSectionInput = class ReplyCreateWithoutSectionInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCreateWithoutSectionInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ReplyCreateWithoutSectionInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ReplyCreateWithoutSectionInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyCreateWithoutSectionInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyCreateWithoutSectionInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_nested_one_without_reply_input_1.FileCreateNestedOneWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_nested_one_without_reply_input_1.FileCreateNestedOneWithoutReplyInput)
], ReplyCreateWithoutSectionInput.prototype, "file", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_nested_one_without_replies_input_1.ActorCreateNestedOneWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_nested_one_without_replies_input_1.ActorCreateNestedOneWithoutRepliesInput)
], ReplyCreateWithoutSectionInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_nested_one_without_reply_input_1.QuickReplyCreateNestedOneWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_nested_one_without_reply_input_1.QuickReplyCreateNestedOneWithoutReplyInput)
], ReplyCreateWithoutSectionInput.prototype, "quickReply", void 0);
ReplyCreateWithoutSectionInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyCreateWithoutSectionInput);
exports.ReplyCreateWithoutSectionInput = ReplyCreateWithoutSectionInput;
