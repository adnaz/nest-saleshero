"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickRepliesResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const quick_reply_value_model_1 = require("../@generated/prisma-nestjs-graphql/quick-reply-value/quick-reply-value.model");
const find_many_quick_reply_args_1 = require("../@generated/prisma-nestjs-graphql/quick-reply/find-many-quick-reply.args");
const quick_reply_create_input_1 = require("../@generated/prisma-nestjs-graphql/quick-reply/quick-reply-create.input");
const quick_reply_model_1 = require("../@generated/prisma-nestjs-graphql/quick-reply/quick-reply.model");
const update_one_quick_reply_args_1 = require("../@generated/prisma-nestjs-graphql/quick-reply/update-one-quick-reply.args");
const quick_reply_values_service_1 = require("../quick-reply-values/quick-reply-values.service");
const users_service_1 = require("../users/users.service");
const quick_replies_service_1 = require("./quick-replies.service");
let QuickRepliesResolver = class QuickRepliesResolver {
    constructor(quickRepliesService, usersService, quickReplyValuesService) {
        this.quickRepliesService = quickRepliesService;
        this.usersService = usersService;
        this.quickReplyValuesService = quickReplyValuesService;
    }
    quickReplies(findManyQuickReplyArgs) {
        return this.quickRepliesService.quickReplies(findManyQuickReplyArgs);
    }
    async quickReply(id) {
        return this.quickRepliesService.quickReply({ id });
    }
    createQuickReply(quickReplyCreateInput) {
        return this.quickRepliesService.createQuickReply(quickReplyCreateInput);
    }
    updateQuickReply(updateOneQuickReplyArgs) {
        return this.quickRepliesService.updateQuickReply(updateOneQuickReplyArgs);
    }
    removeQuickReply(id) {
        return this.quickRepliesService.deleteQuickReply({ id });
    }
    async values(quickReply) {
        const { id } = quickReply;
        return this.quickReplyValuesService.quickReplyValues({ where: { quickReplyId: { equals: id } } });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(returns => [quick_reply_model_1.QuickReply]),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [find_many_quick_reply_args_1.FindManyQuickReplyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], QuickRepliesResolver.prototype, "quickReplies", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(retuns => quick_reply_model_1.QuickReply),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], QuickRepliesResolver.prototype, "quickReply", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(returns => quick_reply_model_1.QuickReply),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('quickReplyCreateInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [quick_reply_create_input_1.QuickReplyCreateInput]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], QuickRepliesResolver.prototype, "createQuickReply", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => quick_reply_model_1.QuickReply),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [update_one_quick_reply_args_1.UpdateOneQuickReplyArgs]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], QuickRepliesResolver.prototype, "updateQuickReply", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => quick_reply_model_1.QuickReply),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], QuickRepliesResolver.prototype, "removeQuickReply", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => [quick_reply_value_model_1.QuickReplyValue]),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [quick_reply_model_1.QuickReply]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], QuickRepliesResolver.prototype, "values", null);
QuickRepliesResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(quick_reply_model_1.QuickReply),
    (0, tslib_1.__metadata)("design:paramtypes", [quick_replies_service_1.QuickRepliesService, users_service_1.UsersService, quick_reply_values_service_1.QuickReplyValuesService])
], QuickRepliesResolver);
exports.QuickRepliesResolver = QuickRepliesResolver;
