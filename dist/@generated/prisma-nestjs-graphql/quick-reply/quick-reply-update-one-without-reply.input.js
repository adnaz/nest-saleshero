"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyUpdateOneWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_create_without_reply_input_1 = require("./quick-reply-create-without-reply.input");
const quick_reply_create_or_connect_without_reply_input_1 = require("./quick-reply-create-or-connect-without-reply.input");
const quick_reply_upsert_without_reply_input_1 = require("./quick-reply-upsert-without-reply.input");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
const quick_reply_update_without_reply_input_1 = require("./quick-reply-update-without-reply.input");
let QuickReplyUpdateOneWithoutReplyInput = class QuickReplyUpdateOneWithoutReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_or_connect_without_reply_input_1.QuickReplyCreateOrConnectWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_or_connect_without_reply_input_1.QuickReplyCreateOrConnectWithoutReplyInput)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_upsert_without_reply_input_1.QuickReplyUpsertWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_upsert_without_reply_input_1.QuickReplyUpsertWithoutReplyInput)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_update_without_reply_input_1.QuickReplyUpdateWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_update_without_reply_input_1.QuickReplyUpdateWithoutReplyInput)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "update", void 0);
QuickReplyUpdateOneWithoutReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyUpdateOneWithoutReplyInput);
exports.QuickReplyUpdateOneWithoutReplyInput = QuickReplyUpdateOneWithoutReplyInput;
