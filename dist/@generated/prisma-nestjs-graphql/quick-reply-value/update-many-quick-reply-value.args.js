"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyQuickReplyValueArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_update_many_mutation_input_1 = require("./quick-reply-value-update-many-mutation.input");
const quick_reply_value_where_input_1 = require("./quick-reply-value-where.input");
let UpdateManyQuickReplyValueArgs = class UpdateManyQuickReplyValueArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_update_many_mutation_input_1.QuickReplyValueUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_update_many_mutation_input_1.QuickReplyValueUpdateManyMutationInput)
], UpdateManyQuickReplyValueArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_input_1.QuickReplyValueWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_input_1.QuickReplyValueWhereInput)
], UpdateManyQuickReplyValueArgs.prototype, "where", void 0);
UpdateManyQuickReplyValueArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateManyQuickReplyValueArgs);
exports.UpdateManyQuickReplyValueArgs = UpdateManyQuickReplyValueArgs;
