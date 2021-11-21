"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_reply_enum_1 = require("../prisma/type-reply.enum");
const reply_unchecked_create_nested_one_without_quick_reply_input_1 = require("../reply/reply-unchecked-create-nested-one-without-quick-reply.input");
const quick_reply_value_unchecked_create_nested_many_without_quick_reply_input_1 = require("../quick-reply-value/quick-reply-value-unchecked-create-nested-many-without-quick-reply.input");
let QuickReplyUncheckedCreateInput = class QuickReplyUncheckedCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyUncheckedCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyUncheckedCreateInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyUncheckedCreateInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_unchecked_create_nested_one_without_quick_reply_input_1.ReplyUncheckedCreateNestedOneWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_unchecked_create_nested_one_without_quick_reply_input_1.ReplyUncheckedCreateNestedOneWithoutQuickReplyInput)
], QuickReplyUncheckedCreateInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_unchecked_create_nested_many_without_quick_reply_input_1.QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_unchecked_create_nested_many_without_quick_reply_input_1.QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput)
], QuickReplyUncheckedCreateInput.prototype, "values", void 0);
QuickReplyUncheckedCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyUncheckedCreateInput);
exports.QuickReplyUncheckedCreateInput = QuickReplyUncheckedCreateInput;
