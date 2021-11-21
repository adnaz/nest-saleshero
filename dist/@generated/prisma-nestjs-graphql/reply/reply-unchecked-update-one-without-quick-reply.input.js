"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUncheckedUpdateOneWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_quick_reply_input_1 = require("./reply-create-without-quick-reply.input");
const reply_create_or_connect_without_quick_reply_input_1 = require("./reply-create-or-connect-without-quick-reply.input");
const reply_upsert_without_quick_reply_input_1 = require("./reply-upsert-without-quick-reply.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_without_quick_reply_input_1 = require("./reply-update-without-quick-reply.input");
let ReplyUncheckedUpdateOneWithoutQuickReplyInput = class ReplyUncheckedUpdateOneWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_quick_reply_input_1.ReplyCreateWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_quick_reply_input_1.ReplyCreateWithoutQuickReplyInput)
], ReplyUncheckedUpdateOneWithoutQuickReplyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_or_connect_without_quick_reply_input_1.ReplyCreateOrConnectWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_or_connect_without_quick_reply_input_1.ReplyCreateOrConnectWithoutQuickReplyInput)
], ReplyUncheckedUpdateOneWithoutQuickReplyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_upsert_without_quick_reply_input_1.ReplyUpsertWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_upsert_without_quick_reply_input_1.ReplyUpsertWithoutQuickReplyInput)
], ReplyUncheckedUpdateOneWithoutQuickReplyInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyUncheckedUpdateOneWithoutQuickReplyInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyUncheckedUpdateOneWithoutQuickReplyInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyUncheckedUpdateOneWithoutQuickReplyInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_without_quick_reply_input_1.ReplyUpdateWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_update_without_quick_reply_input_1.ReplyUpdateWithoutQuickReplyInput)
], ReplyUncheckedUpdateOneWithoutQuickReplyInput.prototype, "update", void 0);
ReplyUncheckedUpdateOneWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUncheckedUpdateOneWithoutQuickReplyInput);
exports.ReplyUncheckedUpdateOneWithoutQuickReplyInput = ReplyUncheckedUpdateOneWithoutQuickReplyInput;
