"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const find_many_actor_args_1 = require("../@generated/prisma-nestjs-graphql/actor/find-many-actor.args");
const actor_create_input_1 = require("../@generated/prisma-nestjs-graphql/actor/actor-create.input");
let ActorsService = class ActorsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async actor(actorWhereUniqueInput) {
        return this.prisma.actor.findUnique({
            where: actorWhereUniqueInput,
        });
    }
    async actors(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.actor.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createActor(data) {
        return this.prisma.actor.create({
            data,
        });
    }
    async updateActor(params) {
        const { data, where } = params;
        return this.prisma.actor.update({
            data,
            where,
        });
    }
    async deleteActor(where) {
        return this.prisma.actor.delete({
            where,
        });
    }
};
ActorsService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_service_1.PrismaService])
], ActorsService);
exports.ActorsService = ActorsService;
