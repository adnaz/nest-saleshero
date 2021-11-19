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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickRepliesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const find_many_quick_reply_args_1 = require("../@generated/prisma-nestjs-graphql/quick-reply/find-many-quick-reply.args");
let QuickRepliesService = class QuickRepliesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async quickReply(quickReplyWhereUniqueInput) {
        return this.prisma.quickReply.findUnique({
            where: quickReplyWhereUniqueInput,
        });
    }
    async quickReplies(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.quickReply.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createQuickReply(data) {
        return this.prisma.quickReply.create({
            data,
        });
    }
    async updateQuickReply(params) {
        const { data, where } = params;
        return this.prisma.quickReply.update({
            data,
            where,
        });
    }
    async deleteQuickReply(where) {
        return this.prisma.quickReply.delete({
            where,
        });
    }
};
QuickRepliesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuickRepliesService);
exports.QuickRepliesService = QuickRepliesService;
//# sourceMappingURL=quick-replies.service.js.map