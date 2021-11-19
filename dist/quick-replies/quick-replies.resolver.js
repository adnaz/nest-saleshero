"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickRepliesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const find_many_quick_reply_args_1 = require("../@generated/prisma-nestjs-graphql/quick-reply/find-many-quick-reply.args");
const quick_reply_create_input_1 = require("../@generated/prisma-nestjs-graphql/quick-reply/quick-reply-create.input");
const quick_reply_model_1 = require("../@generated/prisma-nestjs-graphql/quick-reply/quick-reply.model");
const update_one_quick_reply_args_1 = require("../@generated/prisma-nestjs-graphql/quick-reply/update-one-quick-reply.args");
const users_service_1 = require("../users/users.service");
const quick_replies_service_1 = require("./quick-replies.service");
let QuickRepliesResolver = class QuickRepliesResolver {
    constructor(quickRepliesService, usersService) {
        this.quickRepliesService = quickRepliesService;
        this.usersService = usersService;
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
};
__decorate([
    (0, graphql_1.Query)(returns => [quick_reply_model_1.QuickReply]),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_quick_reply_args_1.FindManyQuickReplyArgs]),
    __metadata("design:returntype", Promise)
], QuickRepliesResolver.prototype, "quickReplies", null);
__decorate([
    (0, graphql_1.Query)(retuns => quick_reply_model_1.QuickReply),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuickRepliesResolver.prototype, "quickReply", null);
__decorate([
    (0, graphql_1.Mutation)(returns => quick_reply_model_1.QuickReply),
    __param(0, (0, graphql_1.Args)('quickReplyCreateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [quick_reply_create_input_1.QuickReplyCreateInput]),
    __metadata("design:returntype", void 0)
], QuickRepliesResolver.prototype, "createQuickReply", null);
__decorate([
    (0, graphql_1.Mutation)(() => quick_reply_model_1.QuickReply),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_one_quick_reply_args_1.UpdateOneQuickReplyArgs]),
    __metadata("design:returntype", void 0)
], QuickRepliesResolver.prototype, "updateQuickReply", null);
__decorate([
    (0, graphql_1.Mutation)(() => quick_reply_model_1.QuickReply),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QuickRepliesResolver.prototype, "removeQuickReply", null);
QuickRepliesResolver = __decorate([
    (0, graphql_1.Resolver)(quick_reply_model_1.QuickReply),
    __metadata("design:paramtypes", [quick_replies_service_1.QuickRepliesService, users_service_1.UsersService])
], QuickRepliesResolver);
exports.QuickRepliesResolver = QuickRepliesResolver;
//# sourceMappingURL=quick-replies.resolver.js.map