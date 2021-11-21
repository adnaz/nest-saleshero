"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
let DeleteOneReplyArgs = class DeleteOneReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], DeleteOneReplyArgs.prototype, "where", void 0);
DeleteOneReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteOneReplyArgs);
exports.DeleteOneReplyArgs = DeleteOneReplyArgs;
