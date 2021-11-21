"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
let FindUniqueReplyArgs = class FindUniqueReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], FindUniqueReplyArgs.prototype, "where", void 0);
FindUniqueReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindUniqueReplyArgs);
exports.FindUniqueReplyArgs = FindUniqueReplyArgs;
