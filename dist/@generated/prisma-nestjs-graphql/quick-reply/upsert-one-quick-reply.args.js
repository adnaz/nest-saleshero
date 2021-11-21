"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneQuickReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
const quick_reply_create_input_1 = require("./quick-reply-create.input");
const quick_reply_update_input_1 = require("./quick-reply-update.input");
let UpsertOneQuickReplyArgs = class UpsertOneQuickReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], UpsertOneQuickReplyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_input_1.QuickReplyCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_input_1.QuickReplyCreateInput)
], UpsertOneQuickReplyArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_update_input_1.QuickReplyUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_update_input_1.QuickReplyUpdateInput)
], UpsertOneQuickReplyArgs.prototype, "update", void 0);
UpsertOneQuickReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpsertOneQuickReplyArgs);
exports.UpsertOneQuickReplyArgs = UpsertOneQuickReplyArgs;
