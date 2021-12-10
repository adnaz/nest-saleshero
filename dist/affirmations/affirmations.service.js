"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
// import { Affirmation } from './affirmation.entity';
const prisma_service_1 = require("../prisma.service");
const find_many_affirmation_args_1 = require("../@generated/prisma-nestjs-graphql/affirmation/find-many-affirmation.args");
const affirmation_create_input_1 = require("../@generated/prisma-nestjs-graphql/affirmation/affirmation-create.input");
let AffirmationsService = class AffirmationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async affirmation(affirmationWhereUniqueInput) {
        return this.prisma.affirmation.findUnique({
            where: affirmationWhereUniqueInput,
        });
    }
    async affirmations(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.affirmation.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createAffirmation(data) {
        return this.prisma.affirmation.create({
            data,
        });
    }
    async updateAffirmation(params) {
        const { data, where } = params;
        return this.prisma.affirmation.update({
            data,
            where,
        });
    }
    async deleteAffirmation(where) {
        return this.prisma.affirmation.delete({
            where,
        });
    }
};
AffirmationsService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_service_1.PrismaService])
], AffirmationsService);
exports.AffirmationsService = AffirmationsService;
