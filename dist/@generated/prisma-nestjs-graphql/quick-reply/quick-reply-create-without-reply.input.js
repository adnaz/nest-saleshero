"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyCreateWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_reply_enum_1 = require("../prisma/type-reply.enum");
const quick_reply_value_create_nested_many_without_quick_reply_input_1 = require("../quick-reply-value/quick-reply-value-create-nested-many-without-quick-reply.input");
let QuickReplyCreateWithoutReplyInput = class QuickReplyCreateWithoutReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyCreateWithoutReplyInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyCreateWithoutReplyInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_create_nested_many_without_quick_reply_input_1.QuickReplyValueCreateNestedManyWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_create_nested_many_without_quick_reply_input_1.QuickReplyValueCreateNestedManyWithoutQuickReplyInput)
], QuickReplyCreateWithoutReplyInput.prototype, "values", void 0);
QuickReplyCreateWithoutReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyCreateWithoutReplyInput);
exports.QuickReplyCreateWithoutReplyInput = QuickReplyCreateWithoutReplyInput;
