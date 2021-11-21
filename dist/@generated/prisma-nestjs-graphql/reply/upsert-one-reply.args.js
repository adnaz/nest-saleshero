"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_create_input_1 = require("./reply-create.input");
const reply_update_input_1 = require("./reply-update.input");
let UpsertOneReplyArgs = class UpsertOneReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], UpsertOneReplyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_input_1.ReplyCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_create_input_1.ReplyCreateInput)
], UpsertOneReplyArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_input_1.ReplyUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_update_input_1.ReplyUpdateInput)
], UpsertOneReplyArgs.prototype, "update", void 0);
UpsertOneReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpsertOneReplyArgs);
exports.UpsertOneReplyArgs = UpsertOneReplyArgs;
