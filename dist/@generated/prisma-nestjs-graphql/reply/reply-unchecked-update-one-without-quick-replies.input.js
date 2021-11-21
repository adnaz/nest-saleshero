"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUncheckedUpdateOneWithoutQuickRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_quick_replies_input_1 = require("./reply-create-without-quick-replies.input");
const reply_create_or_connect_without_quick_replies_input_1 = require("./reply-create-or-connect-without-quick-replies.input");
const reply_upsert_without_quick_replies_input_1 = require("./reply-upsert-without-quick-replies.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_without_quick_replies_input_1 = require("./reply-update-without-quick-replies.input");
let ReplyUncheckedUpdateOneWithoutQuickRepliesInput = class ReplyUncheckedUpdateOneWithoutQuickRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_quick_replies_input_1.ReplyCreateWithoutQuickRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_quick_replies_input_1.ReplyCreateWithoutQuickRepliesInput)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_or_connect_without_quick_replies_input_1.ReplyCreateOrConnectWithoutQuickRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_or_connect_without_quick_replies_input_1.ReplyCreateOrConnectWithoutQuickRepliesInput)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_upsert_without_quick_replies_input_1.ReplyUpsertWithoutQuickRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_upsert_without_quick_replies_input_1.ReplyUpsertWithoutQuickRepliesInput)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_without_quick_replies_input_1.ReplyUpdateWithoutQuickRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_update_without_quick_replies_input_1.ReplyUpdateWithoutQuickRepliesInput)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "update", void 0);
ReplyUncheckedUpdateOneWithoutQuickRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput);
exports.ReplyUncheckedUpdateOneWithoutQuickRepliesInput = ReplyUncheckedUpdateOneWithoutQuickRepliesInput;
