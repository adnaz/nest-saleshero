"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateWithoutFileInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const section_create_nested_one_without_replies_input_1 = require("../section/section-create-nested-one-without-replies.input");
const actor_create_nested_one_without_replies_input_1 = require("../actor/actor-create-nested-one-without-replies.input");
const quick_reply_create_nested_one_without_reply_input_1 = require("../quick-reply/quick-reply-create-nested-one-without-reply.input");
let ReplyCreateWithoutFileInput = class ReplyCreateWithoutFileInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCreateWithoutFileInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ReplyCreateWithoutFileInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ReplyCreateWithoutFileInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyCreateWithoutFileInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyCreateWithoutFileInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_nested_one_without_replies_input_1.SectionCreateNestedOneWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_nested_one_without_replies_input_1.SectionCreateNestedOneWithoutRepliesInput)
], ReplyCreateWithoutFileInput.prototype, "section", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_nested_one_without_replies_input_1.ActorCreateNestedOneWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_nested_one_without_replies_input_1.ActorCreateNestedOneWithoutRepliesInput)
], ReplyCreateWithoutFileInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_nested_one_without_reply_input_1.QuickReplyCreateNestedOneWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_nested_one_without_reply_input_1.QuickReplyCreateNestedOneWithoutReplyInput)
], ReplyCreateWithoutFileInput.prototype, "quickReply", void 0);
ReplyCreateWithoutFileInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyCreateWithoutFileInput);
exports.ReplyCreateWithoutFileInput = ReplyCreateWithoutFileInput;
