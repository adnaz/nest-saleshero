"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_update_many_mutation_input_1 = require("./reply-update-many-mutation.input");
const reply_where_input_1 = require("./reply-where.input");
let UpdateManyReplyArgs = class UpdateManyReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_many_mutation_input_1.ReplyUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_update_many_mutation_input_1.ReplyUpdateManyMutationInput)
], UpdateManyReplyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_input_1.ReplyWhereInput)
], UpdateManyReplyArgs.prototype, "where", void 0);
UpdateManyReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateManyReplyArgs);
exports.UpdateManyReplyArgs = UpdateManyReplyArgs;
