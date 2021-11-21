"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepliesService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
// import { Reply } from './reply.entity';
const prisma_service_1 = require("../prisma.service");
const find_many_reply_args_1 = require("../@generated/prisma-nestjs-graphql/reply/find-many-reply.args");
let RepliesService = class RepliesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async reply(replyWhereUniqueInput) {
        return this.prisma.reply.findUnique({
            where: replyWhereUniqueInput,
        });
    }
    async replies(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.reply.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createReply(data) {
        return this.prisma.reply.create({
            data,
        });
    }
    async updateReply(params) {
        const { data, where } = params;
        return this.prisma.reply.update({
            data,
            where,
        });
    }
    async deleteReply(where) {
        return this.prisma.reply.delete({
            where,
        });
    }
};
RepliesService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_service_1.PrismaService])
], RepliesService);
exports.RepliesService = RepliesService;
