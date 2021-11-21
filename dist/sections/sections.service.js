"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
// import { Section } from './section.entity';
const prisma_service_1 = require("../prisma.service");
const find_many_section_args_1 = require("../@generated/prisma-nestjs-graphql/section/find-many-section.args");
let SectionsService = class SectionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async section(sectionWhereUniqueInput) {
        return this.prisma.section.findUnique({
            where: sectionWhereUniqueInput,
        });
    }
    async sections(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.section.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createSection(data) {
        return this.prisma.section.create({
            data,
        });
    }
    async updateSection(params) {
        const { data, where } = params;
        return this.prisma.section.update({
            data,
            where,
        });
    }
    async deleteSection(where) {
        return this.prisma.section.delete({
            where,
        });
    }
};
SectionsService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_service_1.PrismaService])
], SectionsService);
exports.SectionsService = SectionsService;
