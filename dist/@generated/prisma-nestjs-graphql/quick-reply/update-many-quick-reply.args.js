"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyQuickReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_update_many_mutation_input_1 = require("./quick-reply-update-many-mutation.input");
const quick_reply_where_input_1 = require("./quick-reply-where.input");
let UpdateManyQuickReplyArgs = class UpdateManyQuickReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_update_many_mutation_input_1.QuickReplyUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_update_many_mutation_input_1.QuickReplyUpdateManyMutationInput)
], UpdateManyQuickReplyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_input_1.QuickReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_input_1.QuickReplyWhereInput)
], UpdateManyQuickReplyArgs.prototype, "where", void 0);
UpdateManyQuickReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateManyQuickReplyArgs);
exports.UpdateManyQuickReplyArgs = UpdateManyQuickReplyArgs;
