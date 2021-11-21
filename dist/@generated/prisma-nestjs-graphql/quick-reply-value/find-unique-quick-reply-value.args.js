"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueQuickReplyValueArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_where_unique_input_1 = require("./quick-reply-value-where-unique.input");
let FindUniqueQuickReplyValueArgs = class FindUniqueQuickReplyValueArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput)
], FindUniqueQuickReplyValueArgs.prototype, "where", void 0);
FindUniqueQuickReplyValueArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindUniqueQuickReplyValueArgs);
exports.FindUniqueQuickReplyValueArgs = FindUniqueQuickReplyValueArgs;
