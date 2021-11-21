"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUncheckedCreateNestedOneWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_quick_reply_input_1 = require("./reply-create-without-quick-reply.input");
const reply_create_or_connect_without_quick_reply_input_1 = require("./reply-create-or-connect-without-quick-reply.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
let ReplyUncheckedCreateNestedOneWithoutQuickReplyInput = class ReplyUncheckedCreateNestedOneWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_quick_reply_input_1.ReplyCreateWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_quick_reply_input_1.ReplyCreateWithoutQuickReplyInput)
], ReplyUncheckedCreateNestedOneWithoutQuickReplyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_or_connect_without_quick_reply_input_1.ReplyCreateOrConnectWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_or_connect_without_quick_reply_input_1.ReplyCreateOrConnectWithoutQuickReplyInput)
], ReplyUncheckedCreateNestedOneWithoutQuickReplyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyUncheckedCreateNestedOneWithoutQuickReplyInput.prototype, "connect", void 0);
ReplyUncheckedCreateNestedOneWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUncheckedCreateNestedOneWithoutQuickReplyInput);
exports.ReplyUncheckedCreateNestedOneWithoutQuickReplyInput = ReplyUncheckedCreateNestedOneWithoutQuickReplyInput;
