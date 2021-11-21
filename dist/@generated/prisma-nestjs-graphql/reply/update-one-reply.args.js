"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_update_input_1 = require("./reply-update.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
let UpdateOneReplyArgs = class UpdateOneReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_input_1.ReplyUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_update_input_1.ReplyUpdateInput)
], UpdateOneReplyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], UpdateOneReplyArgs.prototype, "where", void 0);
UpdateOneReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateOneReplyArgs);
exports.UpdateOneReplyArgs = UpdateOneReplyArgs;
