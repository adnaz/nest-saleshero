"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyQuickReplyValueArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_where_input_1 = require("./quick-reply-value-where.input");
let DeleteManyQuickReplyValueArgs = class DeleteManyQuickReplyValueArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_input_1.QuickReplyValueWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_input_1.QuickReplyValueWhereInput)
], DeleteManyQuickReplyValueArgs.prototype, "where", void 0);
DeleteManyQuickReplyValueArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteManyQuickReplyValueArgs);
exports.DeleteManyQuickReplyValueArgs = DeleteManyQuickReplyValueArgs;
