"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const find_many_app_args_1 = require("../@generated/prisma-nestjs-graphql/app/find-many-app.args");
let AppsService = class AppsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async app(appWhereUniqueInput) {
        return this.prisma.app.findUnique({
            where: appWhereUniqueInput,
        });
    }
    async apps(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.app.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createApp(data) {
        return this.prisma.app.create({
            data,
        });
    }
    async updateApp(params) {
        const { data, where } = params;
        return this.prisma.app.update({
            data,
            where,
        });
    }
    async deleteApp(where) {
        return this.prisma.app.delete({
            where,
        });
    }
};
AppsService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_service_1.PrismaService])
], AppsService);
exports.AppsService = AppsService;
