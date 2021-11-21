"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_input_1 = require("./reply-where.input");
let DeleteManyReplyArgs = class DeleteManyReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_input_1.ReplyWhereInput)
], DeleteManyReplyArgs.prototype, "where", void 0);
DeleteManyReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteManyReplyArgs);
exports.DeleteManyReplyArgs = DeleteManyReplyArgs;
