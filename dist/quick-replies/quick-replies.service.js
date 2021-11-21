"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickRepliesService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
// import { QuickReply } from './quickReply.entity';
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
QuickRepliesService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_service_1.PrismaService])
], QuickRepliesService);
exports.QuickRepliesService = QuickRepliesService;
