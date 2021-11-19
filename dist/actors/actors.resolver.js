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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const actor_create_input_1 = require("../@generated/prisma-nestjs-graphql/actor/actor-create.input");
const actor_model_1 = require("../@generated/prisma-nestjs-graphql/actor/actor.model");
const find_many_actor_args_1 = require("../@generated/prisma-nestjs-graphql/actor/find-many-actor.args");
const update_one_actor_args_1 = require("../@generated/prisma-nestjs-graphql/actor/update-one-actor.args");
const users_service_1 = require("../users/users.service");
const actors_service_1 = require("./actors.service");
const courses_service_1 = require("../courses/courses.service");
const file_model_1 = require("../@generated/prisma-nestjs-graphql/file/file.model");
const files_service_1 = require("../files/files.service");
let ActorsResolver = class ActorsResolver {
    constructor(actorsService, filesService) {
        this.actorsService = actorsService;
        this.filesService = filesService;
    }
    actors(findManyActorArgs) {
        return this.actorsService.actors(findManyActorArgs);
    }
    async actor(id) {
        return this.actorsService.actor({ id });
    }
    createActor(actorCreateInput) {
        return this.actorsService.createActor(actorCreateInput);
    }
    updateActor(updateOneActorArgs) {
        return this.actorsService.updateActor(updateOneActorArgs);
    }
    removeActor(id) {
        return this.actorsService.deleteActor({ id });
    }
    async avatar(actor) {
        const { fileId } = actor;
        if (fileId) {
            return this.filesService.file({ id: fileId });
        }
        return null;
    }
};
__decorate([
    (0, graphql_1.Query)(returns => [actor_model_1.Actor]),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_actor_args_1.FindManyActorArgs]),
    __metadata("design:returntype", Promise)
], ActorsResolver.prototype, "actors", null);
__decorate([
    (0, graphql_1.Query)(retuns => actor_model_1.Actor),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ActorsResolver.prototype, "actor", null);
__decorate([
    (0, graphql_1.Mutation)(returns => actor_model_1.Actor),
    __param(0, (0, graphql_1.Args)('actorCreateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [actor_create_input_1.ActorCreateInput]),
    __metadata("design:returntype", void 0)
], ActorsResolver.prototype, "createActor", null);
__decorate([
    (0, graphql_1.Mutation)(() => actor_model_1.Actor),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_one_actor_args_1.UpdateOneActorArgs]),
    __metadata("design:returntype", void 0)
], ActorsResolver.prototype, "updateActor", null);
__decorate([
    (0, graphql_1.Mutation)(() => actor_model_1.Actor),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActorsResolver.prototype, "removeActor", null);
__decorate([
    (0, graphql_1.ResolveField)(() => file_model_1.File),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [actor_model_1.Actor]),
    __metadata("design:returntype", Promise)
], ActorsResolver.prototype, "avatar", null);
ActorsResolver = __decorate([
    (0, graphql_1.Resolver)(actor_model_1.Actor),
    __metadata("design:paramtypes", [actors_service_1.ActorsService, files_service_1.FilesService])
], ActorsResolver);
exports.ActorsResolver = ActorsResolver;
//# sourceMappingURL=actors.resolver.js.map