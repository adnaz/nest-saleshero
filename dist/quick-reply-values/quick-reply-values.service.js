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
exports.QuickReplyValuesService = void 0;
const common_1 = require("@nestjs/common");
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
QuickReplyValuesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuickReplyValuesService);
exports.QuickReplyValuesService = QuickReplyValuesService;
//# sourceMappingURL=quick-reply-values.service.js.map