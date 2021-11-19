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
exports.ActorsService = void 0;
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
ActorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ActorsService);
exports.ActorsService = ActorsService;
//# sourceMappingURL=actors.service.js.map