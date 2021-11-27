"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const file_create_nested_one_without_reply_input_1 = require("../file/file-create-nested-one-without-reply.input");
const section_create_nested_one_without_replies_input_1 = require("../section/section-create-nested-one-without-replies.input");
const actor_create_nested_one_without_replies_input_1 = require("../actor/actor-create-nested-one-without-replies.input");
let ReplyCreateWithoutQuickReplyInput = class ReplyCreateWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCreateWithoutQuickReplyInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ReplyCreateWithoutQuickReplyInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ReplyCreateWithoutQuickReplyInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyCreateWithoutQuickReplyInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyCreateWithoutQuickReplyInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_nested_one_without_reply_input_1.FileCreateNestedOneWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_nested_one_without_reply_input_1.FileCreateNestedOneWithoutReplyInput)
], ReplyCreateWithoutQuickReplyInput.prototype, "file", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_nested_one_without_replies_input_1.SectionCreateNestedOneWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_nested_one_without_replies_input_1.SectionCreateNestedOneWithoutRepliesInput)
], ReplyCreateWithoutQuickReplyInput.prototype, "section", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_nested_one_without_replies_input_1.ActorCreateNestedOneWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_nested_one_without_replies_input_1.ActorCreateNestedOneWithoutRepliesInput)
], ReplyCreateWithoutQuickReplyInput.prototype, "user", void 0);
ReplyCreateWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyCreateWithoutQuickReplyInput);
exports.ReplyCreateWithoutQuickReplyInput = ReplyCreateWithoutQuickReplyInput;
