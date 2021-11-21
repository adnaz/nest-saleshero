"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateOneWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_quick_reply_input_1 = require("./reply-create-without-quick-reply.input");
const reply_create_or_connect_without_quick_reply_input_1 = require("./reply-create-or-connect-without-quick-reply.input");
const reply_upsert_without_quick_reply_input_1 = require("./reply-upsert-without-quick-reply.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_without_quick_reply_input_1 = require("./reply-update-without-quick-reply.input");
let ReplyUpdateOneWithoutQuickReplyInput = class ReplyUpdateOneWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_quick_reply_input_1.ReplyCreateWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_quick_reply_input_1.ReplyCreateWithoutQuickReplyInput)
], ReplyUpdateOneWithoutQuickReplyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_or_connect_without_quick_reply_input_1.ReplyCreateOrConnectWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_or_connect_without_quick_reply_input_1.ReplyCreateOrConnectWithoutQuickReplyInput)
], ReplyUpdateOneWithoutQuickReplyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_upsert_without_quick_reply_input_1.ReplyUpsertWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_upsert_without_quick_reply_input_1.ReplyUpsertWithoutQuickReplyInput)
], ReplyUpdateOneWithoutQuickReplyInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyUpdateOneWithoutQuickReplyInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyUpdateOneWithoutQuickReplyInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyUpdateOneWithoutQuickReplyInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_without_quick_reply_input_1.ReplyUpdateWithoutQuickReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_update_without_quick_reply_input_1.ReplyUpdateWithoutQuickReplyInput)
], ReplyUpdateOneWithoutQuickReplyInput.prototype, "update", void 0);
ReplyUpdateOneWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUpdateOneWithoutQuickReplyInput);
exports.ReplyUpdateOneWithoutQuickReplyInput = ReplyUpdateOneWithoutQuickReplyInput;
