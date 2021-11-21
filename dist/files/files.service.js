"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const find_many_file_args_1 = require("../@generated/prisma-nestjs-graphql/file/find-many-file.args");
let FilesService = class FilesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async file(fileWhereUniqueInput) {
        return this.prisma.file.findUnique({
            where: fileWhereUniqueInput,
        });
    }
    async files(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.file.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createFile(data) {
        return this.prisma.file.create({
            data,
        });
    }
    async updateFile(params) {
        const { data, where } = params;
        return this.prisma.file.update({
            data,
            where,
        });
    }
    async deleteFile(where) {
        return this.prisma.file.delete({
            where,
        });
    }
};
FilesService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_service_1.PrismaService])
], FilesService);
exports.FilesService = FilesService;
