"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyCreateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_reply_enum_1 = require("../prisma/type-reply.enum");
const reply_create_nested_one_without_quick_reply_input_1 = require("../reply/reply-create-nested-one-without-quick-reply.input");
const quick_reply_value_create_nested_many_without_quick_reply_input_1 = require("../quick-reply-value/quick-reply-value-create-nested-many-without-quick-reply.input");
let QuickReplyCreateInput = class QuickReplyCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyCreateInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyCreateInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_nested_one_without_quick_reply_input_1.ReplyCreateNestedOneWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_nested_one_without_quick_reply_input_1.ReplyCreateNestedOneWithoutQuickReplyInput)
], QuickReplyCreateInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_create_nested_many_without_quick_reply_input_1.QuickReplyValueCreateNestedManyWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_create_nested_many_without_quick_reply_input_1.QuickReplyValueCreateNestedManyWithoutQuickReplyInput)
], QuickReplyCreateInput.prototype, "values", void 0);
QuickReplyCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyCreateInput);
exports.QuickReplyCreateInput = QuickReplyCreateInput;
