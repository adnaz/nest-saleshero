"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyCreateWithoutValuesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_reply_enum_1 = require("../prisma/type-reply.enum");
const reply_create_nested_one_without_quick_reply_input_1 = require("../reply/reply-create-nested-one-without-quick-reply.input");
let QuickReplyCreateWithoutValuesInput = class QuickReplyCreateWithoutValuesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyCreateWithoutValuesInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyCreateWithoutValuesInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_nested_one_without_quick_reply_input_1.ReplyCreateNestedOneWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_nested_one_without_quick_reply_input_1.ReplyCreateNestedOneWithoutQuickReplyInput)
], QuickReplyCreateWithoutValuesInput.prototype, "reply", void 0);
QuickReplyCreateWithoutValuesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyCreateWithoutValuesInput);
exports.QuickReplyCreateWithoutValuesInput = QuickReplyCreateWithoutValuesInput;
