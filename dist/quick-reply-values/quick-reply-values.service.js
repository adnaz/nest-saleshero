"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValuesService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
// import { QuickReplyValue } from './quickReplyValue.entity';
const prisma_service_1 = require("../prisma.service");
const find_many_quick_reply_value_args_1 = require("../@generated/prisma-nestjs-graphql/quick-reply-value/find-many-quick-reply-value.args");
let QuickReplyValuesService = class QuickReplyValuesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async quickReplyValue(quickReplyValueWhereUniqueInput) {
        return this.prisma.quickReplyValue.findUnique({
            where: quickReplyValueWhereUniqueInput,
        });
    }
    async quickReplyValues(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.quickReplyValue.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createQuickReplyValue(data) {
        return this.prisma.quickReplyValue.create({
            data,
        });
    }
    async updateQuickReplyValue(params) {
        const { data, where } = params;
        return this.prisma.quickReplyValue.update({
            data,
            where,
        });
    }
    async deleteQuickReplyValue(where) {
        return this.prisma.quickReplyValue.delete({
            where,
        });
    }
};
QuickReplyValuesService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_service_1.PrismaService])
], QuickReplyValuesService);
exports.QuickReplyValuesService = QuickReplyValuesService;
