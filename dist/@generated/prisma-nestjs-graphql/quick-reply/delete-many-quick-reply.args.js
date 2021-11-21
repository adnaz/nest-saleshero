"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyQuickReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_where_input_1 = require("./quick-reply-where.input");
let DeleteManyQuickReplyArgs = class DeleteManyQuickReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_input_1.QuickReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_input_1.QuickReplyWhereInput)
], DeleteManyQuickReplyArgs.prototype, "where", void 0);
DeleteManyQuickReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteManyQuickReplyArgs);
exports.DeleteManyQuickReplyArgs = DeleteManyQuickReplyArgs;
