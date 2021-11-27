"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValuesResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const find_many_quick_reply_value_args_1 = require("../@generated/prisma-nestjs-graphql/quick-reply-value/find-many-quick-reply-value.args");
const quick_reply_value_create_input_1 = require("../@generated/prisma-nestjs-graphql/quick-reply-value/quick-reply-value-create.input");
const quick_reply_value_model_1 = require("../@generated/prisma-nestjs-graphql/quick-reply-value/quick-reply-value.model");
const update_one_quick_reply_value_args_1 = require("../@generated/prisma-nestjs-graphql/quick-reply-value/update-one-quick-reply-value.args");
const quick_reply_model_1 = require("../@generated/prisma-nestjs-graphql/quick-reply/quick-reply.model");
const quick_replies_service_1 = require("../quick-replies/quick-replies.service");
const users_service_1 = require("../users/users.service");
const quick_reply_values_service_1 = require("./quick-reply-values.service");
let QuickReplyValuesResolver = class QuickReplyValuesResolver {
    constructor(quickReplyValuesService, usersService, quickRepliesService) {
        this.quickReplyValuesService = quickReplyValuesService;
        this.usersService = usersService;
        this.quickRepliesService = quickRepliesService;
    }
    quickReplyValues(findManyQuickReplyValueArgs) {
        return this.quickReplyValuesService.quickReplyValues(findManyQuickReplyValueArgs);
    }
    async quickReplyValue(id) {
        return this.quickReplyValuesService.quickReplyValue({ id });
    }
    createQuickReplyValue(quickReplyValueCreateInput) {
        return this.quickReplyValuesService.createQuickReplyValue(quickReplyValueCreateInput);
    }
    updateQuickReplyValue(updateOneQuickReplyValueArgs) {
        return this.quickReplyValuesService.updateQuickReplyValue(updateOneQuickReplyValueArgs);
    }
    removeQuickReplyValue(id) {
        return this.quickReplyValuesService.deleteQuickReplyValue({ id });
    }
    async quickReply(quickReplyValue) {
        const { id } = quickReplyValue;
        return this.quickRepliesService.quickReply({ id });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(returns => [quick_reply_value_model_1.QuickReplyValue]),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [find_many_quick_reply_value_args_1.FindManyQuickReplyValueArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], QuickReplyValuesResolver.prototype, "quickReplyValues", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(retuns => quick_reply_value_model_1.QuickReplyValue),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], QuickReplyValuesResolver.prototype, "quickReplyValue", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(returns => quick_reply_value_model_1.QuickReplyValue),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('quickReplyValueCreateInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [quick_reply_value_create_input_1.QuickReplyValueCreateInput]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], QuickReplyValuesResolver.prototype, "createQuickReplyValue", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => quick_reply_value_model_1.QuickReplyValue),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [update_one_quick_reply_value_args_1.UpdateOneQuickReplyValueArgs]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], QuickReplyValuesResolver.prototype, "updateQuickReplyValue", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => quick_reply_value_model_1.QuickReplyValue),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], QuickReplyValuesResolver.prototype, "removeQuickReplyValue", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [quick_reply_value_model_1.QuickReplyValue]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], QuickReplyValuesResolver.prototype, "quickReply", null);
QuickReplyValuesResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(quick_reply_value_model_1.QuickReplyValue),
    (0, tslib_1.__metadata)("design:paramtypes", [quick_reply_values_service_1.QuickReplyValuesService, users_service_1.UsersService, quick_replies_service_1.QuickRepliesService])
], QuickReplyValuesResolver);
exports.QuickReplyValuesResolver = QuickReplyValuesResolver;
