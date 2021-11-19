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
exports.RepliesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const replies_service_1 = require("./replies.service");
const create_reply_input_1 = require("./dto/create-reply.input");
const update_reply_input_1 = require("./dto/update-reply.input");
const reply_model_1 = require("../@generated/prisma-nestjs-graphql/reply/reply.model");
let RepliesResolver = class RepliesResolver {
    constructor(repliesService) {
        this.repliesService = repliesService;
    }
    createReply(createReplyInput) {
        return this.repliesService.create(createReplyInput);
    }
    findAll() {
        return this.repliesService.findAll();
    }
    findOne(id) {
        return this.repliesService.findOne(id);
    }
    updateReply(updateReplyInput) {
        return this.repliesService.update(updateReplyInput.id, updateReplyInput);
    }
    removeReply(id) {
        return this.repliesService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => reply_model_1.Reply),
    __param(0, (0, graphql_1.Args)('createReplyInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reply_input_1.CreateReplyInput]),
    __metadata("design:returntype", void 0)
], RepliesResolver.prototype, "createReply", null);
__decorate([
    (0, graphql_1.Query)(() => [reply_model_1.Reply], { name: 'replies' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RepliesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => reply_model_1.Reply, { name: 'reply' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RepliesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => reply_model_1.Reply),
    __param(0, (0, graphql_1.Args)('updateReplyInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_reply_input_1.UpdateReplyInput]),
    __metadata("design:returntype", void 0)
], RepliesResolver.prototype, "updateReply", null);
__decorate([
    (0, graphql_1.Mutation)(() => reply_model_1.Reply),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RepliesResolver.prototype, "removeReply", null);
RepliesResolver = __decorate([
    (0, graphql_1.Resolver)(() => reply_model_1.Reply),
    __metadata("design:paramtypes", [replies_service_1.RepliesService])
], RepliesResolver);
exports.RepliesResolver = RepliesResolver;
//# sourceMappingURL=replies.resolver.js.map