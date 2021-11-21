"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneQuickReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
let DeleteOneQuickReplyArgs = class DeleteOneQuickReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], DeleteOneQuickReplyArgs.prototype, "where", void 0);
DeleteOneQuickReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteOneQuickReplyArgs);
exports.DeleteOneQuickReplyArgs = DeleteOneQuickReplyArgs;
