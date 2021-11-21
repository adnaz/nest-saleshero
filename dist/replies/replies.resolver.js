"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepliesResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const reply_create_input_1 = require("../@generated/prisma-nestjs-graphql/reply/reply-create.input");
const reply_model_1 = require("../@generated/prisma-nestjs-graphql/reply/reply.model");
const find_many_reply_args_1 = require("../@generated/prisma-nestjs-graphql/reply/find-many-reply.args");
const update_one_reply_args_1 = require("../@generated/prisma-nestjs-graphql/reply/update-one-reply.args");
const users_service_1 = require("../users/users.service");
const replies_service_1 = require("./replies.service");
const sections_service_1 = require("../sections/sections.service");
const quick_replies_service_1 = require("../quick-replies/quick-replies.service");
const quick_reply_model_1 = require("../@generated/prisma-nestjs-graphql/quick-reply/quick-reply.model");
let RepliesResolver = class RepliesResolver {
    constructor(repliesService, sectionsService, quickRepliesService) {
        this.repliesService = repliesService;
        this.sectionsService = sectionsService;
        this.quickRepliesService = quickRepliesService;
    }
    replies(findManyReplyArgs) {
        return this.repliesService.replies(findManyReplyArgs);
    }
    async reply(id) {
        return this.repliesService.reply({ id });
    }
    createReply(replyCreateInput) {
        return this.repliesService.createReply(replyCreateInput);
    }
    updateReply(updateOneReplyArgs) {
        return this.repliesService.updateReply(updateOneReplyArgs);
    }
    removeReply(id) {
        return this.repliesService.deleteReply({ id });
    }
    async section(reply) {
        const { sectionId } = reply;
        if (sectionId) {
            return this.sectionsService.section({ id: sectionId });
        }
    }
    async quickReply(reply) {
        const { quickReplyId } = reply;
        return this.quickRepliesService.quickReply({ id: quickReplyId });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(returns => [reply_model_1.Reply]),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [find_many_reply_args_1.FindManyReplyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesResolver.prototype, "replies", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(retuns => reply_model_1.Reply),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesResolver.prototype, "reply", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(returns => reply_model_1.Reply),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('replyCreateInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [reply_create_input_1.ReplyCreateInput]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RepliesResolver.prototype, "createReply", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => reply_model_1.Reply),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [update_one_reply_args_1.UpdateOneReplyArgs]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RepliesResolver.prototype, "updateReply", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => reply_model_1.Reply),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RepliesResolver.prototype, "removeReply", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [reply_model_1.Reply]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesResolver.prototype, "section", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [reply_model_1.Reply]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesResolver.prototype, "quickReply", null);
RepliesResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(reply_model_1.Reply),
    (0, tslib_1.__metadata)("design:paramtypes", [replies_service_1.RepliesService, sections_service_1.SectionsService, quick_replies_service_1.QuickRepliesService])
], RepliesResolver);
exports.RepliesResolver = RepliesResolver;
