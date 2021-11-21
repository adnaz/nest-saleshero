"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneQuickReplyValueArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_where_unique_input_1 = require("./quick-reply-value-where-unique.input");
const quick_reply_value_create_input_1 = require("./quick-reply-value-create.input");
const quick_reply_value_update_input_1 = require("./quick-reply-value-update.input");
let UpsertOneQuickReplyValueArgs = class UpsertOneQuickReplyValueArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput)
], UpsertOneQuickReplyValueArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_create_input_1.QuickReplyValueCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_create_input_1.QuickReplyValueCreateInput)
], UpsertOneQuickReplyValueArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_update_input_1.QuickReplyValueUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_update_input_1.QuickReplyValueUpdateInput)
], UpsertOneQuickReplyValueArgs.prototype, "update", void 0);
UpsertOneQuickReplyValueArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpsertOneQuickReplyValueArgs);
exports.UpsertOneQuickReplyValueArgs = UpsertOneQuickReplyValueArgs;
