"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const find_many_user_args_1 = require("../@generated/prisma-nestjs-graphql/user/find-many-user.args");
const update_one_user_args_1 = require("../@generated/prisma-nestjs-graphql/user/update-one-user.args");
const prisma_service_1 = require("../prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOne(username) {
        return this.prisma.user.findUnique({
            where: {
                username: username
            }
        });
    }
    async user(userWhereUniqueInput) {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }
    //type from @generated 
    async users(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createUser(data) {
        return this.prisma.user.create({
            data,
        });
    }
    async updateUser(params) {
        const { data, where } = params;
        return this.prisma.user.update({
            data,
            where,
        });
    }
    async deleteUser(where) {
        return this.prisma.user.delete({
            where,
        });
    }
};
UsersService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
